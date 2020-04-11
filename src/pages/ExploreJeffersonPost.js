import React from 'react';
import ExploreButtonGroup from '../components/ExploreButtonGroup';
import InteractivePanel from '../components/InteractivePanel';

import jeffersonpost from '../images/thejeffersonpost_page.png';
import jsondata from '../data/jeffersonpost.json';

function ExploreJeffersonPost() {
  return (
      <section className="section-explore">
        <ExploreButtonGroup></ExploreButtonGroup>
        <InteractivePanel img={jeffersonpost} json={jsondata}></InteractivePanel>
      </section>
  );
}

export default ExploreJeffersonPost;
