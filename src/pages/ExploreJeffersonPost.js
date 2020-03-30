import React from 'react';
import Header from '../components/Header';
import jeffersonpost from '../images/thejeffersonpost_page.png';

function ExploreJeffersonPost() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section>
          <img src={jeffersonpost}/>
       </section>
      </section>
  );
}

export default ExploreJeffersonPost;
