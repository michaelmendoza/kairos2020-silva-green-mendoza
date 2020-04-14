import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Switch from './Switch';

function ExploreFilter() {
  const { novice, expert, setNovice, setExpert } = useContext(AppContext);
  const handleNovice = () => { setNovice(!novice); };
  const handleExpert = () =>  { setExpert(!expert); };
  
  return (
    <div className="explore-filter ">

      <label> Explore article. Hover on chat bubbles to see novice or expert comments on article. </label>

      <div className="flex-container flex-center">
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
    </div>
  );
}

export default ExploreFilter;
