import React from 'react';
import ExploreFilter from '../components/ExploreFilter';
import InteractivePanel from '../components/InteractivePanel';
import jeffersonpost from '../images/thejeffersonpost_page.png';
import jsondata from '../data/jeffersonpost.json';

function ExploreJeffersonPost() {
  return (
      <section className="section-explore">
        <ExploreFilter linkname="The Washington Post" linkref="https://www.washingtonpost.com/news/the-switch/wp/2017/03/30/elon-musks-spacex-makes-history-by-launching-a-flight-proven-rocket/?noredirect=on%26utm_term=.e01648f3a9e2"></ExploreFilter>
        <InteractivePanel img={jeffersonpost} json={jsondata}></InteractivePanel>
      </section>
  );
}

export default ExploreJeffersonPost;
