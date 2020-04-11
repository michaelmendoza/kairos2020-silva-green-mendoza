import React from 'react';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';
import apr from '../images/apr_page.png';
import jsondata from '../data/apr.json';

function ExploreAPR() {
  return (
    <section className="section-explore"> 
        <ExploreButtonGroup></ExploreButtonGroup>
        <InteractivePanel img={apr} json={jsondata}></InteractivePanel>
      </section>
  );
}

export default ExploreAPR;
