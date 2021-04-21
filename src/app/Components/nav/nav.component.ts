import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0px',
        overflow: 'hidden',
        opacity: '0'
      })),
      state('final', style({
        overflow: 'hidden',
        opacity: '0.9'
      })),
      transition('initial=>final', animate('300ms')),
      transition('final=>initial', animate('300ms'))
    ]),
  ]
})
export class NavComponent implements OnInit {
  @Input() alwaysHideMinPan: boolean;
  @Input() actif: string;
  acHome: boolean;
  acLogReg: boolean;
  acCon: boolean;
  private isOnP: boolean;
  hideMinPan: boolean;
  isAdmin = false;
  isLogged;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isAdmin = localStorage.getItem("role") == "ADMIN";
    this.isLogged = localStorage.getItem("token") != null;

    if (this.alwaysHideMinPan) {
      this.acHome = false;
      this.acLogReg = false;
      this.acCon = false;
      this.hideMinPan = true;
    } else {
      if (this.actif === 'home') {
        this.acHome = true;
      } else if (this.actif === 'contact') {
        this.acCon = true;
      } else {
        this.acLogReg = true;
      }
    }
    this.alwaysHideMinPan = false;
    this.isOnP = true;
  }


  hideShowPan(x) {
    this.isOnP = x !== 1;

  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/');   
    if(this.router.url=='/')
    {
      window.location.reload();
    }
  
    
  }

  getProds(pcPortbale: string) {
      // this.router.navigateByUrl('products/souscateg/?name='+ pcPortbale);
  }
}
