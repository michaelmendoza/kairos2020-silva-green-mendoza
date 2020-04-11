import React from 'react';
import headerimage from '../images/test.png';
import eliseimage from '../images/elisesilva.png';
import jessicaimage from '../images/jessicagreen.png';
import michaelimage from '../images/michaelmendoza.jpeg';

function Contact() {
  return (
      <section className="section-article contacts-page">
        <img className="contacts-header_image" src={headerimage} alt="header"/>
        <h1>Contact</h1>
        <article className="flex-container flex-wrap">
          <div className="card contact-card">
            <img src={eliseimage}></img>
            <h2>Elise Silva</h2>
            <h4>PhD Student at University of Pittsburgh</h4>
            <h4>elise.c.silva@gmail.com</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Sit amet est placerat in. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. </p>
          </div>
          <div className="flex-item"></div>
          <div className="card contact-card">
            <img src={jessicaimage}></img>
            <h2>Jessica Green</h2>
            <h4>Reserach and Writing Center Specialist at BYU</h4>
            <h4>jessica_green@byu.edu</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Sit amet est placerat in. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. </p>
          </div>
          <div className="card contact-card">
            <img src={michaelimage}></img>
            <h2>Michael Mendoza</h2>
            <h4>PhD Student at Imperial College London</h4>
            <h4>askmichaelmendoza@gmail.com</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Sit amet est placerat in. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. </p>
          </div>


        </article>
      </section>
  );
}

export default Contact;
