import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-headerbar-cmp',
  templateUrl: 'headerbar.component.html'
})
export class HeaderbarComponent {
  private body = this.document.getElementsByTagName('body')[0];
  sidebarVisible = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

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
