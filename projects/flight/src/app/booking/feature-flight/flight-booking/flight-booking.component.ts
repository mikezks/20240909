import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-flight-booking',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink
  ],
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class FlightBookingComponent {}
