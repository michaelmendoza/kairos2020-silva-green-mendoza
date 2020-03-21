import React from 'react';
import apr from './images/apr.png';
import puffyhost from './images/puffyhost.png';
import theflame from './images/theflame.png';
import jeffersonpost from './images/thejeffersonpost.png';
import dailypost from './images/thedailypost.png';
import './App.scss';

function App() {
  return (
    <div className="app flex-container">

      <nav className="nav-view"> 
        <section className="menu-nav">
          <h2> Menu </h2>
        <ul>
            <li> <button> Introduction </button> </li>
            <li> <button> Methods </button> </li>
            <li> <button> Context </button> </li>
            <li> <button> Discussion </button> </li>
            <li> <button> Implications </button> </li>
            <li> <button> Contact </button> </li>
          </ul> 
        </section>
        <section className="explore-nav"> 
          <h2> Explore </h2>
          <ul>
            <li> <button> <img src={apr} alt="apr"/> </button> </li>
            <li> <button> <img src={puffyhost} alt="Puffy Host"/> </button> </li>
            <li> <button> <img src={theflame} alt="Flame"/> </button> </li>
            <li> <button> <img src={jeffersonpost} alt="Jefferson Post"/> </button> </li>
            <li> <button> <img src={dailypost} alt="Daily Post"/> </button> </li>
          </ul>
        </section> 
      </nav>
      <section className="main-view"> 
        <header> 
          <h2 className="flex-container"> 
            <span> <i className="fas fa-bars"></i> </span> 
            <text className="title"> What do first-year students find reliable in online sources? </text>
            <span className="flex-item"></span>
            <text className="authors"> Silva, Green</text>
            <i className="far fa-envelope"></i>  
          </h2>
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
