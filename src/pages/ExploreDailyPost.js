import React from 'react';
import Header from '../components/Header';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

import dailypost from '../images/thedailypost_page.png';
import jsondata from '../data/dailypost.json';

function ExploreDailyPost() {
  return (
      <section className="section-explore">
        <ExploreButtonGroup></ExploreButtonGroup>
        <InteractivePanel img={dailypost} json={jsondata}></InteractivePanel>       
      </section>
  );
}

export default ExploreDailyPost;
