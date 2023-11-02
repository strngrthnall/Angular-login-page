import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  name: string = '';
  email: string = '';
  password: string= '';

  @Output()
  showEmitter = new EventEmitter<any>;

  switchOnClick() {
    this.showEmitter.emit(null)
  }

  signinClick() {
    console.log(`${this.name} - ${this.email} - ${this.password}`)
  }
}
