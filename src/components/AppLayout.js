import React from 'react';
import 'normalize.css';
import '../styles/App.scss';

import AppContextProvider from '../contexts/AppContext';
import MainView from './MainView';
import NavView from './NavView';
import SideView from './SideView';
import { Helmet } from "react-helmet";

const AppLayout = (props) => {
    return (
        <div className="app-view flex-container">
          <Helmet>
            <script src="https://kit.fontawesome.com/c4a0155d0c.js" crossorigin="anonymous"></script>
          </Helmet>
          <AppContextProvider>
            <NavView pathname={props.pathname}></NavView>
            <MainView> 
                {props.children}
            </MainView>
            { props.useSideView ? <SideView></SideView> : null }
          </AppContextProvider>
        </div>
      );
}

export default AppLayout;
