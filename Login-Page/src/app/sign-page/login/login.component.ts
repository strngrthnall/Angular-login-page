import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  @Output()
  showEmitter = new EventEmitter<any>;

  switchOnClick() {
    this.showEmitter.emit(null);
  }

  loginClick() {
    console.log(`${this.email} - ${this.password}`)
  }

}
