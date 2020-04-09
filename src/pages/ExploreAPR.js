import React from 'react';
import Header from '../components/Header';
import apr from '../images/apr_page.png';
import ExploreButtonGroup from '../components/ExploreButtonGroup';

function ExploreAPR() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section>
          <ExploreButtonGroup></ExploreButtonGroup>
          <img className="card" src={apr} />
       </section>
      </section>
  );
}

export default ExploreAPR;
