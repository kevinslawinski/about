import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="container">
      <br />
      <router-outlet />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class AppComponent {
  title = 'About | Kevin Slawinski';
}
