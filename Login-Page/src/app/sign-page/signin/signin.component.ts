import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  name: string = '';
  email: string = '';
  passwd: string = '';

  invalidName: string = '';
  invalidEmail: string = '';
  invalidPasswd: string= '';

  @Output()
  showEmitter = new EventEmitter<any>;

  formulario = new FormGroup({
    name: new FormControl('', Validators.minLength(3)),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6))
  });

  switchOnClick() {
    this.showEmitter.emit(null);

    this.invalidName='';
    this.invalidEmail = '';
    this.invalidPasswd = '';
  }

  signinClick() {
    const form = this.formulario.controls;

    console.log(form.name.status.toLocaleLowerCase());

    this.invalidName = form.name.status.toLocaleLowerCase();
    this.invalidEmail = form.email.status.toLowerCase();
    this.invalidPasswd = form.password.status.toLowerCase();
  }
}
