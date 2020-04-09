import React from 'react';
import Header from '../components/Header';
import dailypost from '../images/thedailypost_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';

function ExploreDailyPost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <img className="card" src={dailypost}/>
       </section>
      </section>
  );
}

export default ExploreDailyPost;
