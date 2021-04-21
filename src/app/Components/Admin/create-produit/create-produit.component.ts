import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";
import {Produit} from "../../../Models/produit";
import {Categorie} from "../../../Models/categorie";
import {ProduitService} from "../../../Services/Produit/produit.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CategorieService} from "../../../Services/Categorie/categorie.service";
import {SousCategorieService} from "../../../Services/SousCategorie/sous-categorie.service";
import {SousCategorie} from "../../../Models/sousCategorie";
import {UploadService} from "../../../Services/Upload/upload.service";

import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {
  @Output() closeAll = new EventEmitter<boolean>();
  uploadedFiles: Array < File >;
  imagePath: string;
  imagePathCateg: string;
  imagePathsousCateg: string;
  product: Produit = new Produit();
  categorie:Categorie=new Categorie();
  souscategorie:SousCategorie=new SousCategorie();
  submitted = false;
  selectedCategory: Categorie;
  selectedCategorysc: Categorie;
  selectedFile: File;
  event1;
  imgUrl: any;
  recievedImageData: any;
  base64Data: any;
  convertImage: any;
  categoriesList: Array<Categorie>;
  sousCategoriesList: Array<SousCategorie>;

  constructor(private _snackBar: MatSnackBar,private productService: ProduitService, private router: Router, private httpClient: HttpClient,
              private categorieService: CategorieService, private sousCategorieService: SousCategorieService,
              private uploadService: UploadService) {
    this.categoriesList = new Array<Categorie>();
    this.sousCategoriesList = new Array<SousCategorie>();
  }

  ngOnInit() {
    this.categorieService.findAll().subscribe(data => this.categoriesList = data.categories, error =>
      console.log(error));
  }
  newProduct(): void {
    this.submitted = false;
    this.product = new Produit();
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  save() {
    try {
      this.upload();
      this.productService.save(this.product)
        .subscribe(data => console.log(data), error => {console.log(error);
        
          this.productService.findAll(); });
      this.product = new Produit();
      this.openSnackBarSuccess("Produit creé avec succés")
      //window.location.reload();
    } catch (e) {
     this.openSnackBarError("Erreur création produit !");
    }
  }
  saveCategorie(){
    try {
      this.uploadcategorie();
      this.categorieService.save(this.categorie)
        .subscribe(data => console.log(data), error => {console.log(error);
        
         // this.productService.findAll();
         });
      this.categorie = new Categorie();
      this.openSnackBarSuccess("Categorie creé avec succés")
      //window.location.reload();
    } catch (e) {
      this.openSnackBarError('Erreur creation categorie !');
    }
  }
  savesousCategorie(){
    try {
      
      this.sousCategorieService.save(this.souscategorie)
        .subscribe(data => console.log(data), error => {
          console.log(error);
        
        
         });
      this.souscategorie = new SousCategorie();
      this.openSnackBarSuccess("Sous-categorie creé avec succés")
      
    } catch (e) {
      this.openSnackBarError("Erreur sous-categorie  !");
    }
  }
  openSnackBarSuccess(message) {
    this._snackBar.open(message, 'X', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top', 
      panelClass: ['green-snackbar'],
    });
  }
  openSnackBarError(message) {
    this._snackBar.open(message, 'X', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top', 
      panelClass: ['red-snackbar'],
    });
  }
  closeThis() {
    this.submitted = true;
    this.save();
    this.closeAll.emit(true);
  }

  onChange(value: any) {
    // @ts-ignore
    console.log(this.selectedCategory.nom);
    this.sousCategorieService.findByCategorie(this.selectedCategory._id).subscribe(value1 => {
      this.sousCategoriesList = value1.sousCategories;
      console.log(value1)
    })
  }
  

  fileChange($event: Event) {
    // @ts-ignore
    this.uploadedFiles = $event.target.files;
    console.log(this.uploadedFiles);
    this.upload();
  }
  fileChangeCateg($event: Event) {
    // @ts-ignore
    this.uploadedFiles = $event.target.files;
    console.log(this.uploadedFiles+"caaaaaaaaaaaaaateg");
    this.uploadcategorie();
  }
  
 
  upload() {
    const formData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.uploadService.upload(formData).subscribe((response) => {
      console.log(response);
      const img = document.getElementById('img') as HTMLImageElement;
      // @ts-ignore
      this.product.image = response.name;
      this.imagePath = 'http://localhost:4000/files/' + this.product.image;
      console.log(this.product);
    });
  }
  uploadcategorie() {
    const formData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.uploadService.upload(formData).subscribe((response) => {
      console.log(response);
     // const img = document.getElementById('img') as HTMLImageElement;
      // @ts-ignore
      this.categorie.image = response.name;
      this.imagePathCateg = 'http://localhost:4000/files/' + this.categorie.image;
      console.log(this.categorie);
    });
  }



  
}
