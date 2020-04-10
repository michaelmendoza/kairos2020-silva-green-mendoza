import React from 'react';
import Header from '../components/Header';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

import puffyhost from '../images/puffyhost_page.png';
import jsondata from '../data/puffyhost.json';

function ExplorePuffyHost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <InteractivePanel img={puffyhost} json={jsondata}></InteractivePanel>
       </section>
      </section>
  );
}

export default ExplorePuffyHost;
