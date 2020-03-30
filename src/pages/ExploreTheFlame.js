import React from 'react';
import Header from '../components/Header';
import theflame from '../images/theflame_page.png';

function ExploreTheFlame() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section>
          <img className="card" src={theflame}/>
       </section>
      </section>
  );
}

export default ExploreTheFlame;
