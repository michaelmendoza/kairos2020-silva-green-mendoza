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

    const interactiveData = {
        novice: [
            { text: "7% of students explicity remarked that they had no previous experience with NPR: “I haven't heard of the website before, so that makes it less reliable.”", 
              style: { top: '5%'}, style2: {left: '5%'}},
            { text: "16% of students focused on the casual tone: “The language has a tendency to be informal or even conversational” and “the writing didn't sound very scientific.”", 
              style: { top: '45%'}, style2: {left: '5%'}},
            { text: "Novices noticed that the article had hyperlinks to many sources: “it actually has links to the study and information cited.” They did not click on the links, however. Nor did they understand what about the evidence cited was convincing or reliable. ",
              style: { top: '74%'}, style2: {left: '20%'}}
        ],
        expert: [
            { text: "31% of students recognized NPR as a well-known source: “NPR is a nationally recognized radio station” and “NPR is a trusted news site.”",
            style: { top: '2%'}, style2: {left: '20%'}},
            { text: "Experts dug deep enough to find the author’s credentials: “She works with news related to health issues, so she knows what she's talking about.”",
            style: { top: '16%'}, style2: {left: '20%'}},
            { text: "Experts recognized the expert, credible research presented: “They have a quote from someone at John Hopkins University” and “[she] has researched among many organizations such as the FDA.”",
            style: { top: '72%'}, style2: {left: '65%'}}
        ]
    }

  return (
    <div className="interactive-panel"> 
        <img className="interactive-explore-image card" src={props.img} />
        { interactiveData.novice.map((item) => { return <InteractiveItem data={item} type={"novice"}></InteractiveItem> })}
        { interactiveData.expert.map((item) => { return <InteractiveItem data={item} type={"expert"}></InteractiveItem> })}
    </div>
  );
}

export default InteractivePanel;
