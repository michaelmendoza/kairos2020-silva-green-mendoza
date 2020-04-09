import React from 'react';
import Header from '../components/Header';
import theflame from '../images/theflame_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

function ExploreTheFlame() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <InteractivePanel img={theflame}></InteractivePanel>
       </section>
      </section>
  );
}

export default ExploreTheFlame;
