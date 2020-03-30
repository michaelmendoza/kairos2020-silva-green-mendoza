import React from 'react';

function Header() {
  return (
    <header> 
        <h2 className="flex-container"> 
        <span> <i className="fas fa-bars"></i> </span> 
        <text className="title"> What do first-year students find reliable in online sources? </text>
        <span className="flex-item"></span>
        <text className="authors"> Silva, Green</text>
        <i className="far fa-envelope"></i>  
        </h2>
    </header>
  );
}

export default Header;
