import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.scss']
})
export class SignPageComponent {

  loginVisibility = "show"
  signinVisibility = "hidden"

  switchLoginVisibility() {
    if(this.loginVisibility === "show") {
      this.loginVisibility = "hidden";
      this.signinVisibility = "show";
    } else {
      this.loginVisibility = "show";
      this.signinVisibility = "hidden";
    }
  }
}
