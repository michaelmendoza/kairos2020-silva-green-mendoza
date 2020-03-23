import React from 'react';
import apr from './images/apr.png';
import puffyhost from './images/puffyhost.png';
import theflame from './images/theflame.png';
import jeffersonpost from './images/thejeffersonpost.png';
import dailypost from './images/thedailypost.png';
import headerimage from './images/test.png';
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
          <img src={headerimage} alt="header"/>
          <h1>Introduction</h1>
          <text>
            <p>In the summer of 2017, librarians at Brigham Young University tested around 20% of the students enrolled in Writing 150, the university’s first-year writing (FYW) course, on how students evaluated source material. We wanted to know the ways in which students went about determining how credible the information they found online was—information that was free and could easily be found through Google searches or via social media channels. As librarians, we wondered what made websites most and least reliable for students. We wondered if students would notice differences between mainstream and fringe web publications, or differences in article genres. Using a proctored survey, talk-aloud protocols, and screen recording, we observed a gamut of source evaluation behaviors from first-year students, ranging from novice behaviors to more mature, expert-level skills.</p>
            <p>This website provides a broad view of the landscape of our study. We picked five online sources of which you can see a likeness to the right of this text box. You will notice that these are not the actual articles with which students completed the test. Given copyright constraints, we created mockup pages that work as stand-ins for the actual pages. The real pages, however, are linked at the top of the mockup pages. We invite you to explore the interactive mockup pages to the right, and compare those to the actual pages linked.</p>
            <p>To the right, you also will be able to navigate between what students found most and least persuasive in determining credibility of the web pages surveyed. Novice student observations will show up in blue. We categorized these observations as novice because they showed immaturity, a lack of self-awareness, and a focus on surface-level website features. Contrasted with these novices, you will also see a few more mature observations—categorized as such because these students used healthy source-corroboration methods, and thoughtful, reflective source evaluation approaches. These expert behaviors more closely mimicked those of information professionals like the librarians conducting the survey, or proven source checking techniques used by fact-checkers. Expert comments will show up in orange. Because we observed a variety of source evaluation behaviors,we coded behaviors rather than students as expert/novice. So a student might exhibit one expert behavior on one article, but exhibit novice behaviors on the rest of the test. We did this to contrast what expert versus novice behaviors might look like on the same article. More on how we determined novice versus expert behavior can be found in the methods section of this web text.</p>
            <p>The percentages reported in the interactive pages to the right rely on one part of our study: after students were given time to look at the web page and do any research they deemed necessary to determine its reliability, students were prompted to record (as a free response) what they thought made the web page more or less reliable. The fact that these observations and statistics come from free responses is important. Since students were not prompted with any ideas as to what would make content more or less reliable on the web, the number of students who made the same observations about credibility is telling. The quotes represented on the interactive pages, and any cited in the text of this article, are from actual student participants.</p>
          </text>
       </section>
      </section>
    </div>
  );
}

export default App;
