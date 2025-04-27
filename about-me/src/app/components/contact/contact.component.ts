import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <div class="container center">
      <a
        href="https://github.com/kevinslawinski"
        target="_blank"
        class="noStyle"
      >
        <i class="fa fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/kevin-slawinski-08341769/"
        target="_blank"
        class="noStyle"
      >
        <i class="fa fa-brands fa-linkedin-in"></i>
      </a>
      <a
        href="mailto:kevin.slawinski@gmail.com"
        target="_blank"
        class="noStyle"
      >
        <i class="fa fa-solid fa-envelope"></i>
      </a>
      <br /><br />
      <p>
        Thanks for visiting my site! If you would like to contact me directly,
        you can find me at the links above or send a message below.
      </p>
    </div>

    <div class="container" id="contactForm">
      <form>
        <div class="row">
          <div class="six columns">
            <label for="emailInput">Your email</label>
            <input
              class="u-full-width"
              type="email"
              placeholder="test@mailbox.com"
              id="emailInput"
            />
          </div>
          <div class="six columns">
            <label for="recipientInput">Reason for contacting</label>
            <select class="u-full-width" id="recipientInput">
              <option value="Option 1">Professional Inquiry</option>
              <option value="Option 2">Just saying "Hi!"</option>
              <option value="Option 3">Suggestion</option>
            </select>
          </div>
        </div>
        <label for="message">Message</label>
        <!-- Note: The class .u-full-width is just a utility class shorthand for width: 100% -->
        <textarea
          class="u-full-width"
          placeholder="Hi Kevin…"
          id="message"
        ></textarea>
        <label class="example-send-yourself-copy">
          <input type="checkbox" />
          <span class="label-body">Send a copy to yourself</span>
        </label>
        <input class="button-primary" type="submit" value="Send" />
      </form>
      <!-- Always wrap checkbox and radio inputs in a label and use a <span class="label-body"> inside of it -->
    </div>
  `,
  styles: ``,
})
export class ContactComponent {}
