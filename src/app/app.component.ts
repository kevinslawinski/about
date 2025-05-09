import { Component } from '@angular/core';
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
  styles: ``,
})
export class AppComponent {
  title = 'About | Kevin Slawinski';
}
