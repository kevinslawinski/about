import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="container">
      <h1>404 - Page Not Found</h1>
      <p>Whoops! Looks like that page doesn't exist.</p>
      <p>
        If you think this is incorrect, please
        <a routerLink="/contact">contact me</a>.
      </p>
    </div>
  `,
  styles: ``,
})
export class NotFoundComponent {}
