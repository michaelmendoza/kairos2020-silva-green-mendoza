import React from 'react';
import Header from '../components/Header';
import dailypost from '../images/thedailypost_page.png';

function ExploreDailyPost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section>
          <img src={dailypost}/>
       </section>
      </section>
  );
}

export default ExploreDailyPost;
