import React from 'react';
import Header from '../components/Header';
import puffyhost from '../images/puffyhost_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

function ExplorePuffyHost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <InteractivePanel img={puffyhost}></InteractivePanel>
       </section>
      </section>
  );
}

export default ExplorePuffyHost;
