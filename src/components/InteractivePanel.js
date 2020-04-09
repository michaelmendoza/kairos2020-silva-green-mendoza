import React, { useState, useContext, useEffect } from 'react';
import { exploreMode} from '../contexts/AppContext';

function InteractivePanel() {

    const interactiveData = {
        novice: [
            { text: "7% of students explicity remarked that they had no previous experience with NPR: “I haven't heard of the website before, so that makes it less reliable.”", 
                style: { top: '50%', left: '50%'} }
        ],
        expert: []
    }

  return (
    <div className="interactive-panel"> 
        Interactive Panel
        
        <div className = "card interactive-item" style={interactiveData.novice[0].style} >
            <header>
                <i className = "fas fa-user interactive-avatar"></i> 
                <span className="interactive-name"> Novice </span> 
                <i className="fas fa-check-circle interactive-check"></i>
            </header>
            <div className="interactive-text"> {interactiveData.novice[0].text} </div>
        </div>
    </div>
  );
}

export default InteractivePanel;
