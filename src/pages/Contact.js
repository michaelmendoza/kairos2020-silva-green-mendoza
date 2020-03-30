import React from 'react';
import headerimage from '../images/test.png';

import Header from '../components/Header';

function Contact() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section>
          <img src={headerimage} alt="header"/>
          <h1>Contact</h1>
          <text>
            <p> Text body </p>
          </text>
       </section>
      </section>
  );
}

export default Contact;
