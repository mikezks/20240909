import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-headerbar-cmp',
  standalone: true,
  templateUrl: 'headerbar.component.html'
})
export class HeaderbarComponent {
  private readonly body = inject(DOCUMENT).getElementsByTagName('body')[0];

  sidebarVisible = false;

  sidebarToggle() {
    if (this.sidebarVisible == false) {
      this.body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      this.body.classList.remove('nav-open');
    }
  }
}
