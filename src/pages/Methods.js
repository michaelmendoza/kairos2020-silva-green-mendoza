import React from 'react';
import { Link } from '@reach/router';
import headerimage from '../images/methods.png';

function Methods() {
  return (
    <section className="section-article">
      <img src={headerimage} alt="header"/>
      <h1>Methods</h1>
      <article>
        <p> 
          Brigham Young University is located in Provo, UT and is a large, private, highly-selective religious
          university. Depending on the year, around 65% of students enrolled at BYU take a first-year writing
          (FYW) course during their first year of study (Writing 150: Writing and Rhetoric). Tasked with teaching
          these students information literacy skills connected to their research projects in FYW, we wondered
          how students were assessing information they found online. We devised a test with five different
          information sources that students would evaluate, and we would analyze their behaviors using a
          proctored survey, screen recording, and voice recording. Our study was reviewed and approved by our
          Institutional Review Board (IRB).
        </p>
        <p>
          To recruit, we went to FYW classes on the first or second day of Writing 150 classes and asked for
          participants using recruitment flyers. We wanted to test students before they had had any formal
          information literacy training from librarians and when they were very new to the university. To
          encourage participation, we promised each participant a ten dollar gift card. In total, eighty-nine
          students participated, which was twenty percent of the total Writing 150 enrollment over the summer
          of 2017. During the test, we gathered demographic information on the participants such as age, sex, and
          how many semesters of college the student had completed. Though the demographic information we
          collected was helpful in understanding the student population we were testing, overall, we did not see a
          statistically-significant correlation between specific demographic markers and how students evaluated
          the five different sources.
        </p>
        <p>
          On the day of the test, the students were ushered into a private office space in the academic library
          where they completed a survey asking about the five articles which are represented in the interactive
          portion of this webtext. Below is a table that explains why we chose each article. Remember, the linked
          mockups are representative of the original articles we used to test students.
        </p>
        
        <table className="table">
          <thead>
              <tr>
              <th>Publication</th>
              <th>Article Title</th>
              <th>Mockup</th>
              <th>Selection Criteria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NPR</td>
              <td>
                <a href="https://www.npr.org/sections/health-shots/2017/03/16/520268440/over-the-counter-birth-control-pills-would-be-safe-for-teens-researchers-say">
                “Over-The-Counter Birth Control Pills Would Be Safe For Teens, Researchers Say”
                </a>
              </td>
              <td> <Link to="/explore/apr">APR</Link> </td>
              <td>Chosen as a reliable, mainstream news article that cited academic research and other reliable sources.</td>
            </tr>
            <tr>
              <td>Huffington Post</td>
              <td>
                <a href="https://www.huffpost.com/entry/a-third-way-for-universities_b_58ce8a71e4b07112b6472ec4">
                “A Third Way for Universities”
                </a>
              </td>
              <td> <Link to="/explore/puffyhost">PuffyHost</Link></td>
              <td>Chosen as an opinion editorial from a well-known website that appeals to younger readers.</td>
            </tr>
            <tr>
              <td>The Blaze</td>
              <td>
                <a href="http://web.archive.org/web/20170428073641/https:/www.theblaze.com/news/2017/04/02/global-warming-fail-study-finds-melting-sea-ice-is-actually-helping-arctic-animals">
                “Global Warming Fail: Study Finds Melting Sea Ice is Actually Helping Arctic Animals”
                </a>
              </td>
              <td><Link to="/explore/theflame">The Flame</Link></td>
              <td>Chosen for a far-right bias, inaccurate use of data and information, a hot-button political issue, and use of visuals. (The online version of this article no longer includes a graph from NASA delineating melting sea ice levels that was in the original version)</td>
            </tr>
            <tr>
              <td>The Washington Post</td>
              <td>
                <a href="https://www.washingtonpost.com/news/the-switch/wp/2017/03/30/elon-musks-spacex-makes-history-by-launching-a-flight-proven-rocket/?noredirect=on%26utm_term=.e01648f3a9e2">
                “Elon Musk’s SpaceX Makes History by Launching a ‘Flight-Proven’ Rocket”
                </a>
              </td>
              <td><Link to="/explore/jeffersonpost">The Jefferson Post</Link></td>
              <td>Chosen to represent a well-known newspaper reporting on an event, for its apolitical subject, and inclusion of a video.</td>
            </tr>
            <tr>
              <td>Daily Kos</td>
              <td>
                <a href="https://www.dailykos.com/stories/2017/4/24/1655792/%E2%80%93There%E2%80%93s%E2%80%93a%E2%80%93growing%E2%80%93crisis%E2%80%93in%E2%80%93care%E2%80%93for%E2%80%93disabled%E2%80%93and%E2%80%93elderly%E2%80%93people%E2%80%93Oh%E2%80%93and%E2%80%93it%E2%80%93s%E2%80%93a%E2%80%93jobs%E2%80%93crisis%E2%80%93too">
                “There's a Growing Crisis in Care for Disabled and Elderly People. Oh, and It's a Jobs Crisis, Too”
                </a>
              </td>
              <td><Link to="/explore/dailypost">The Daily Post</Link></td>
              <td>Chosen for a fringe, far left bias and use of a combative, biased tone. Also, casual language. </td>
            </tr>
          </tbody>
        </table>

        <p>
          First, students were to take two minutes to evaluate a screen shot of the article, and then they were to
          take a few minutes to open up a new browser tab and do any “research” they deemed necessary to
          evaluate the article. We did not define what we meant by “research” so as to observe, as closely as
          possible, how students might naturally go about assessing the reliability of information sources.
          Students took anywhere from twenty-five minutes to sixty minutes to complete this test, but we
          estimated that most students would compete the task in forty minutes.
        </p>
        <p>
          For each article the students examined, we asked the students to respond to the following questions in
          written form at the end of the talk aloud portion of the evaluation:
        </p>
        <ul>
          <li>Overall, what qualities/attributes make this source <b>more</b> reliable to you?</li>
          <li>Overall, what qualities/attributes make this source <b>less</b> reliable to you?</li>
        </ul>
        <p>
          <b>The answers to these written questions are specifically where we get the quotes and statistics on
          which we report in the interactive portion of our webtext. </b> More analysis of the talk aloud protocols
          and screen recordings can be found in a published article in the Journal of Information Literacy (Silva,
          Walker, Green, 2018). For this webtext we chose to focus on what students wrote because students
          often recorded what the most salient features of the articles were to them (as opposed to the things
          they were less aware of which we noticed in the talk aloud portion of the study). In other words, if
          students were able to write it down, it was an important feature, and therefore, it underlined significant
          trends that we wanted to highlight for those engaging with first-year writing students. As the research
          team examined the written responses reported on in this webtext, trends in evaluative criteria became
          clear.
        </p>
        <p>
          Using grounded theory, we devised coding protocols after we collected student responses. Because
          most students showed both strengths and weaknesses in their analysis of the sources, we decided to
          classify behaviors, rather than specific individuals, as expert or novice. For example, after we noticed
          many students commenting on the graph in <Link to="/explore/theflame">The Blaze article</Link>, members of the research team searched
          for references to the graph and divided them into students who had remarked upon the graph’s
          convincing and reliable nature (novice) and those students who had realized that the graph did not
          support the claims made in the argument (expert). Some behaviors such as looking at the author’s
          credentials were only used as an expert behavior because we recognize, as librarian-experts, that this is
          generally a good authority-assessing practice. Other behaviors, such as focusing on the domain, were
          only coded as a novice behaviors, since we know that the .com or .org distinctions tell us very little
          about the reliability of a website nowadays. Certain behaviors, like remarking on previous experience
          with the website, had both novice and expert facets. Novices remarked on having no previous
          experience with the publication. Experts revealed that the source was one they had encountered before
          and were able to articulate relevant context about the source.
        </p>
        <p>
          TThe behaviors that we coded for owe much to the Association of College &amp; Research
          Libraries’ Framework for Information Literacy for Higher Education (2015). This Framework breaks up
          threshold concepts related to information literacy into six interconnected frames. We use these frames
          to help explain the difference between novice and expert behaviors in different domains. For example,
          students were able to articulate how the author had leveraged their experience and credentials into
          credibility (“Authority Is Constructed and Contextual” frame), understood the importance of validating
          the argument being made with other research or opinions (“Scholarship as Conversation” frame), and
          recognized the importance of looking into the venue in which that the information was published
          (“Information Creation as a Process” frame). Novice students, on the other hand, struggled with many of
          these distinctions, focusing on more shallow indicators (web design or word choice) and lacked the
          depth of understanding that the Framework outlines.
        </p>
        <p>
          After determining expert and novice behaviors for each article, three members of the research team
          coded the responses and determined how many students had exhibited each behavior, resulting in the
          novice and expert comments seen in the interactive mockups in this webtext. We review our wider
          findings of the written portion of the student tests in the next section.
        </p>
      </article>
    </section>
  );
}

export default Methods;
