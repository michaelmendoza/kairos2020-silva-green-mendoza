import React from 'react';
import Header from '../components/Header';
import puffyhost from '../images/puffyhost_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';

function ExplorePuffyHost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section>
          <ExploreButtonGroup></ExploreButtonGroup>
          <img className="card" src={puffyhost}/>
       </section>
      </section>
  );
}

export default ExplorePuffyHost;
