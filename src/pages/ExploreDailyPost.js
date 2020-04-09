import React from 'react';
import Header from '../components/Header';
import dailypost from '../images/thedailypost_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

function ExploreDailyPost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <InteractivePanel img={dailypost}></InteractivePanel>       
        </section>
      </section>
  );
}

export default ExploreDailyPost;
