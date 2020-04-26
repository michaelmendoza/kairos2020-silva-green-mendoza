import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { AppContext } from '../contexts/AppContext';

import apr from '../images/apr.png';
import puffyhost from '../images/puffyhost.png';
import theflame from '../images/theflame.png';
import jeffersonpost from '../images/thejeffersonpost.png';
import dailypost from '../images/thedailypost.png';

function NavView() {
  const { mobileNav, setMobileNav } = useContext(AppContext);
  const handleMobileNav = () => { setMobileNav(false) }; 
  const navClass = "nav-view " + (mobileNav ? 'nav-mobile-on':'');

  return (
    <nav className={navClass}> 
      <section className="menu-nav">
        <h2> Menu </h2>
      <ul>
          <li> <Link to="/"> <button onClick={handleMobileNav}> Introduction </button> </Link> </li>
          <li> <Link to="methods" ><button onClick={handleMobileNav}> Methods </button> </Link> </li>
          <li> <Link to="findings" ><button onClick={handleMobileNav}> Findings </button> </Link> </li>
          <li> <Link to="context" ><button onClick={handleMobileNav}> Context and Discussion </button> </Link> </li>
          <li> <Link to="implications" ><button onClick={handleMobileNav}> Implications </button> </Link> </li>
          <li> <Link to="references"><button onClick={handleMobileNav}> References </button></Link></li>
          <li> <Link to="contact" ><button onClick={handleMobileNav}> Contact </button> </Link> </li>
        </ul> 
      </section>
      <section className="explore-nav"> 
        <h2> Explore </h2>
        <ul>
          <li> <Link to="explore/apr"> <button onClick={handleMobileNav}> <img className="card-button" src={apr} alt="apr"/> </button> </Link> </li>
          <li> <Link to="explore/puffyhost"> <button onClick={handleMobileNav}> <img className="card-button" src={puffyhost} alt="Puffy Host"/> </button> </Link> </li>
          <li> <Link to="explore/theflame"> <button onClick={handleMobileNav}> <img className="card-button" src={theflame} alt="Flame"/> </button> </Link> </li>
          <li> <Link to="explore/jeffersonpost"> <button onClick={handleMobileNav}> <img className="card-button" src={jeffersonpost} alt="Jefferson Post"/> </button> </Link> </li>
          <li> <Link to="explore/dailypost"> <button onClick={handleMobileNav}> <img className="card-button" src={dailypost} alt="Daily Post"/> </button> </Link> </li>
        </ul>
      </section> 
    </nav>
  );
}

export default NavView;
