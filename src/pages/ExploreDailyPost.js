import React from 'react';
import ExploreFilter from '../components/ExporeFilter';
import InteractivePanel from '../components/InteractivePanel';
import dailypost from '../images/thedailypost_page.png';
import jsondata from '../data/dailypost.json';

function ExploreDailyPost() {
  return (
      <section className="section-explore">
        <ExploreFilter></ExploreFilter>
        <InteractivePanel img={dailypost} json={jsondata}></InteractivePanel>       
      </section>
  );
}

export default ExploreDailyPost;
