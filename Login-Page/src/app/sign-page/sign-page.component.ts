import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.scss'],
  animations: [
    trigger('loginAnimation', [
      state('hidden', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      state('visible', style({
        transform: 'translateX(100%)',
        opacity: 0,
      })),
      transition('hidden <=> visible', animate('0.5s'))
    ]),
    trigger('signInAnimation', [
      state('hidden', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      state('visible', style({
        transform: 'translateX(-100%)',
        opacity: 0,
      })),
      transition('hidden <=> visible', animate('0.5s'))
    ]),
  ]

})
export class SignPageComponent {

  isHidden = true

  switchLoginVisibility() {
    this.isHidden = !this.isHidden;
  }
}
