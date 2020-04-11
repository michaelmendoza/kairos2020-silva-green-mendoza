import React from 'react';
import MainView from '../components/MainView';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';
import apr from '../images/apr_page.png';
import jsondata from '../data/apr.json';

function ExploreAPR() {
  return (
    <MainView> 
      <section className="section-explore"> 
          <ExploreButtonGroup></ExploreButtonGroup>
          <InteractivePanel img={apr} json={jsondata}></InteractivePanel>
       </section>
    </MainView>
  );
}

export default ExploreAPR;
