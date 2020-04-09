import React from 'react';
import Header from '../components/Header';
import theflame from '../images/theflame_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';

function ExploreTheFlame() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <img className="card" src={theflame}/>
       </section>
      </section>
  );
}

export default ExploreTheFlame;
