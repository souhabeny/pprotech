import { Component, OnInit } from '@angular/core';
import * as SecureLS from 'secure-ls';
import {Produit} from "../../Models/produit";
import {NavComponent} from "../nav/nav.component";
interface CartProdcut {
  productToAdd: Produit;
  qte: number;
}

@Component({
  selector: 'app-mini-panier',
  templateUrl: './mini-panier.component.html',
  styleUrls: ['./mini-panier.component.css']
})
export class MiniPanierComponent implements OnInit {
  tabRes: CartProdcut[];
  totalPrice: number;
  ls: SecureLS;

  constructor(private navComponent: NavComponent) {
  }

  ngOnInit() {
    this.ls = new SecureLS({encodingType: 'aes'});
    this.totalPrice = 0;
    this.tabRes = this.ls.get('_temp_user_p_key');
    if (this.tabRes.length > 0) {
      for (const f of this.tabRes) {
        this.totalPrice += (f.productToAdd.prix * f.qte);
      }
    }
  }
  recup() {
    this.tabRes = this.ls.get('_temp_user_p_key');
    this.totalPrice = 0;
    if (this.tabRes.length > 0) {
      for (const f of this.tabRes) {
        this.totalPrice += (f.productToAdd.prix * f.qte);
      }
    }
  }

  hide() {
    this.navComponent.hideShowPan(2);
  }

  incr(idProd: string) {
    for (const f of this.tabRes) {
      if (f.productToAdd._id.toString() === idProd.toString()) {
        f.qte++;
        this.totalPrice += (f.productToAdd.prix);
        break; }}
    this.ls.set('_temp_user_p_key', this.tabRes);
  }

  decr(idProd: string) {
    for (const f of this.tabRes) {
      if (f.productToAdd._id.toString() === idProd.toString()) {
        f.qte--;
        this.totalPrice -= (f.productToAdd.prix);
        if ( f.qte === 0) {
          this.suppProduct(f.productToAdd._id) ;
        }
        break; }}
    this.ls.set('_temp_user_p_key', this.tabRes);
  }


  suppProduct(idProd: string) {
    this.tabRes = this.ls.get('_temp_user_p_key');
    console.log(this.tabRes) ;
    let i = 0 ;
    for (const f of this.tabRes) {
      if (f.productToAdd._id === idProd) {
        this.tabRes.splice(i, 1);
        break;
      }
      i++ ;
    }
    this.ls.set('_temp_user_p_key', this.tabRes);
    this.recup();
  }
}

