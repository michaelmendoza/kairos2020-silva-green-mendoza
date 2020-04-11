import React from 'react';
import headerimage from '../images/test.png';

import Header from '../components/Header';

function Context() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-article">
          <img src={headerimage} alt="header"/>
          <h1>Context</h1>
          <article>
            <p> Text body </p>
          </article>
       </section>
      </section>
  );
}

export default Context;
