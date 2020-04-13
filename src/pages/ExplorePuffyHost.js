import React from 'react';
import ExploreFilter from '../components/ExporeFilter';
import InteractivePanel from '../components/InteractivePanel';
import puffyhost from '../images/puffyhost_page.png';
import jsondata from '../data/puffyhost.json';

function ExplorePuffyHost() {
  return (
      <section className="section-explore">
        <ExploreFilter></ExploreFilter>
        <InteractivePanel img={puffyhost} json={jsondata}></InteractivePanel>
      </section>
  );
}

export default ExplorePuffyHost;
