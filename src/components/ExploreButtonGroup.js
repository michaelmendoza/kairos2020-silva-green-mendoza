import React, { useState, useContext, useEffect } from 'react';
import { AppContext, exploreModes} from '../contexts/AppContext';

function ExploreButtonGroup() {
  const { setExploreMode } = useContext(AppContext);
  const [ active, setActive ] = useState(["", "", ""]);

  const handleNovice = () => { 
    setActive(["active", "", ""]);  
    setExploreMode(exploreModes.NOVICE); 
  };
  const handleExpert = () =>  { 
    setActive(["", "active", ""]); 
    setExploreMode(exploreModes.EXPERT); 
  };
  const handleBoth = () => { 
    setActive(["", "", "active"]); 
    setExploreMode(exploreModes.BOTH); 
  };
  
  return (
    <div className="button-group float-right">
      <button className = { active[0] } onClick={handleNovice} > <i className= "fas fa-user"></i> Novice </button>
      <button className = { active[1] } onClick = {handleExpert}> <i className="fas fa-user-graduate"></i> Expert </button>
      <button className = { active[2] } onClick = {handleBoth}> <i className="fas fa-users"></i> Both </button>
    </div>
  );
}

export default ExploreButtonGroup;
