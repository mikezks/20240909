import { Component } from '@angular/core';
import { UiCoreModule } from './shared/ui-core/ui-core.module';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [UiCoreModule, RouterOutlet]
})
export class AppComponent {
}
