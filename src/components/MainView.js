import React from 'react';
import Header from '../components/Header';

function MainView(props) {
  return (
      <section className="main-view"> 
        <Header></Header>
        {props.children}
      </section>
  );
}

export default MainView;
