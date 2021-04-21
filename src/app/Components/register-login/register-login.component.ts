import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  thisPage: string;
  constructor() { }
  Selected=true;
   
  ngOnInit() {
    this.thisPage = 'logReg';
    document.getElementById("myDivL").style.backgroundColor = "#e6e6e6";
  }
  ButtonchangeSignup()
  { 
  
    this.Selected=false;
    if(this.Selected==false)
    {console.log(this.Selected)
    document.getElementById("myDivL").style.backgroundColor = "white";
    document.getElementById("myDivS").style.backgroundColor = "#e6e6e6";
    }
  }
  ButtonchangeLogin()
  {
    this.Selected=true;
    if(this.Selected==true)
    { console.log(this.Selected)
    document.getElementById("myDivL").style.backgroundColor = "#e6e6e6";
    document.getElementById("myDivS").style.backgroundColor = "white";
    }
  }
}
