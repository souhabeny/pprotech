import { Component, OnInit } from '@angular/core';
import {Login} from "../../../Models/login";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Client} from "../../../Models/client";
import {DialogComponent} from "../dialog.component";
import {ClientService} from "../../../Services/Client/client.service";
import {MatSnackBar} from '@angular/material/snack-bar';
type Type = 'text' | 'password' ;


// la fonction de password et confirm password
export function MustMatch(controlName: string, matchingControlName: string,formBuilder: FormBuilder) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {};
  user: Client;
  registerForm: FormGroup;
  maxDate = new Date(2003, 0, 0);
  minDate = new Date(1920, 0, 1);
  msgsucce:any;
  msgsucces2:any;
  private convertDate: string;
  SignForm: FormGroup;
  public reactiveForm: FormGroup = new FormGroup({
    recaptchaReactive: new FormControl(null, Validators.required)
  });
  gender;
  dialogComponent: MatDialogRef<DialogComponent>;



  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialog: MatDialog, private clientService: ClientService) {
    this.user = new Client();
  }

  ngOnInit() {
    this.SignForm = this.formBuilder.group({
      nom:['',[Validators.required]],
      prenom:['',[Validators.required]],
      adresse:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  openSnackBar(message) {
    this._snackBar.open(message, 'fermer', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }


  add() {
    // console.log(this.user);
    //this.user.password = "Abcd123";
    this.clientService.save(this.user).subscribe(value => {
      this.msgsucce=value;
    this.msgsucces2=this.msgsucce.message;
      this.openSnackBar(this.msgsucces2)
      console.log(this.msgsucces2);
    });
  }
}
