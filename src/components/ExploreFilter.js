import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Switch from './Switch';

function ExploreFilter() {
  const { novice, expert, setNovice, setExpert } = useContext(AppContext);
  const handleNovice = () => { setNovice(!novice); };
  const handleExpert = () =>  { setExpert(!expert); };
  
  return (
    <div className="explore-filter flex-container flex-center">
      
      <label className="explore-show left">
        Novice 
        <button className={ novice ? "active" : ""} onClick={handleNovice}> 
            <i class="fa fa-eye"></i>
            <i class="fa fa-eye-slash"></i>
        </button>
      </label>

      <span className="flex-item"></span>

      <label className="explore-show right">
        Expert
        <button className={ expert ? "active" : ""} onClick={handleExpert}> 
            <i class="fa fa-eye"></i>
            <i class="fa fa-eye-slash"></i>
        </button>
      </label>

    </div>
  );
}

export default ExploreFilter;
