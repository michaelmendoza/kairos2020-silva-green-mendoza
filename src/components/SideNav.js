import React from 'react';
import { Link } from '@reach/router';

import apr from '../images/apr.png';
import puffyhost from '../images/puffyhost.png';
import theflame from '../images/theflame.png';
import jeffersonpost from '../images/thejeffersonpost.png';
import dailypost from '../images/thedailypost.png';

function SideNav() {
  return (
    <nav className="nav-view"> 
      <section className="menu-nav">
        <h2> Menu </h2>
      <ul>
          <li> <Link to="introduction"> <button> Introduction </button> </Link> </li>
          <li> <Link to="methods" ><button> Methods </button> </Link> </li>
          <li> <Link to="context" ><button> Context </button> </Link> </li>
          <li> <Link to="discussion" ><button> Discussion </button> </Link> </li>
          <li> <Link to="implications" ><button> Implications </button> </Link> </li>
          <li> <Link to="contact" ><button> Contact </button> </Link> </li>
        </ul> 
      </section>
      <section className="explore-nav"> 
        <h2> Explore </h2>
        <ul>
          <li> <Link to="apr"> <button> <img src={apr} alt="apr"/> </button> </Link> </li>
          <li> <Link to="puffyhost"> <button> <img src={puffyhost} alt="Puffy Host"/> </button> </Link> </li>
          <li> <Link to="theflame"> <button> <img src={theflame} alt="Flame"/> </button> </Link> </li>
          <li> <Link to="jeffersonpost"> <button> <img src={jeffersonpost} alt="Jefferson Post"/> </button> </Link> </li>
          <li> <Link to="dailypost"> <button> <img src={dailypost} alt="Daily Post"/> </button> </Link> </li>
        </ul>
      </section> 
    </nav>
  );
}

export default SideNav;
