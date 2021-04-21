import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../../Services/Authentification/authentification.service";
import {Login} from "../../../Models/login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error:any;
  error2:any;
  user: Login;
  constructor(private formBuilder: FormBuilder, private auth: AuthentificationService,
              private router: Router) {
    this.user = new Login();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    return this.auth.login(this.user).subscribe(r => {
      // @ts-ignore
      if (r.error) {
        console.log("admin");
        return this.auth.loginAdmin(this.user).subscribe(value => {
          console.log(value);
          this.error=value;
          this.error2=this.error.error;
          console.log(this.error.error )
          // @ts-ignore
          if (value.token) {
            // @ts-ignore
            localStorage.setItem('token', value.token);
            // @ts-ignore
            localStorage.setItem('role', value.role);
            // @ts-ignore
            localStorage.setItem('userId', value.userId);
            this.router.navigateByUrl('/')
          }
        })
      } else {
        console.log("user");
        // @ts-ignore
        localStorage.setItem('token', r.token);
        // @ts-ignore
        localStorage.setItem('role', r.role);
        // @ts-ignore
        localStorage.setItem('userId', r.userId);
        console.log(r);
        this.router.navigateByUrl('/')
      }
    }, error => {
    });
  }

}
