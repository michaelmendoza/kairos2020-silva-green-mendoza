import React from 'react';
import headerimage from '../images/test.png';

function Context() {
  return (
      <section className="section-article">
        <img src={headerimage} alt="header"/>
        <h1>Context</h1>
        <article>
          <p> Text body </p>
        </article>
      </section>
  );
}

export default Context;
