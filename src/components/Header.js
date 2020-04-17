import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { AppContext } from '../contexts/AppContext';

function Header() {
  const { mobileNav, setMobileNav } = useContext(AppContext);
  const handleMobileNav = () => { setMobileNav(!mobileNav) }; 

  return (
    <header className="header"> 
        <div className="header-content flex-container"> 
          <span> <button onClick={handleMobileNav}> <i className="fas fa-bars"></i></button> </span> 
          <h2 className="title"> What do first-year students find reliable in online sources? </h2>
          <span className="flex-item"></span>
          <div className="authors"> Silva, Green</div>
          <Link to="contact" > <i className="far fa-envelope"></i> </Link>
        </div>
    </header>
  );
}

export default Header;
