import React from 'react';
import headerimage from '../images/contact.png';
import eliseimage from '../images/elisesilva.png';
import jessicaimage from '../images/jessicagreen.png';
import michaelimage from '../images/michaelmendoza.jpeg';

function Contact() {
  return (
      <section className="section-article contacts-page">
        <img className="contacts-header_image" src={headerimage} alt="header"/>
        <h1>Contact</h1>
        <article className="flex-container flex-wrap flex-space-around">
          <div className="card contact-card">
            <img src={eliseimage}></img>
            <h2>Elise Silva</h2>
            <h4>University of Pittsburgh</h4>
            <h4>elise.c.silva@gmail.com</h4>
            <p> Elise is the former BYU Writing Programs Librarian. She holds an MA in English and a Master's of Library and Information Science. She is currently a PhD student in English Composition at the University of Pittsburgh. Her sub-specialty is in Digital Humanities. She was the primary investigator on this research study and wrote the content for the website. She consulted and iterated with the web designer on the interactive features of the webtext.  </p>
          </div>
          <div className="card contact-card">
            <img src={jessicaimage}></img>
            <h2>Jessica Green</h2>
            <h4>Brigham Young University</h4>
            <h4>jessica_green@byu.edu</h4>
            <p> Jessica is the Writing Programs Supervisor at the Harold B. Lee Library at BYU. She has an MA in Rhetoric and Composition and teaches hundreds of students how to find and evaluate information each year. Her primary role in this research was to collect analyze the data to identify patterns in student research behaviors.  </p>
          </div>
          <div className="card contact-card">
            <img src={michaelimage}></img>
            <h2>Michael Mendoza</h2>
            <h4>Imperial College London</h4>
            <h4>askmichaelmendoza@gmail.com</h4>
            <p> Michael is software developer and data scientist. He holds a BS and MS in Electrical Engineering. He is currently a PhD student in Bioengineering at Imperial College London. His research is focused on Medical Imaging, Machine Learning, and Data Visualization. His primary role was the design and the development of this interactive web application. </p>
          </div>
        </article>
      </section>
  );
}

export default Contact;
