import React from 'react';
import headerimage from '../images/test.png';

function DataTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Field</td>
          <td>Min</td>
          <td>Max</td>
          <td>Mean</td>
          <td>Std Deviation</td>
          <td>Variance</td>
          <td>Count</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{props.data.field}</th>
          <th>{props.data.min}</th>
          <th>{props.data.max}</th>
          <th>{props.data.mean}</th>
          <th>{props.data.stdev}</th>
          <th>{props.data.var}</th>
          <th>{props.data.count}</th>
        </tr>
      </tbody>
    </table>
  )
}

function Findings() {
  return (
      <section className="section-article">
        <img src={headerimage} alt="header"/>
        <h1>Findings</h1>
        <article>
          <p> 
            Given the quickly changing ecosystem of information online, studies like ours will continually need to be
            revisited in the light of shifting evaluative impulses on the part of students. While significant literature
            exists about source evaluation behaviors which we review in the context portion of this webtext, the
            timeliness of our study, the demographics studied, and the methods of our data collection gives our
            study a rich overview of first-year writing student evaluation behaviors that can help us decide how to
            better teach about interacting with web-based information in composition classes. Here, we over view
            some of the major findings of the study. First, we begin with the basic demographic breakdown of our
            participants. 
          </p>
          <p>
            ********* TODO ********* 
          </p>
          <p>
            Given the quickly changing ecosystem of information online, studies like ours will continually need to be
            revisited in the light of shifting evaluative impulses on the part of students. While significant literature
            exists about source evaluation behaviors which we review in the context portion of this webtext, the
            timeliness of our study, the demographics studied, and the methods of our data collection gives our
            study a rich overview of first-year writing student evaluation behaviors that can help us decide how to
            better teach about interacting with web-based information in composition classes. Here, we over view
            some of the major findings of the study. First, we begin with the basic demographic breakdown of our
            participants.
          </p>
          <p>
            Given the quickly changing ecosystem of information online, studies like ours will continually need to be
            revisited in the light of shifting evaluative impulses on the part of students. While significant literature
            exists about source evaluation behaviors which we review in the context portion of this webtext, the
            timeliness of our study, the demographics studied, and the methods of our data collection gives our
            study a rich overview of first-year writing student evaluation behaviors that can help us decide how to
            better teach about interacting with web-based information in composition classes. Here, we over view
            some of the major findings of the study. First, we begin with the basic demographic breakdown of our
            participants.
          </p>

          <h4>NPR before research</h4>
          <DataTable data={{field:"Reliability", min:1.0, max:10.0, mean:6.47, stdev:2.03, var:4.11, count:89}}></DataTable>
          <h4>NPR after research</h4>
          <DataTable data={{field:"Reliability", min:1.0, max:10.0, mean:6.85, stdev:2.16, var:4.69, count:89}}></DataTable>
          <h4>Huffington Post before research</h4>
          <DataTable data={{field:"Reliability", min:3.0, max:10.0, mean:6.34, stdev:1.79, var:3.21, count:89}}></DataTable>
          <h4>Huffington Post after research</h4>
          <DataTable data={{field:"Reliability", min:3.0, max:10.0, mean:6.49, stdev:2.13, var:4.54, count:89}}></DataTable>
          <h4>The Blaze before research</h4>
          <DataTable data={{field:"Reliability", min:1.0, max:10.0, mean:5.76, stdev:2.20, var:4.84, count:88}}></DataTable>
          <h4>The Blaze after research</h4>
          <DataTable data={{field:"Reliability", min:1.0, max:10.0, mean:5.83, stdev:2.47, var:6.12, count:88}}></DataTable>
          <h4>Washington Post before research</h4>
          <DataTable data={{field:"Reliability", min:4.0, max:10.0, mean:7.69, stdev:1.65, var:2.72, count:87}}></DataTable>
          <h4>Washington Post after research</h4>
          <DataTable data={{field:"Reliability", min:2.0, max:10.0, mean:8.13, stdev:1.71, var:2.94, count:87}}></DataTable>
          <h4>Daily Kos before research</h4>
          <DataTable data={{field:"Reliability", min:1.0, max:10.0, mean:5.85, stdev:1.79, var:3.22, count:86}}></DataTable>
          <h4>Daily Kos after research</h4>
          <DataTable data={{field:"Reliability", min:1.0, max:10.0, mean:5.43, stdev:2.15, var:4.62, count:86}}></DataTable>
        </article>
        
        <p>
          In our grounded theory coding, we took note of what students wrote were the most and least reliable
          features of each article. Here is our summary of most and least reliable features for each article studied.
        </p>
        <p>
          ********* TODO ********* 
        </p>
      </section>
  );
}

export default Findings;
