import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output()
  showEmitter = new EventEmitter<any>;

  switchOnClick() {
    this.showEmitter.emit(null);
  }

}
