import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {RegisterLoginComponent} from "./Components/register-login/register-login.component";
import {PanierComponent} from "./Components/panier/panier.component";
import {CreateProduitComponent} from "./Components/Admin/create-produit/create-produit.component";
import {CheckoutComponent} from "./Components/checkout/checkout.component";
import {ProductsComponent} from "./Components/products/products.component";
import {ContactComponent} from "./Components/contact/contact.component";
import {ShowProduitComponent} from "./Components/show-produit/show-produit.component";
import {AdminCommandComponent} from "./Components/admin-command/admin-command.component";

const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path : 'Login', component: RegisterLoginComponent},
  {path : 'checkout', component: CheckoutComponent},
  {path : 'commandeclient', component: CheckoutComponent},
  {path : 'panier', component: PanierComponent},
  {path: 'admin/addproduct', component: CreateProduitComponent},
  {path: 'contact', component: ContactComponent},
  {path: "products/souscateg/:name", component: ProductsComponent},
  {path:"showproduit/:id",component:ShowProduitComponent},
  {path:"adminCommande",component:AdminCommandComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
