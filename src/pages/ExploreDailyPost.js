import React from 'react';
import Header from '../components/Header';
import dailypost from '../images/thedailypost_page.png';

function ExploreDailyPost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section>
          <img className="card" src={dailypost}/>
       </section>
      </section>
  );
}

export default ExploreDailyPost;
