import React, { useState, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Switch from './Switch';
function ExploreButtonGroup() {
  const { novice, expert, setNovice, setExpert } = useContext(AppContext);
  const [ active, setActive ] = useState(["", ""]);

  const handleNovice = () => { 
    setActive(["active", ""]);  
    setNovice(!novice);
  };
  const handleExpert = () =>  { 
    setActive(["", "active"]); 
    setExpert(!expert);
  };
  
  return (
    <div className="button-group">
      <button className = { novice ? "active" : "" } onClick={handleNovice} > <i className= "fas fa-user"></i> Novice </button>
      <button className = { expert ? "active" : "" } onClick = {handleExpert}> <i className="fas fa-user-graduate"></i> Expert </button>
    </div>
  );
}

export default ExploreButtonGroup;
