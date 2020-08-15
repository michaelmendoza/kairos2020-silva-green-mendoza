import React from 'react';
import { Router } from '@reach/router';

import Introduction from './pages/index';
import Methods from './pages/methods';
import Context from './pages/context';
import Findings from './pages/findings';
import Implications from './pages/implications';
import References from './pages/references';
import Contact from './pages/contact';
import ExploreAPR from './pages/exploreAPR';
import ExplorePuffyHost from './pages/explorePuffyHost';
import ExploreTheFlame from './pages/exploreTheFlame';
import ExploreJeffersonPost from './pages/exploreJeffersonPost';
import ExploreDailyPost from './pages/exploreDailyPost';

export const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
}

function App() {
  return (
    <div className="app-view flex-container">
          <Router primary={false} className="route-main-view"> 
            <ScrollToTop path="/">
              <Introduction path="/"></Introduction>
              <Methods path="methods"></Methods>
              <Findings path="findings"></Findings>
              <Context path="context"></Context>
              <Implications path="implications"></Implications>
              <References path="references"></References>
              <Contact path="contact"></Contact>
              <ExploreAPR path="exploreAPR"></ExploreAPR>
              <ExplorePuffyHost path="explorePuffyHost"></ExplorePuffyHost>
              <ExploreTheFlame path="exploreTheFlame"></ExploreTheFlame>
              <ExploreJeffersonPost path="exploreJeffersonPost"></ExploreJeffersonPost>
              <ExploreDailyPost path="exploreDailyPost"></ExploreDailyPost>
            </ScrollToTop>
          </Router>
    </div>
  );
}

export default App;
