import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { AppContext } from '../contexts/AppContext';

import apr from '../images/apr-logo.png';
import puffyhost from '../images/puffyhost-logo.png';
import theflame from '../images/theflame-logo.png';
import jeffersonpost from '../images/thejeffersonpost-logo.png';
import dailypost from '../images/thedailypost-logo.png';

function NavView(props) {
  const { mobileNav, setMobileNav } = useContext(AppContext);
  const handleMobileNav = () => { setMobileNav(false) }; 
  const navClass = "nav-view " + (mobileNav ? 'nav-mobile-on':'');
  const activeNavClass = (path) => { return props.pathname === path ? "active" : "" };
  
  return (
    <nav className={navClass}> 
      <span className="nav-close"> <button onClick={handleMobileNav}> <i className="fas fa-times"></i> </button> </span> 
      <section className="menu-nav">
      <h2> Read </h2>
      <ul> 
          <li className={ activeNavClass("/") }> <Link to="/"> <button onClick={handleMobileNav}> Introduction </button> </Link> </li>
          <li className={ activeNavClass("/methods") }> <Link to="/methods" ><button onClick={handleMobileNav}> Methods </button> </Link> </li>
          <li className={ activeNavClass("/findings") }> <Link to="/findings" ><button onClick={handleMobileNav}> Findings </button> </Link> </li>
          <li className={ activeNavClass("/context") }> <Link to="/context" ><button onClick={handleMobileNav}> Context and Discussion </button> </Link> </li>
          <li className={ activeNavClass("/implications") }> <Link to="/implications" ><button onClick={handleMobileNav}> Implications </button> </Link> </li>
          <li className={ activeNavClass("/references") }> <Link to="/references"><button onClick={handleMobileNav}> References </button></Link></li>
          <li className={ activeNavClass("/contact") }> <Link to="/contact" ><button onClick={handleMobileNav}> Contact </button> </Link> </li>
        </ul> 
      </section>
      <section className="explore-nav"> 
        <h2> Explore </h2>
        <ul>
          <li> <Link to="/exploreAPR"> <button onClick={handleMobileNav}> <img className="card-button" src={apr} alt="apr"/> </button> </Link> </li>
          <li> <Link to="/explorePuffyHost"> <button onClick={handleMobileNav}> <img className="card-button" src={puffyhost} alt="Puffy Host"/> </button> </Link> </li>
          <li> <Link to="/exploreTheFlame"> <button onClick={handleMobileNav}> <img className="card-button" src={theflame} alt="Flame"/> </button> </Link> </li>
          <li> <Link to="/exploreJeffersonPost"> <button onClick={handleMobileNav}> <img className="card-button" src={jeffersonpost} alt="Jefferson Post"/> </button> </Link> </li>
          <li> <Link to="/exploreDailyPost"> <button onClick={handleMobileNav}> <img className="card-button" src={dailypost} alt="Daily Post"/> </button> </Link> </li>
        </ul>
      </section> 
    </nav>
  );
}

export default NavView;
