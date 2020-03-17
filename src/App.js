import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="app flex-container">

      <nav className="nav-view"> 
        <section className="menu-nav">
          <h2> Menu </h2>
          <ul>
            <li className='item-intro' > Introduction </li>
            <li className='item-method'> Methods </li>
            <li> Context </li>
            <li> Discussion </li>
            <li> Implications </li>
            <li> Contact </li>
          </ul>
        </section>
        <section className="explore-nav"> 
          <h2> Explore </h2>
          <ul>
            <li> APR </li>
            <li> Puffy Host </li>
            <li> Flame </li>
            <li> Jefferson Post </li>
            <li> Daily Post </li>
          </ul>
        </section>
      </nav>
      <section className="main-view"> 
        <header>
          <h2> <span> = </span> What do first-year students find reliable in online sources?</h2>
        </header>
        <section>
          <title>Introduction</title>
          <text> In the summer of 2017, librarians at Brigham Young University tested around 20% of the students enrolled in Writing 150, the university’s first-year writing (FYW) course, on how students evaluated source material. We wanted to know the ways in which students went about determining how credible the information they found online was—information that was free and could easily be found through Google searches or via social media channels. As librarians, we wondered what made websites most and least reliable for students. We wondered if students would notice differences between mainstream and fringe web publications, or differences in article genres. Using a proctored survey, talk-aloud protocols, and screen recording, we observed a gamut of source evaluation behaviors from first-year students, ranging from novice behaviors to more mature, expert-level skills.</text>
        </section>
      </section>
    </div>
  );
}

export default App;
