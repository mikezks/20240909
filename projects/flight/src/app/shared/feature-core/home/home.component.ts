import { Component, inject } from '@angular/core';
import { CONFIG_STATE, injectUsername } from '../../util-config';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Modern Angular</h2>
      </div>

      <div class="card-body">
        <ul>
          <li>Standalone APIs</li>
          <li>Signals</li>
          <li>Dependency Injection</li>
          <li>Router, HTTP Client, Forms</li>
          <li>Control Flow</li>
          <li>Performance</li>
          <li>... and much more!</li>
        </ul>

        <p>Username: {{ username() }}</p>
      </div>
    </div>
  `,
  styles: [`
    code {
      color: blue;
    }
  `]
})
export class HomeComponent {
  username = injectUsername();

  constructor() {
    const configState = inject(CONFIG_STATE);
    setTimeout(() => configState.update(state => ({
      ...state,
      userInfo: {
        ...state.userInfo,
        username: 'peter.doe'
      }
    })), 3_000);
  }
}
