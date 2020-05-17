import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { AppContext } from '../contexts/AppContext';

function ExploreFilter(props) {
  const { novice, expert, setNovice, setExpert } = useContext(AppContext);
  const handleNovice = () => { setNovice(!novice); };
  const handleExpert = () =>  { setExpert(!expert); };
  
  return (
    <div className="explore-filter ">

      <div className="flex-container">
        <label> Explore article. Hover on chat bubbles to see novice or expert comments on article. Orignal article from <a href={props.linkref} target="_blank" rel="noopener noreferrer">{props.linkname}</a>. </label>

        <span className="flex-item"></span>

        <label className="explore-filter-label"> Filters: </label>

        <label className="explore-show flex-container">
          Novice 
          <button className={ novice ? "active" : ""} onClick={handleNovice}> 
              <i className="fa fa-eye"></i>
              <i className="fa fa-eye-slash"></i>
          </button>
        </label>
        
        <label className="explore-show flex-container">
          Expert
          <button className={ expert ? "active" : ""} onClick={handleExpert}> 
              <i className="fa fa-eye"></i>
              <i className="fa fa-eye-slash"></i>
          </button>
        </label>
      </div>

    </div>
  );
}

export default ExploreFilter;
