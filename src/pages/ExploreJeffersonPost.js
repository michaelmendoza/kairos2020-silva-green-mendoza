import React from 'react';
import Header from '../components/Header';
import jeffersonpost from '../images/thejeffersonpost_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

function ExploreJeffersonPost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <InteractivePanel img={jeffersonpost}></InteractivePanel>
       </section>
      </section>
  );
}

export default ExploreJeffersonPost;
