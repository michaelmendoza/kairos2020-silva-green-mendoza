import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import { AppContext } from '../contexts/AppContext';

import apr from '../images/apr-logo.png';
import puffyhost from '../images/puffyhost-logo.png';
import theflame from '../images/theflame-logo.png';
import jeffersonpost from '../images/thejeffersonpost-logo.png';
import dailypost from '../images/thedailypost-logo.png';

function NavView() {
  const { mobileNav, setMobileNav } = useContext(AppContext);
  const handleMobileNav = () => { setMobileNav(false) }; 
  const navClass = "nav-view " + (mobileNav ? 'nav-mobile-on':'');

  const [ active, setActive ] = useState(-1);
  const activeNav = (index) => {  return active == index ? "active" : "" }    
  const setActiveNav = (index) => { setActive(index); handleMobileNav(); }
  
  return (
    <nav className={navClass}> 
      <span className="nav-close"> <button onClick={handleMobileNav}> <i className="fas fa-times"></i> </button> </span> 
      <section className="menu-nav">
        <h2> Menu </h2>
      <ul> 
          <li className={ activeNav(0) }> <Link to="/"> <button onClick={ () => setActiveNav(0) }> Introduction </button> </Link> </li>
          <li className={ activeNav(1) }> <Link to="methods" ><button onClick={ () => setActiveNav(1) }> Methods </button> </Link> </li>
          <li className={ activeNav(2) }> <Link to="findings" ><button onClick={ () => setActiveNav(2) }> Findings </button> </Link> </li>
          <li className={ activeNav(3) }> <Link to="context" ><button onClick={ () => setActiveNav(3) }> Context and Discussion </button> </Link> </li>
          <li className={ activeNav(4) }> <Link to="implications" ><button onClick={ () => setActiveNav(4) }> Implications </button> </Link> </li>
          <li className={ activeNav(5) }> <Link to="references"><button onClick={ () => setActiveNav(5) }> References </button></Link></li>
          <li className={ activeNav(6) }> <Link to="contact" ><button onClick={ () => setActiveNav(6) }> Contact </button> </Link> </li>
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
