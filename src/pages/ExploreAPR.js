import React from 'react';
import Header from '../components/Header';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

import apr from '../images/apr_page.png';
import jsondata from '../data/apr.json';

function ExploreAPR() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <InteractivePanel img={apr} json={jsondata}></InteractivePanel>
       </section>
      </section>
  );
}

export default ExploreAPR;
