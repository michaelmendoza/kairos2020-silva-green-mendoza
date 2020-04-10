import React, { useState } from 'react';
import noviceImage from '../images/novice.png';
import expertImage from '../images/expert.png';

function InteractiveCard(props) {
    const iconImage = props.type == 'novice' ? noviceImage : expertImage;

    return (
        <div className="interactive-card card flex-container" style={props.data.style2}>
            <img className="interactive-avatar" src={iconImage}/>
            <div className="flex-item">
                <header>
                    <span className="interactive-name"> {props.type} </span> 
                    <i className="fas fa-check-circle interactive-check"></i>
                    <span className="interactive-handle"> {'@'+ props.type} </span> 
                </header>  
                <div className="interactive-text"> {props.data.text} </div>
                <div className="interactive-actions"> 
                    <i className="far fa-comment"></i>
                    <i className="far fa-heart"></i> 
                    <i className="fas fa-share-alt"></i>
                </div>
            </div>
        </div>   
    )
}

function InteractiveItem(props) {
    const [show, setShow] = useState(false);

    return (
        <div className = "interactive-item flex-container"  style={props.data.style}>
            <button className={"interactive-prompt " + props.type} onMouseEnter = {() => setShow(true)} onMouseLeave = {() => setShow(false)}>
                <div className="speech-bubble" ></div>
            </button>
            
            { show && <InteractiveCard data={props.data} type={props.type}></InteractiveCard> }
        </div>
      );  
}

function InteractivePanel(props) {

  return (
    <div className="interactive-panel"> 
        <img className="interactive-explore-image card" src={props.img} />
        { props.json.novice.map((item) => { return <InteractiveItem data={item} type={"novice"}></InteractiveItem> })}
        { props.json.expert.map((item) => { return <InteractiveItem data={item} type={"expert"}></InteractiveItem> })}
    </div>
  );
}

export default InteractivePanel;
