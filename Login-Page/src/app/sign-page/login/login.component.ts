import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  passwd: string = '';

  invalidEmail: string = '';
  invalidPasswd: string = '';

  @Output()
  showEmitter = new EventEmitter<any>;

  formulario = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6))
  });

  switchOnClick() {
    this.showEmitter.emit(null);

    this.invalidEmail = '';
    this.invalidPasswd = '';
  }

  loginClick() {
    const form = this.formulario.controls;

    this.invalidEmail = form.email.status.toLowerCase();
    this.invalidPasswd = form.password.status.toLowerCase();
  }

}
