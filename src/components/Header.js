import React from 'react';
import { Link } from '@reach/router';

function Header() {
  return (
    <header className="header"> 
        <div className="header-content flex-container"> 
          <span> <i className="fas fa-bars"></i> </span> 
          <h2 className="title"> What do first-year students find reliable in online sources? </h2>
          <span className="flex-item"></span>
          <div className="authors"> Silva, Green</div>
          <Link to="contact" > <i className="far fa-envelope"></i> </Link>
        </div>
    </header>
  );
}

export default Header;
