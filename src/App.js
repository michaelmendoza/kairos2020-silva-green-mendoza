import React from 'react';
import { Router } from '@reach/router';
import headerimage from './images/test.png';
import './App.scss';

import SideNav from './components/SideNav';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Methods from './pages/Methods';
import Context from './pages/Context';
import Discussion from './pages/Discussion';
import Implications from './pages/Implications';
import Contact from './pages/Contact';
import ExploreAPR from './pages/ExploreAPR';
import ExplorePuffyHost from './pages/ExplorePuffyHost';
import ExploreTheFlame from './pages/ExploreTheFlame';
import ExploreJeffersonPost from './pages/ExploreJeffersonPost';
import ExploreDailyPost from './pages/ExploreDailyPost';

function App() {
  return (
    <div className="app flex-container">
      <SideNav></SideNav>
      <Router>
        <Home path="/"></Home>
        <Introduction path="introduction"></Introduction>
        <Methods path="methods"></Methods>
        <Context path="context"></Context>
        <Discussion path="discussion"></Discussion>
        <Implications path="implications"></Implications>
        <Contact path="contact"></Contact>
        <ExploreAPR path="apr"></ExploreAPR>
        <ExplorePuffyHost path="puffyhost"></ExplorePuffyHost>
        <ExploreTheFlame path="theflame"></ExploreTheFlame>
        <ExploreJeffersonPost path="jeffersonpost"></ExploreJeffersonPost>
        <ExploreDailyPost path="dailypost"></ExploreDailyPost>
      </Router>
    </div>
  );
}

export default App;
