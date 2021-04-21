import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import {ProduitService} from "../../Services/Produit/produit.service";
@Component({
  selector: 'app-show-produit',
  templateUrl: './show-produit.component.html',
  styleUrls: ['./show-produit.component.css']
})
export class ShowProduitComponent implements OnInit {
id:any;
produit:Produit;
  constructor(private route:ActivatedRoute,private produitService:ProduitService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.produitService.findById(this.id).subscribe(data=>{
      this.produit=data.produit;
      console.log(this.produit);
    })
  }

}
