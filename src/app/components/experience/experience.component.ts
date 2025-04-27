import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  template: `
    <div class="container">
      <a
        href="media/Resume_Slawinski_Kevin_052023.pdf"
        class="noStyle button-primary"
        target="_blank"
        >Download My Resume &nbsp;<i
          class="fa-regular fa-file-pdf fa-xl fa-bounce"
          style="color: black;"
        ></i
      ></a>
    </div>
    <br />
    <!-- certs header -->
    <div class="container row">
      <h2 class="center narrowHeight">Certifications</h2>
      <hr />
    </div>
    <!-- certs -->
    <div class="container row">
      <section class="four columns">
        <h6>
          Certified ScrumMaster&reg; (CSM&reg;)<br />ID# 1784994 &bull; May
          2023<br />Scrum Alliance, Inc.
        </h6>
      </section>
      <section class="four columns">
        <h6>
          Apple Certified Mac Technician (ACMT)<br />Oct 2013<br />Apple, Inc.
        </h6>
      </section>
      <section class="four columns">
        <h6>
          Dell Certified Technician - Notebooks<br />Dec 2013<br />Dell, Inc.
        </h6>
      </section>
    </div>
    <br />

    <!-- work header -->
    <div class="container row">
      <hr />
      <h2 class="center narrowHeight">Professional Work</h2>
      <hr />
    </div>

    <!-- Progressive Insurance -->
    <div class="container">
      <div class="row">
        <section class="twelve columns">
          <h3>Progressive Insurance</h3>
        </section>
      </div>
      <div class="row">
        <section class="six columns">
          <h5>IT Applications Programmer</h5>
          <h6 class="indent present">Aug 2023 - Present</h6>
          <ul class="indent">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </section>
        <section class="six columns">
          <h5>IT Service Desk Specialist</h5>
          <h6 class="indent">Jan 2022 - Jul 2023</h6>
          <ul class="indent">
            <li>
              Provides front-line IT support to employees and insurance agents
            </li>
            <li>Handles requests via phone, email, and ticketing system</li>
            <li>
              Demonstrates a strong work ethic via excellent metric-based
              results
            </li>
            <li>Displays leadership by running daily stand-up meetings</li>
          </ul>
        </section>
      </div>
    </div>

    <!-- MRI Software -->
    <div class="container">
      <div class="row">
        <section class="twelve columns">
          <h3>MRI Software</h3>
        </section>
      </div>
      <div class="row">
        <section class="four columns">
          <h5>Client Success Manager</h5>
          <h6 class="indent">Mar 2020 - Dec 2021</h6>
          <ul class="indent">
            <li>
              Acted as a client advocate and liaison for 20+ external accounts
            </li>
            <li>
              Collaborated with account managers to manage end-to-end client
              relationships
            </li>
            <li>
              Effectively communicated to a variety of audiences, including
              C-suite executives
            </li>
            <li>
              Escalated issues to appropriate teams across the organization
            </li>
            <li>Helped prioritize work based on criticality</li>
            <li>
              Provided consistent stream of updates to clients and key
              stakeholders
            </li>
          </ul>
        </section>
        <section class="four columns">
          <h5>Technical Support Manager</h5>
          <h6 class="indent">Mar 2017 - Feb 2020</h6>
          <ul class="indent">
            <li>Directly responsible for a team of six support agents</li>
            <li>Reliable and trusted resource for product teams</li>
            <li>
              Skilled in drafting marketing messaging for mass distribution
            </li>
            <li>
              Analyzed metrics to create solutions resulting in decreased call
              volume
            </li>
            <li>Created and implemented new hire training plans</li>
            <li>
              Collaborated with internal teams to create, test, and deliver a
              unique software tool for the customer service team
            </li>
            <li>
              Established procedures that improved project efficiency for
              consultants
            </li>
          </ul>
        </section>
        <section class="four columns">
          <h5>Technical Support Agent</h5>
          <h6 class="indent">Jan 2015 - Feb 2017</h6>
          <ul class="indent">
            <li>
              Remotely supported customers by taking in-bound phone calls and
              managing online help tickets
            </li>
            <li>
              Maintained “least privilege” access policies for both on-premises
              and SaaS software solutions
            </li>
            <li>
              Trained and mentored new peers throughout and beyond the
              on-boarding process
            </li>
            <li>
              Took responsibility to deeply understand the deployment of
              enterprise-level applications
            </li>
          </ul>
        </section>
      </div>
    </div>

    <!-- Kent State University -->
    <div class="container">
      <div class="row">
        <section class="twelve columns">
          <h3>Kent State University</h3>
        </section>
      </div>
      <div class="row">
        <section class="six columns">
          <h5>Computer Repair Technician</h5>
          <h6 class="indent">May 2011 - Dec 2014</h6>
          <ul class="indent">
            <li>
              Provided computer hardware and software support to students and
              staff
            </li>
            <li>
              Excelled in computer hardware repair, including AppleCare warranty
              services
            </li>
            <li>
              Obtained the
              <em>Apple Certified Mac Technician (ACMT)</em> certification
            </li>
            <li>
              Obtained the
              <em>Dell Certified Technician - Notebooks</em> certification
            </li>
          </ul>
        </section>
      </div>
    </div>
    <br />

    <!-- education header -->
    <div class="container row">
      <hr />
      <h2 class="center narrowHeight">Education</h2>
      <hr />
    </div>

    <!-- Kent State University -->
    <div class="container">
      <div class="row">
        <section class="six columns indent">
          <h6>
            Bachelor of Business Administration<br />Computer Information
            Systems<br />Kent State University &bull; Kent, OH &bull; Dec 2014
          </h6>
        </section>
      </div>
    </div>
  `,
  styles: ``,
})
export class ExperienceComponent {}
