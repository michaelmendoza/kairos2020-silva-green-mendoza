import React from 'react';
import Header from '../components/Header';
import puffyhost from '../images/puffyhost_page.png';

function ExplorePuffyHost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section>
          <img src={puffyhost}/>
       </section>
      </section>
  );
}

export default ExplorePuffyHost;
