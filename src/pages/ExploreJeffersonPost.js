import React from 'react';
import ExploreFilter from '../components/ExporeFilter';
import InteractivePanel from '../components/InteractivePanel';
import jeffersonpost from '../images/thejeffersonpost_page.png';
import jsondata from '../data/jeffersonpost.json';

function ExploreJeffersonPost() {
  return (
      <section className="section-explore">
        <ExploreFilter></ExploreFilter>
        <InteractivePanel img={jeffersonpost} json={jsondata}></InteractivePanel>
      </section>
  );
}

export default ExploreJeffersonPost;
