import React from 'react';
import Header from '../components/Header';
import apr from '../images/apr_page.png';

function ExploreAPR() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section>
          <img className="card" src={apr} />
       </section>
      </section>
  );
}

export default ExploreAPR;
