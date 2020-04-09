import React, { useState } from 'react';

function ExploreButtonGroup() {

  const [active, setActive] = useState(["", "", ""]);
  const handleNovice = ()=> setActive(["active", "", ""]);
  const handleExpert = ()=> setActive(["", "active", ""]);
  const handleBoth = ()=> setActive(["", "", "active"]);
  
  return (
    <div className="button-group float-right">
      <button className = { active[0] } onClick={handleNovice} > <i className= "fas fa-user"></i> Novice </button>
      <button className = { active[1] } onClick = {handleExpert}> <i className="fas fa-user-graduate"></i> Expert </button>
      <button className = { active[2] } onClick = {handleBoth}> <i className="fas fa-users"></i> Both </button>
    </div>
  );
}

export default ExploreButtonGroup;
