import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Switch from './Switch';

function ExploreFilter() {
  const { novice, expert, setNovice, setExpert } = useContext(AppContext);
  const handleNovice = () => { setNovice(!novice); };
  const handleExpert = () =>  { setExpert(!expert); };
  
  return (
    <div className="explore-filter flex-container">
      <span className="explore-filter-item flex-container flex-center">
        <label className="switch novice">
          <input type="checkbox" onChange={handleNovice}/>
          <span className="slider round"></span>
        </label>
        <label className="switch-label">
          <i className= "fas fa-user"></i> Show Novice
        </label>
      </span>
      
      <span className="flex-item"></span>

      <span className="explore-filter-item flex-container flex-center">
        <label className="switch-label">
          <i className="fas fa-user-graduate"></i> Show Expert
        </label>
        <label className="switch expert">
          <input type="checkbox" onChange={handleExpert}/>
          <span className="slider round"></span>
        </label>
      </span>
    </div>
  );
}

export default ExploreFilter;
