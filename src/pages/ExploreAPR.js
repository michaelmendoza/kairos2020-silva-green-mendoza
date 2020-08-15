import React from 'react';
import ExploreFilter from '../components/ExploreFilter';
import InteractivePanel from '../components/InteractivePanel';
import apr from '../images/apr_page.png';
import jsondata from '../data/apr.json';
import AppLayout from '../components/AppLayout';

function ExploreAPR({ location }) {
  return (
    <AppLayout pathname={location.pathname} useSideView={true}> 
      <section className="section-explore"> 
          <ExploreFilter linkname="NPR" linkref="https://www.npr.org/sections/health-shots/2017/03/16/520268440/over-the-counter-birth-control-pills-would-be-safe-for-teens-researchers-say"></ExploreFilter>
          <InteractivePanel img={apr} json={jsondata}></InteractivePanel>
        </section>
    </AppLayout>
  );
}

export default ExploreAPR;
