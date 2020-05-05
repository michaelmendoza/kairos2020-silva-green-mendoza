import React from 'react';
import headerimage from '../images/references.png';

function References() {
  const references = [
    "Artman, Margaret, Frisicaro-Pawlowski, Erica, & Monge, Robert. (2010). Not just one shot: Extending the dialogue about information literacy in composition classes. Composition Studies, 38(2), 93-110.",
    "The Association of College and Research Libraries. (2015). Framework for information literacy for higher education. Chicago, IL: American Library Association. Retrieved June 21, 2019, from http://www.ala.org/acrl/standards/ilframework",
    "Baer, Andrea. (2018). It’s all relative? Post-truth rhetoric, relativism, and teaching on ‘authority as constructed and contextual.’ College & Research Libraries News, 79(2), 72.",
    "Brand-Gruwel, Saskia, Kammerer, Yvonne, Van Meeuwen, Ludo, & Van Gog, Tamara. (2017). Source evaluation of domain experts and novices during web search. Journal of Computer Assisted Learning, 33(3), 234-251",
    "Burton, Vicki T., & Chadwick, Scott A. (2000). Investigating the practices of student researchers: Patterns of use and criteria for use of internet and library sources. Computers and Composition, 17(3), 309-328.",
    "Chinn, Clark A., & Rinehart, Ronald W. (2016). Commentary: Advances in research on sourcing—source credibility and reliable processes for producing knowledge claims. Reading and Writing, 29(8), 1701-1717.",
    "Connaway, Lynn S. (2018). What is “container collapse” and why should librarians and teachers care? OCLC. Retrieved June 20, 2019, from http://www.oclc.org/blog/main/what-is-container-collapse-and-why-should-librarians-and-teachers-care/",
    "Currie, Lea, Devlin, Frances, Emde, Judith, & Graves, Kathryn. (2010). Undergraduate search strategies and evaluation criteria: Searching for credible sources. New Library World, 111(3/4), 113-124.",
    "Dubicki, Eleonora. (2015). Writing a research paper: Students explain their process. Reference Services Review, 43(4), 673-688.",
    "Faix, Allison. (2014). Assisting students to identify sources: An investigation. Library Journal, 63(8–9), 624-636. Retrieved March 1, 2019, from https://doi.org/10.1108/LR-07-2013-0100",
    "Lee, Olivia K. (2016). Millennial skepticism and susceptibility to media persuasion [Master’s Thesis: University of Tennessee at Chattanooga]. UTC Scholar.",
    "Mackey, Thomas P., & Jacobson, Trudi E. (2011). Reframing information literacy as a metaliteracy. College & Research Libraries 72(1), 62-78.",
    "McClure, Randall, & Clink, Kellian. (2009). How do you know that?: An investigation of student research practices in the digital age. portal: Libraries and the Academy, 9(1), 115-132.",
    "Metzger, Miriam J. (2007). Making sense of credibility on the web: Models for evaluating online information and recommendations for future research. Journal of the American Society for Information Science and Technology, 58(13), 2078-2091.",
    "Ostenson, Jonathan. (2014). Reconsidering the checklist in teaching internet source evaluation. portal: Libraries and the Academy, 14(1), 33-50.",
    "Ostenson, Jonathan, & Silva, Elise. (2019). Avoiding fakery: Activities to prepare students for effective searches. English Journal, 108(5), 46-53.",
    "Raine, Lee, & Anderson, Jana. (2017). The fate of online trust in the next decade. Pew Research Center. Retrieved May 4, 2020, from https://www.pewresearch.org/internet/2017/08/10/the-fate-of-online-trust-in-the-next-decade/",
    "Silva, Elise, Green, Jessica, & Walker, Cole. (2018). Source evaluation behaviours of first-year university students. Journal of Information Literacy, 12(2), 24-43. Retrieved June 24, 2019, from https://doi.org/10.11645/12.2.2512",
    "Sundar, S. Shyam. (2008). The MAIN model: A heuristic approach to understanding technology effects on credibility. In Andrew J. Flanagin & Miriam J. Metzger (Eds.), Digital media, youth, and credibility (pp. 73-100). Cambridge, MA: The MIT Press. Retrieved June 24, 2019, from doi: 10.1162/dmal.9780262562324.073",
    "van Strien, Johan L., Kammerer, Yvonne, Brand-Gruwel, Saskia, & Boshuizen, Henny P. (2016). How attitude strength biases information processing and evaluation on the web. Computers in Human Behavior, 60, 245-252.",
    "Wineburg, Sam, McGrew, Sarah, Breakstone, Joel, & Ortega, Teresa. (2016). Evaluating information: The cornerstone of civic online reasoning. Stanford Digital Repository. Retrieved June 24, 2019, from http://purl.stanford.edu/fv751yt5934"
  ]

  return (
      <section className="section-article references-page">
        <img src={headerimage} alt="header"/>
        <h1>References</h1> 
        <article>
          { references.map((reference)=> { return <p>{reference}</p> }) }
        </article>
      </section>
  );
}

export default References;