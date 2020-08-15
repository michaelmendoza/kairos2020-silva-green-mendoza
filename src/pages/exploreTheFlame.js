import React from 'react';
import ExploreFilter from '../components/ExploreFilter';
import InteractivePanel from '../components/InteractivePanel';
import theflame from '../images/theflame_page.png';
import jsondata from '../data/theflame.json';
import AppLayout from '../components/AppLayout';

function ExploreTheFlame({ location }) {
  return (
    <AppLayout pathname={location.pathname} useSideView={true}> 
      <section className="section-explore">
        <ExploreFilter linkname="The Blaze" linkref="http://web.archive.org/web/20170428073641/https:/www.theblaze.com/news/2017/04/02/global-warming-fail-study-finds-melting-sea-ice-is-actually-helping-arctic-animals"></ExploreFilter>
        <InteractivePanel img={theflame} json={jsondata}></InteractivePanel>
      </section>
    </AppLayout>
  );
}

export default ExploreTheFlame;
