import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <div class="container header">
      <section class="twelve columns">
        <h1 class="title">Kevin Slawinski</h1>
        <p>A person who you are interested in learning more about.</p>
      </section>
      <div class="row">
        <section class="three columns">
          <a class="button" routerLink="/about">About</a>
        </section>
        <section class="three columns">
          <a class="button" routerLink="/experience">Experience</a>
        </section>
        <section class="three columns">
          <a class="button" routerLink="/projects">Projects</a>
        </section>
        <section class="three columns">
          <a class="button" routerLink="/contact">Contact</a>
        </section>
      </div>
      <hr class="noMargin" />
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {}
