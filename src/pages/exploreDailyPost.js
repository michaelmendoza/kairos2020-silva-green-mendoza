import React from 'react';
import ExploreFilter from '../components/ExploreFilter';
import InteractivePanel from '../components/InteractivePanel';
import dailypost from '../images/thedailypost_page.png';
import jsondata from '../data/dailypost.json';
import AppLayout from '../components/AppLayout';

function ExploreDailyPost({ location }) {
  return ( 
    <AppLayout pathname={location.pathname} useSideView={true}> 
      <section className="section-explore">
        <ExploreFilter linkname="Daily Kos" linkref="https://www.dailykos.com/stories/2017/4/24/1655792/%E2%80%93There%E2%80%93s%E2%80%93a%E2%80%93growing%E2%80%93crisis%E2%80%93in%E2%80%93care%E2%80%93for%E2%80%93disabled%E2%80%93and%E2%80%93elderly%E2%80%93people%E2%80%93Oh%E2%80%93and%E2%80%93it%E2%80%93s%E2%80%93a%E2%80%93jobs%E2%80%93crisis%E2%80%93too"></ExploreFilter>
        <InteractivePanel img={dailypost} json={jsondata}></InteractivePanel>       
      </section>
    </AppLayout>
  );
}

export default ExploreDailyPost;
