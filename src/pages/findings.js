import React from 'react';
import { Link } from 'gatsby';
import DataTable from '../components/DataTable';
import HistogramWrapper from '../components/HistogramWrapper';
import PieChart from '../components/PieChart';
import headerimage from '../images/findings.png';
import AppLayout from '../components/AppLayout';

function Findings({ location }) {  
  return (
    <AppLayout pathname={location.pathname}>
      <section className="section-article findings-page">
        <img src={headerimage} alt="header"/>
        <h1>Findings</h1>
        <article>
          <p> 
            Given the quickly changing ecosystem of information online, studies like ours will continually need to be
            revisited in the light of shifting evaluative impulses on the part of students. While significant literature
            exists about source evaluation behaviors which we review in the context portion of this webtext, the
            timeliness of our study, the demographics studied, and the methods of our data collection give our
            study a rich overview of first-year writing student evaluation behaviors that can help us decide how to
            better teach about interacting with web-based information in composition classes. Here, we give an
            overview of some of the major findings of the study. First, we begin with the basic demographic
            breakdown of our participants.
          </p>

          <div className="pie-chart-container flex-container flex-center flex-wrap">
            <PieChart path="pie" data={[48, 49]} labels={['male', 'female']} title="Self-Reported Sex"></PieChart>
            <PieChart path="pie" data={[51, 13, 13, 12]} labels={['0','1','2','3+']} title="Number of Semesters Completed"></PieChart>
            <PieChart path="pie" data={[42, 3, 11, 20, 13]} labels={['18','19','20','21','22+']} title="Age Range"></PieChart>
          </div>

          <div className="caption"> Figure 1: Demographic break of survey participants </div>

          <p>
            Students rated the articles from one to ten, one being very unreliable and ten being very reliable. They
            rated each article twice: before and after they had time to examine the article in depth. Students were
            instructed to initially take two minutes to look at a screenshot of the article and provide a quick gut-
            reaction rating of the article’s reliability. They then were instructed to open a Google tab and investigate
            the article in any way they chose. Here are the ratings for the five articles both before and after they
            researched them.
          </p>
          <p>
            Note both that the minimum and maximum scores given out of ten by the research participants and the
            number of participants (“count”) to finish the research task. The count goes down as the table
            progresses because some students did not finish rating each article within the sixty-minute time
            allotment for each participant. The findings are presented to you in the order students rated the articles.
          </p>
          
          <div className="reliability-chart-container">
            <div className="flex-container flex-center flex-between flex-wrap">
              <HistogramWrapper></HistogramWrapper>

              <DataTable data={ 
                [
                  {name:"NPR", status:"before", min:1.0, max:10.0, mean:6.47, stdev:2.03, var:4.11, count:89, index:0},
                  {name:"NPR", status:"after", min:1.0, max:10.0, mean:6.85, stdev:2.16, var:4.69, count:89, index:1},
                  {name:"Huffington Post", status:"before", min:3.0, max:10.0, mean:6.34, stdev:1.79, var:3.21, count:89, index:2},
                  {name:"Huffington Post", status:"after", min:3.0, max:10.0, mean:6.49, stdev:2.13, var:4.54, count:89, index:3},
                  {name:"The Blaze", status:"before", min:1.0, max:10.0, mean:5.76, stdev:2.20, var:4.84, count:88, index:4},
                  {name:"The Blaze", status:"after", min:1.0, max:10.0, mean:5.83, stdev:2.47, var:6.12, count:88, index:5},
                  {name:"Washington Post", status:"before", min:4.0, max:10.0, mean:7.69, stdev:1.65, var:2.72, count:87, index:6},
                  {name:"Washington Post", status:"after", min:2.0, max:10.0, mean:8.13, stdev:1.71, var:2.94, count:87, index:7},
                  {name:"Daily Kos", status:"before", min:1.0, max:10.0, mean:5.85, stdev:1.79, var:3.22, count:86, index:8},
                  {name:"Daily Kos", status:"after", min:1.0, max:10.0, mean:5.43, stdev:2.15, var:4.62, count:86, index:9}
                ]}>
              </DataTable>
            </div>
          </div>

          <div className="caption"> Figure 2: Survey statistics showing reliability of the survey results before and after research ratings. Statistics for all survey questions given in table. Participant response distribution for highlighted question shown in histogram. (Histogram is interactive: Click on show button in table to change the current highlighted survey question)  </div>

          <p>
            In our grounded theory coding, we took note of what comments appeared the most often in terms of
            what made each source more/less reliable. These features are summarized below, and are further
            explicated in the interactive portion of this webtext.
          </p>

          <h2>NPR</h2>
          <ul>
            <li> More reliable: NPR as a publishing body is familiar and well-known </li>
            <li> Less reliable: NPR as a publishing body is biased/liberal </li>
          </ul>
          <p>
            Researcher comments: The way students saw the publishing body as both a boon and a detractor
            showcases student confusion over authority, especially where publishing venues are at play.
          </p>

            <h2>Huffington Post</h2>
            <ul>
              <li> More reliable: The author had expertise on the subject of the article </li>
              <li> Less reliable: The Huffington Post is a dubious publishing venue </li>
            </ul>
            <p>
              Researcher comments: Two forms of authority are at odds here, the author vs. the publication venue.
              Students hard a hard time balancing their competing feelings. Furthermore, many were unsure if
              Huffington Post, a fairly mainstream news source, could be trusted.
            </p>

            <h2>The Blaze</h2>
            <ul>
              <li> More reliable: The embedded graph from NASA </li>
              <li> Less reliable: The article/website bias </li>
            </ul>
            <p>
              Researcher comments: Even though students were quick to point out the website’s obvious bias, they
              were still easily seduced by the graph’s visual rhetoric, which to them lent authority to the piece.
            </p>

            <h2>Washington Post</h2>
            <ul>
              <li> More reliable: Washington Post is a well-known news source </li>
              <li> Less reliable: “Nothing makes it less reliable” was by far the top comment recorded under “less reliable” for the Washington Post article</li>
            </ul>
            <p>
              Researcher comments: While students generally trusted this source, and it was the highest rated source
              out of all the articles, the fact that the mean score after research was still an 8/10 showcases a general
              distrust of media sources even when students can find ostensibly “nothing” wrong with them.
            </p>

            <h2>Daily Kos</h2>
            <ul>
              <li> More reliable: The sources cited/quoted </li>
              <li> Less reliable: The article’s bias, specifically evidenced in the language </li>
            </ul>
            <p>
              Researcher comments: Students struggled to balance the biased source with the evidence the source
              provided. Where does bias outweigh evidence, they wondered?
            </p>                                    
        </article>

        <div className="next-page-button"> 
          <label> Next Page: </label>
          <Link to="/context">Context and Discussion</Link>
        </div>
      </section>
    </AppLayout>
  );
}

export default Findings;
