import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../../Models/client";
import {ClientService} from "../../Services/Client/client.service";
import {MatDialog} from "@angular/material/dialog";
import {CommandeService} from "../../Services/Commande/commande.service";
import {ProduitService} from "../../Services/Produit/produit.service";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  user: Client;
  mycommandes=[];
  produits=[];
  index:number;
  constructor(private produitService:ProduitService,private commandeService:CommandeService,private route: ActivatedRoute, private clientService: ClientService,
              private dialog: MatDialog) {
    this.user = new Client();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['price']);
    });
    this.clientService.findById(localStorage.getItem("userId")).subscribe(value => {
      this.user = value.client;
      console.log(this.user);
    })
    this.getmycommande()
  }
  getmycommande():void{
    this.commandeService.findMyCommandes().subscribe(order => {
      this.mycommandes=order.order;
      //this.getproduitId(commandes.commandes.produits[0]._id)
    console.log(this.mycommandes);
    });
  }
  getproduitId(id) {
   this.produitService.findById(id).subscribe(produits=>{
     this.produits=produits;
     console.log(this.produits)
   })
  }
}
