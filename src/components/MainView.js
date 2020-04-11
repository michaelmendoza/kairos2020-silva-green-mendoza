import React from 'react';
import Header from '../components/Header';

function MainView(props) {
  return (
      <section className="main-view"> 
        <Header></Header>
        <div className="flex-container">
          <span className="flex-item"></span>
          {props.children}
          <span className="flex-item"></span>
        </div>
      </section>
  );
}

export default MainView;
