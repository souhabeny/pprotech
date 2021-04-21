import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavComponent } from './Components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {AppRoutingModule} from "./app-routing.module";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { ProductsComponent } from './Components/products/products.component';
import { MiniPanierComponent } from './Components/mini-panier/mini-panier.component';
import { CreateProduitComponent } from './Components/Admin/create-produit/create-produit.component';
import { PanierComponent } from './Components/panier/panier.component';
import { LoginComponent } from './Components/register-login/login/login.component';
import { RegisterComponent } from './Components/register-login/register/register.component';
import {DialogComponent} from "./Components/register-login/dialog.component";
import { RegisterLoginComponent } from './Components/register-login/register-login.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import {CategorieFilter} from './souscateg.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ShowProduitComponent } from './Components/show-produit/show-produit.component';
import { AdminCommandComponent } from './Components/admin-command/admin-command.component';
import { DialogDataComponent } from './Components/dialog-data/dialog-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    ProductsComponent,
    MiniPanierComponent,
    CreateProduitComponent,
    PanierComponent,
    LoginComponent,
    RegisterComponent,
    RegisterLoginComponent,
    CheckoutComponent,
    ContactComponent,
    CategorieFilter,
  
    ShowProduitComponent,
  
    AdminCommandComponent,
  
    DialogDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, MatButtonModule, MatMenuModule, MatGridListModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    /*MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDialogModule,*/
    HttpClientModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  // MatLabelModule,
    MatInputModule, MatDialogModule,
    MatSnackBarModule,
    
  ],
  
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
