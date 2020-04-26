import React from 'react';
import { Router } from '@reach/router';
import './App.scss';

import AppContextProvider from './contexts/AppContext';
import MainView from './components/MainView';
import NavView from './components/NavView';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Methods from './pages/Methods';
import Context from './pages/Context';
import Findings from './pages/Findings';
import Implications from './pages/Implications';
import References from './pages/References';
import Contact from './pages/Contact';
import ExploreAPR from './pages/ExploreAPR';
import ExplorePuffyHost from './pages/ExplorePuffyHost';
import ExploreTheFlame from './pages/ExploreTheFlame';
import ExploreJeffersonPost from './pages/ExploreJeffersonPost';
import ExploreDailyPost from './pages/ExploreDailyPost';

export const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
}

function App() {
  return (
    <div className="app-view flex-container">
      <AppContextProvider>
        <NavView></NavView>
        <MainView> 
          <Router primary={false}> 
            <ScrollToTop path="/">
              <Introduction path="/"></Introduction>
              <Methods path="methods"></Methods>
              <Findings path="findings"></Findings>
              <Context path="context"></Context>
              <Implications path="implications"></Implications>
              <References path="references"></References>
              <Contact path="contact"></Contact>
              <ExploreAPR path="apr"></ExploreAPR>
              <ExplorePuffyHost path="puffyhost"></ExplorePuffyHost>
              <ExploreTheFlame path="theflame"></ExploreTheFlame>
              <ExploreJeffersonPost path="jeffersonpost"></ExploreJeffersonPost>
              <ExploreDailyPost path="dailypost"></ExploreDailyPost>
            </ScrollToTop>
          </Router>
        </MainView>
      </AppContextProvider>
    </div>
  );
}

export default App;
