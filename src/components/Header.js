import React from 'react';

function Header() {
  return (
    <header className="header"> 
        <div className="header-content flex-container"> 
          <span> <i className="fas fa-bars"></i> </span> 
          <h2 className="title"> What do first-year students find reliable in online sources? </h2>
          <span className="flex-item"></span>
          <div className="authors"> Silva, Green</div>
          <i className="far fa-envelope"></i>  
        </div>
    </header>
  );
}

export default Header;
