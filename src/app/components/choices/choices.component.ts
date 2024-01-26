import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss']
})
export class ChoicesComponent {

  constructor(private router: Router) {}


  navigateToLogin(loginType: string) {
    this.router.navigate(['/login', loginType]);
  }

  
}
