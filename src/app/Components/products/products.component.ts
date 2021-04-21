import { Component, OnInit } from '@angular/core';
import {Produit} from "../../Models/produit";
import {Categorie} from "../../Models/categorie";
import {SousCategorie} from '../../Models/sousCategorie';
import {ActivatedRoute, Router} from "@angular/router";
import * as SecureLS from 'secure-ls';
import {MiniPanierComponent} from "../mini-panier/mini-panier.component";
import {ProduitService} from "../../Services/Produit/produit.service";
import {CategorieService} from "../../Services/Categorie/categorie.service";
import {SousCategorieService} from '../../Services/SousCategorie/sous-categorie.service';
import {MatSnackBar} from '@angular/material/snack-bar';
interface CartProdcut {
  productToAdd: Produit;
  qte: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  sousCateg = null;
  products: Produit[];
  category: Categorie;
  categories: Categorie[];
  idcateg:any;
  souscategories:SousCategorie[];
  cart: CartProdcut;
  private tabRes: CartProdcut[];
  private test = true;
  private pan: MiniPanierComponent;
  private ls: SecureLS;
  categsearch:string;
  boolCateg=true;
  isAdmin=false;
  constructor(private _snackBar: MatSnackBar,private productService: ProduitService,private categService:CategorieService, private router: Router,
              private route: ActivatedRoute,private souscaregService:SousCategorieService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sousCateg = params['name'];
    })

    this.ls = new SecureLS({encodingType: 'aes'});
    this.reloadData();
    this.getCategorie();
    //this.getSousCategorie(this.idcateg);
    this.isAdmin = localStorage.getItem("role") == "ADMIN";
  }
  getCategorie():void
{
 this.categService.findAll().subscribe(categories => {
    this.categories=categories.categories;
  console.log(this.categories);
  });
  
}
openSnackBar(message) {
  this._snackBar.open(message, 'fermer', {
    duration: 5000,
    horizontalPosition: 'end',
    verticalPosition: 'top',
    panelClass: ['green-snackbar'],
  });
}

deleteprod(produit:Produit):void
{
    this.productService.delete(produit._id).subscribe(
    data=>{ 
   this.openSnackBar("Produit supprimé !")
   });
    this.products=this.products.filter(p=>p!==produit);
}
deleteCategorie(categorie:Categorie):void
{
    this.categService.delete(categorie._id).subscribe(
    data=>{ 
  this.openSnackBar("Categorie supprimé !")
   });
    this.categories=this.categories.filter(c=>c!==categorie);
}

deletesousCategorie(souscategorie:SousCategorie):void
{ 
    this.souscaregService.delete(souscategorie._id).subscribe(
    data=>{ 
      this.afficherSousCateg(souscategorie.categorie);
  this.openSnackBar("sous-categorie supprimé !");
 
   });
   //this.afficherSousCateg(souscategorie.categorie);
 
   this.souscategories=this.souscategories.filter(sc=>sc._id!==souscategorie._id);
    console.log(this.souscategories)
}
categsearchmethod(scategorie:SousCategorie)
{
   this.categsearch=scategorie._id;
}
categsearchall()
{
 this.categsearch=null;
}
/*getSousCategorie(id):void
{
 this.souscaregService.findByCategorie(id).subscribe(souscategories => {
    this.souscategories=souscategories.souscategories;
  console.log(this.souscategories);
  });
  
}*/
afficherSousCateg(idcateg){

//this.idcateg=categorie._id;
//this.getSousCategorie(this.idcateg);
this.souscaregService.findByCategorie(idcateg).subscribe(souscategories => {
  this.souscategories=souscategories.sousCategories;
console.log(this.souscategories);


//this.boolCateg=false;
});

//console.log("hhhhhhhhhh++++++"+this.idcateg)
}

  reloadData() {
    if (this.sousCateg == null) {
      this.productService.findAll().subscribe(r => {
        this.products = r.produits;
        //console.log(r);
      });
    } else {
      this.productService.findBySousCateg(this.sousCateg).subscribe(r => {
        this.products = r.produits;
        console.log(r);
      });
    }
  }

  deleteProduct(idProduct: number) {
    this.productService.delete(idProduct.toString()).subscribe(data => {
      console.log(data);
      this.reloadData();
    }, error => console.log(error));
  }

  productDetails(id: number) {
    this.router.navigate(['detailProduct', id]);
  }

  updateProduct(id: number) {
    this.reloadData();
    this.router.navigate(['updateProduct', id]);
  }

  addToCarta(newProduct: Produit) {
    this.tabRes = this.ls.get('_temp_user_p_key');
    // this.tabRes = JSON.parse(this.allProductStringRes);
    console.log(this.tabRes) ;
    // tslint:disable-next-line:triple-equals
    if (this.tabRes == null || this.tabRes == undefined || this.tabRes.length == 0) {
      this.tabRes = [] ;
      this.tabRes.push(this.cart = {productToAdd: newProduct, qte: 1}); console.log('tab jdida ');
    } else if (this.tabRes.length > 0) {
      for (const f of this.tabRes) {
        if (f.productToAdd._id.toString() === newProduct._id.toString()) {
          f.qte = f.qte + 1;
          this.test = false;
          break;
        } else { this.test = true ; }}
      if (this.test === true) {
        this.cart = {productToAdd: newProduct, qte: 1};
        this.tabRes.push(this.cart);
        console.log('zedna produit jdid khater ' ); }
    }
    // this.allProductStringRes = JSON.stringify(this.tabRes);
    this.ls.set('_temp_user_p_key', this.tabRes);
    // tslint:disable-next-line:no-unused-expression label-position
  }
}
