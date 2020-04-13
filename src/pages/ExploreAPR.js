import React from 'react';
import ExploreFilter from '../components/ExploreFilter';
import InteractivePanel from '../components/InteractivePanel';
import apr from '../images/apr_page.png';
import jsondata from '../data/apr.json';

function ExploreAPR() {
  return (
    <section className="section-explore"> 
        <ExploreFilter></ExploreFilter>
        <InteractivePanel img={apr} json={jsondata}></InteractivePanel>
      </section>
  );
}

export default ExploreAPR;
