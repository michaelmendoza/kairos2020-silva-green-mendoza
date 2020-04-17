import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Switch from './Switch';

function ExploreFilter() {
  const { novice, expert, setNovice, setExpert } = useContext(AppContext);
  const handleNovice = () => { setNovice(!novice); };
  const handleExpert = () =>  { setExpert(!expert); };
  
  return (
    <div className="explore-filter ">

      <div className="flex-container flex-center">
        <label> Explore article. Hover on chat bubbles to see novice or expert comments on article. </label>
       
        <span className="flex-item"></span>

        <label className="explore-filter-label"> Filters: </label>

        <label className="explore-show">
          Novice 
          <button className={ novice ? "active" : ""} onClick={handleNovice}> 
              <i className="fa fa-eye"></i>
              <i className="fa fa-eye-slash"></i>
          </button>
        </label>

        <label className="explore-show">
          Expert
          <button className={ expert ? "active" : ""} onClick={handleExpert}> 
              <i className="fa fa-eye"></i>
              <i className="fa fa-eye-slash"></i>
          </button>
        </label>

        <span style={ {"display":"none"} }> 
          <label> Show </label>
          <select>
            <option selected value="grapefruit">default</option>
            <option value="lime">novice</option>
            <option value="coconut">expert</option>
            <option value="mango">all</option>
          </select> 
        </span>
      </div>

      <div className="flex-container flex-center" style={ {"display":"none"} }>
        <label className="top left">
          <label className="underline">Novice</label>
        </label>

        <span className="flex-item"></span>

        <label className="top right">
        <label className="underline">Expert</label>
        </label>
      </div>
    </div>
  );
}

export default ExploreFilter;
