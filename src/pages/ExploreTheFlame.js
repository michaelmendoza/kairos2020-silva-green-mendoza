import React from 'react';
import ExploreFilter from '../components/ExploreFilter';
import InteractivePanel from '../components/InteractivePanel';
import theflame from '../images/theflame_page.png';
import jsondata from '../data/theflame.json';

function ExploreTheFlame() {
  return (
      <section className="section-explore">
        <ExploreFilter></ExploreFilter>
        <InteractivePanel img={theflame} json={jsondata}></InteractivePanel>
      </section>
  );
}

export default ExploreTheFlame;
