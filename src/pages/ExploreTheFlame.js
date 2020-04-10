import React from 'react';
import Header from '../components/Header';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

import theflame from '../images/theflame_page.png';
import jsondata from '../data/theflame.json';

function ExploreTheFlame() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <InteractivePanel img={theflame} json={jsondata}></InteractivePanel>
       </section>
      </section>
  );
}

export default ExploreTheFlame;
