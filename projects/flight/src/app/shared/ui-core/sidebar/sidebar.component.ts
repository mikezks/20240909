import { AsyncPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar-cmp',
  standalone: true,
  imports: [
    NgClass, AsyncPipe,
    RouterLink, RouterLinkActive,
  ],
  template: `
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="http://angulararchitects.io" class="simple-text logo-mini">
          <div class="logo-image-small">
            <img src="paper-design/angular_gradient.png" alt="Angular Logo" />
          </div>
        </a>
        <a href="http://angulararchitects.io" class="simple-text logo-normal">
          Flights 42
        </a>
      </div>

      <ul class="nav">

        <li routerLinkActive="active">
          <a routerLink="home">
            <i class="icon icon-home"></i>
            <p>Home</p>
          </a>
        </li>

        <li routerLinkActive="active">
          <a routerLink="booking">
            <i class="icon icon-booking"></i>
            <p>Booking</p>
          </a>
        </li>

        <li routerLinkActive="active">
          <a routerLink="checkin">
            <i class="icon icon-checkin"></i>
            <p>Checkin</p>
          </a>
        </li>

        <li routerLinkActive="active">
          <a routerLink="boarding">
            <i class="icon icon-boarding"></i>
            <p>Boarding</p>
          </a>
        </li>

      </ul>

    </div>
  `
})
export class SidebarComponent {}
