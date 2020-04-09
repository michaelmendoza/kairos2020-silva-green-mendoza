import React from 'react';
import Header from '../components/Header';
import apr from '../images/apr_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

function ExploreAPR() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <InteractivePanel></InteractivePanel>
          <img className="card" src={apr} />
       </section>
      </section>
  );
}

export default ExploreAPR;
