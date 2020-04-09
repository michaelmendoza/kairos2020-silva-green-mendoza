import React from 'react';
import Header from '../components/Header';
import jeffersonpost from '../images/thejeffersonpost_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';

function ExploreJeffersonPost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-explore">
          <ExploreButtonGroup></ExploreButtonGroup>
          <img className="card" src={jeffersonpost}/>
       </section>
      </section>
  );
}

export default ExploreJeffersonPost;
