import React from 'react';
import headerimage from '../images/test.png';

import Header from '../components/Header';

function Home() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-article">
          <img src={headerimage} alt="header"/>
          <h1>Home</h1>
          <text>
            Home
          </text>
       </section>
      </section>
  );
}

export default Home;
