import React from 'react';
import { Link } from '@reach/router';
import headerimage from '../images/references.png';
import AppLayout from '../components/AppLayout';

function References({ location }) {
  return (
    <AppLayout pathname={location.pathname}>
      <section className="section-article references-page">
        <img src={headerimage} alt="header"/>
        <h1>References</h1> 
        <article>
          <p> Artman, Margaret, Frisicaro-Pawlowskica, & Monge, Robert. (2010). Not just a one shot: Extending the dialogue about information literacy in composition classes. <i> Composition Studies, 38</i>(2), 93-110. </p>
          <p> The Association of College and Research Libraries. (2015). Framework for information literacy for higher education. Chicago, IL: American Library Association. Retrieved June 21, 2019, from http://www.ala.org/acrl/standards/ilframework </p>
          <p> Baer, Andrea. (2018). It’s all relative? Post-truth rhetoric, relativism, and teaching on ‘authority as constructed and contextual.’ <i> College & Research Libraries News, 79</i>(2), 72. </p>
          <p> Brand-Gruwel, Saskia, Kammerer, Yvonne, Van Meeuwen, Ludo, & Van Gog, Tamara. (2017). Source evaluation of domain experts and novices during web search. <i>Journal of Computer Assisted Learning, 33</i>(3), 234-251 </p>
          <p> Burton, Vicki T., & Chadwick, Scott A. (2000). Investigating the practices of student researchers: Patterns of use and criteria for use of internet and library sources. <i>Computers and Composition, 17</i>(3), 309-328. </p>
          <p> Caulfield, Michael A. (2017). <i>Web literacy for student fact-checkers.</i> Retrieved from https://webliteracy.pressbooks.com/ </p>
          <p> Chinn, Clark A., & Rinehart, Ronald W. (2016). Commentary: Advances in research on sourcing—source credibility and reliable processes for producing knowledge claims. <i>Reading and Writing, 29</i>(8), 1701-1717. </p>
          <p> Connaway, Lynn S. (2018). What is “container collapse” and why should librarians and teachers care? OCLC. Retrieved June 20, 2019, from http://www.oclc.org/blog/main/what-is-container-collapse-and-why-should-librarians-and-teachers-care/ </p>
          <p> Currie, Lea, Devlin, Frances, Emde, Judith, & Graves, Kathryn. (2010). Undergraduate search strategies and evaluation criteria: Searching for credible sources. <i>New Library World, 111</i>(3/4), 113-124. </p>
          <p> Dubicki, Eleonora. (2015). Writing a research paper: Students explain their process. <i>Reference Services Review, 43</i>(4), 673-688. </p>
          <p> Faix, Allison. (2014). Assisting students to identify sources: An investigation. <i>Library Journal, 63</i>(8–9), 624-636. Retrieved March 1, 2019, from https://doi.org/10.1108/LR-07-2013-0100 </p>
          <p> Lee, Olivia K. (2016). Millennial skepticism and susceptibility to media persuasion [Master’s Thesis: University of Tennessee at Chattanooga]. UTC Scholar. </p>
          <p> Mackey, Thomas P., & Jacobson, Trudi E. (2011). Reframing information literacy as a metaliteracy. <i>College & Research Libraries 72</i>(1), 62-78. </p>
          <p> McClure, Randall, & Clink, Kellian. (2009). How do you know that?: An investigation of student research practices in the digital age. <i>portal: Libraries and the Academy, 9</i>(1), 115-132. </p>
          <p> Metzger, Miriam J. (2007). Making sense of credibility on the web: Models for evaluating online information and recommendations for future research. <i>Journal of the American Society for Information Science and Technology, 58</i>(13), 2078-2091. </p>
          <p> Ostenson, Jonathan. (2014). Reconsidering the checklist in teaching internet source evaluation. <i> portal: Libraries and the Academy, 14</i>(1), 33-50. </p>
          <p> Ostenson, Jonathan, & Silva, Elise. (2019). Avoiding fakery: Activities to prepare students for effective searches. <i>English Journal, 108</i>(5), 46-53. </p>
          <p> Raine, Lee, & Anderson, Jana. (2017). The fate of online trust in the next decade. <i>Pew Research Center.</i> Retrieved May 4, 2020, from https://www.pewresearch.org/internet/2017/08/10/the-fate-of-online-trust-in-the-next-decade/ </p>
          <p> Silva, Elise, Green, Jessica, & Walker, Cole. (2018). Source evaluation behaviours of first-year university students. <i>Journal of Information Literacy, 12</i>(2), 24-43. Retrieved June 24, 2019, from https://doi.org/10.11645/12.2.2512 </p>
          <p> Sundar, S. Shyam. (2008). The MAIN model: A heuristic approach to understanding technology effects on credibility. In Andrew J. Flanagin & Miriam J. Metzger (Eds.), <i>Digital media, youth, and credibility</i> (pp. 73-100). Cambridge, MA: The MIT Press. Retrieved June 24, 2019, from doi: 10.1162/dmal.9780262562324.073 </p>
          <p> van Strien, Johan L., Kammerer, Yvonne, Brand-Gruwel, Saskia, & Boshuizen, Henny P. (2016). How attitude strength biases information processing and evaluation on the web. <i>Computers in Human Behavior</i>, 60, 245-252. </p>
          <p> Wineburg, Sam, & McGrew, Sarah. (2017). Lateral reading: Reading less and learning more when evaluating digital information. <i>Stanford History Education Group Working Paper</i>, 2017 (A1). Retrieved from https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3048994 </p>
          <p> Wineburg, Sam, McGrew, Sarah, Breakstone, Joel, & Ortega, Teresa. (2016). Evaluating information: The cornerstone of civic online reasoning. <i>Stanford Digital Repository.</i> Retrieved June 24, 2019, from http://purl.stanford.edu/fv751yt5934" </p>
        </article>

        <div className="next-page-button"> 
            <label> Next Page: </label>
            <Link to="/contact">Contact</Link>
          </div>
      </section>
    </AppLayout>
  );
}

export default References;