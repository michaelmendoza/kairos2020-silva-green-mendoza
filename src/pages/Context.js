import React from 'react';
import { Link } from '@reach/router';
import headerimage from '../images/context.png';

function Context() {
  return (
      <section className="section-article">
        <img src={headerimage} alt="header"/>
        <h1>Context and Discussion</h1>
        <article>
          <p>  
            The question of what students believe about what they read online intersects many fields including
            information literacy (library studies), critical digital literacy (a subset of rhetoric and composition
            studies), and civic reasoning (social studies). While no discipline holds the corner on the market of
            source evaluation studies, looking at them together can create a better picture of student evaluative
            behaviors, and how composition instructors can confront this issue which affects source-based writing.
        </p> 
        <p>
            In this section, we review what previous research has shown about source evaluation trends, and how
            our student participants follow, complicate, or deviate from these trends. While we observed our
            students following several well-established tendencies like using shallow source evaluation techniques,
            and exhibiting strong moments of confirmation bias, they also complicated current research on how
            students consider authority. Interestingly we noticed the extreme confusion on the part of students as
            to how to articulate whether something is authoritative or not within a given context. Nearly twenty
            years ago Vicki T. Burton and Scott A. Chadwick (2000) called for “researchers in composition studies to
            turn some of our electronic and intellectual energy toward developing a theory of pedagogy of source
            evaluation that will help students across the disciplines embrace the idea that careful evaluation of
            research sources is vital to their construction of healthy arguments, healthy writing, and healthy
            academic lives” (p. 326). Our study is building off of research in this rapidly changing field where
            professionals from various disciplines have demonstrated interest in student research behaviors with
            the hope to prepare better digital citizens. In addition to analyzing student research behaviors that
            arose in this study, we also offer some pedagogical interventions implied by our findings in response to
            Burton and Chadwick’s call.
          </p>
          <h2>Superficial Evaluation Behaviors</h2>
          <p>
            Librarians have studied the depth to which students evaluate source material and find that students use
            superficial source evaluation behaviors more often than not (Faix, 2014, p. 627). Such shallow or
            superficial behaviors include looking at the layout of a website, but not considering the authority of the
            venue which published or hosts the site. Lea Currie, Frances Devlin, Judith Emde, and Kathryn Graves
            (2010) corroborate this finding. In our study students struggled with the same issues, but give us a wider
            range of examples from which to extrapolate what “superficial” and “deep” behaviors might look like.
          </p>
          <p>
            For instance, in the <Link to="/explore/apr">APR</Link> (NPR) example, many students noticed that there were several hyperlinks in the
            article. In fact, the NPR article was the most well-sourced article out of any of the ones we included in
            the test. However, fewer students actually clicked on the hyperlinks. To notice the hyperlink is not a bad
            impulse, but it is a novice one: the presence of hyperlinks tells an evaluator relatively little. Expert
            students who clicked on the hyperlinks were able to corroborate information, do research on individuals
            quoted in the article, and engaged in deeper source evaluation behaviors. If students were just looking
            at hyperlinks to evaluate a source, they were easily duped by <Link to='explore/theflame'>The Flame</Link> (The Blaze) source which also
            had hyperlinks to outside articles—but unlike the <Link to="/explore/apr">APR</Link> (NPR) article, these hyperlinks did not link back to
            original/primary source material. It takes deeper source evaluation work (actually clicking on the link) to
            discover this. As Miriam J. Metzger (2007) argues, students do not often take the time to complete
            evaluative tasks that are more time consuming and “that require effort to perform, even if the effort is
            fairly minimal” (p. 2080).
          </p>
          <p>
            Another example of shallow behaviors comes from the <Link to="/explore/jeffersonpost">Jefferson Post</Link> (Washington Post). Novices
            pointed out that the ads on the side of the page affected their opinion of the source without being able
            to articulate why they did so. Noticing ads is not a bad behavior. To some extent it is true that more
            obtrusive ads and pop-ups may suggest a lower-tier publication; however, many of these novice
            students stopped their evaluation there. They did not dig deeper or think about what the presence of
            ads or placement of ads suggested about the type of information they were consuming. Such behaviors
            show little awareness about how online publishing is funded, and what that ultimately means about the
            value of information they are consuming.
          </p>
          <h2>Authority and Information Creation Trends</h2>
          <p>
            Students exhibit problematic understanding of authority. Media scholars have studied the somewhat
            contradictory way that students avoid traditionally authoritative source material, and yet are easily
            persuaded by problematic, non-authoritative information sources. In the words of Olivia Lee (2016),
            “While their search for truth is commendable, [their] actual media consumption habits may reveal a
            disconnect between their skepticism toward the mass media and their susceptibility to false media
            messages” (p. 4). What Lee goes on to extrapolate are the ways in which younger information
            consumers gravitate towards more crowd-sourced options (like Wikipedia and Reddit threads) and less
            to mainstream news media which has been fact-checked before publication. While crowd-sourced
            information is not in and of itself bad (and Wikipedia often viewed as an authoritative encyclopedic
            source), few students are able to truly break down what constitutes authority within a particular
            information context.
          </p>
          <p>
            For instance, the student comments on the <Link to="/explore/puffyhost">PuffyHost</Link> (Huffington Post) article showcase a disconnect
            between novice concepts of authority vs. more thoughtful interactions with the source material. Novices
            relied on the out-of-date .com/.org differentiation as a marker of authority, whereas information experts
            realize that this differentiation is relatively meaningless in the current ecosystem of the web.
            Students who rely on the .com/.org distinction do not understand how information is created and how
            webpages are published. This misunderstanding puts them at a disadvantage when evaluating
            information online because they lack a basic awareness of how webpages come to be.
          </p>
          <p>
            More expert students were able to see the <Link to="/explore/puffyhost">PuffyHost</Link> (Huffington Post) article for what it was: an
            opinion editorial written by someone with significant authority on the subject. In other words, it is a
            piece of information that is highly contextual in its rhetorical situation and within its genre constraints.
            Experts were able to see the information for how it was created and for what purpose, while novices
            were more affected by their confusion over whether the Huffington Post was objectively a good venue
            or not. This confusion over venue quality is something that spanned over all five of our articles, with
            students struggling to understand what “mainstream” venues were and which ones were “fringe.” An
            information expert would be able to pick out the mainstream venues (NPR, Huffington Post, and
            Washington Post) and would be more wary of the fringe sites (The Daily Kos and The Blaze). This expert
            behavior requires an understanding of how mainstream news media is produced, and what that means
            about publication standards. This also relates to a growing distrust in mainstream news media outlets by
            student researchers like this student who said:
          </p>
          <blockquote className="blockquote">
            Well, I&#39;m on a rant. Just so we&#39;re clear, I&#39;m not a huge fan of the media. I don&#39;t know if I&#39;ve
            made that clear yet. Articles by the Washington Post, and things like that, I tend to stay away
            from because I don&#39;t really trust the writers, I don&#39;t really trust the direction they get because
            really the incentives that they have are, for writing articles is just about the money. I think they
            have a flawed view, they romanticize, they give too much importance to getting information
            out, they don&#39;t realize the harm they cause by getting bad information out, or even just getting
            information out that people don&#39;t need to hear. So in general, maybe I&#39;m biased, but I don&#39;t like
            these sort of sources. But I would still use them, I just don&#39;t love them.
          </blockquote>
          <p>
            Such confusion over authority has been studied by digital literacy scholars like Sam Wineburg and the
            Stanford History Education Group (2016). Wineburg's group astutely observed that this difficulty is not
            something on which to blame students, but instead, a symptom of our current information
            environment: “Ordinary people once relied on publishers, editors, and subject matter experts to vet the
            information they consumed. But on the unregulated internet, all bets are off” (p. 4).
          </p>
          <p>
            Finally, as Randall McClure and Kellian Clink (2009) suggest, “The evaluation of authority is ultimately
            subjective (p. 121). However, what our study adds to the conversation is a landscape in which we see
            students demonstrating that authority is something they know they should consider while evaluating
            sources, but a criterion they struggle to unpack in different contexts and with different publication
            types.  
          </p>
          <h2>Confirmation Bias</h2>
          <p>
            Novice and expert researchers alike are affected by confirmation bias; however, novice researchers are
            perhaps less aware of this bias, or at least, more likely to trust knee-jerk reactions. As Johan van Strien,
            Yvonne Kammerer, Saskia Brand-Gruwel, and Henny P. Boshuizen (2016) summarize: “Prior attitudes
            can affect information processing and evaluation in profound ways. For instance, people are almost two
            times more likely to select information that supports their prior attitudes” (p. 246).
          </p>
          <p>
            Our study corroborates such findings. The greatest example of where confirmation bias happened for
            students was in <Link to="/explore/theflame">The Flame</Link> (The Blaze) article entitled “Global warming fail: Study finds melting sea ice is
            actually helping arctic animals.” This fringe website is using primary data, several times removed, to
            suggest that climate change is benefiting arctic animals—something the original article only points to in a very limited way for microscopic
            organisms, and one that is not substantiated for wider artic ecosystems by other compelling evidence. The writing of the article is sloppy, riddled with
            grammatical and spelling errors, and the information is difficult to corroborate. Clearly, this is a biased
            source that should be treated with great suspicion; however, some novice students weren’t worried
            about the content of the piece as it agreed with their beliefs.
          </p>
          <p>
            We also noticed students having very biased reactions to other articles as well, namely the APR (NPR)
            article on birth control. Students at BYU tend to be highly religious, and overall conservative. For many
            of them, an article claiming that birth control was safe for teens was synonymous to touting sexual
            promiscuity: a view many students found distasteful. Given their biases, they were unable to consume
            the information in the article fairly, and many of them rated it less reliable as a result. As one student
            exclaimed, “Oh gracious! I&#39;m not sure about morality here.&quot;
          </p>
          <h2>Visual Rhetoric</h2>
          <p>
            Closely related to the discussion on superficial source evaluation, it was very apparent that students
            were seduced by the visual aspects of the webpages tested, specifically pictures, graphs, and videos.
          </p>
          <p>
            In terms of previous research, Saskia Brand-Gruwel, Yvonne Kammerer, Ludo Van Meeuwen, and
            Tamara Van Gog (2017) suggest that “domain novices based their credibility evaluation mainly on
            Website design (e.g. colors, layout, pictures), while domain experts most often relied on author or
            publisher information, followed by credibility evaluations relating to references provided on the sites or
            based on perceived motives or biases” (p. 236).
          </p>
          <p>
            In assessing our own student responses, the <Link to="/explore/jeffersonpost">Jefferson Post</Link> (Washington Post) article was a fairly
            straightforward piece of news on a SpaceX launch. What really convinced students, though, was the
            video of the launch. Without any prompting on our part, 31% of students found the video very
            persuasive in establishing credibility. While the video is a functional part of the ethos of the piece to be
            sure, many of these students missed other markers of authority (perhaps the greatest marker being the
            publication venue, the reputable Washington Post). Many students that stopped to watch the video
            while we were testing them, but fewer went on to triangulate areas of authority on the webpage. In an era
            of “deep fake” (the ability to fake videos for political or financial gain), the sincere trust many students
            put in these parts of the websites is disturbing. 
          </p>
          <p>
            Another example was the graph on <Link to="/explore/theflame">The Flame</Link> (The Blaze) website. In the original website that claimed
            arctic animals were thriving due to global warming, the authors linked a graph from NASA as part of
            their publication. While the graph has been removed from the current iteration of The Blaze’s article
            (NASA updated their graphs since it was published), when we ran the study originally, the graph was a
            prominent part of the article. We link to the Way Back Machine’s archived version of the website so that
            our readers can see what students would have seen when they evaluated the source. 39% of students
            commented on the graph as being something that established credibility for the source. The problem is
            this: the graph simply delineated that ice levels were declining. The graph did not support the article’s
            main assertion that arctic animals were thriving due to climate change. Only 5% of our student
            participants noticed the disconnect, showing how very compelling students find the visual markers on
            online publications. The rest found the graph very convincing, as articulated by this student participant:
          </p>
          <blockquote className="blockquote">
            They have a graph in here. Graphs are amazing support for almost anything. Really benefits
            this. Especially if I’m like looking through, and then, I don’t really want to read the article
            because it takes too much time going through all these articles for research, so I kind of go
            through, look at what links they have, click on some of them, see how they look, and then
            especially this graph. This graph would make me want to stop and read it. Very important
            there.
          </blockquote>
          <p>
            In short, S. Shyam Sundar (2008) perhaps put it best: “if it’s cool, it’s credible” (p. 82). And for this
            generation of students, the visuals are definitely cool.
          </p>
          
          <h2>Inability to Articulate Why</h2>
          <p>
            Some readers considering our expert vs. novice student comments may be surprised at how we, the
            researchers, differentiated the two. We note here that many behaviors we coded as novice might have
            been seen as more expert if only the student had been able to thoughtfully articulate why the issue they
            pinpointed made a source more or less reliable. Without this self-awareness, we were left coding these
            students’ behaviors as novice because they lacked metacognitive awareness. In Brand-Gruwel et al.’s
            study (2017) they differentiated domain novices who “expressed more utterances on a superficial level”
            while experts “expressed more specific utterances” (p. 246).
          </p>
          <p>
            Take, for instance, the <Link to="/explore/dailypost">Daily Post</Link> (Daily Kos) article. One major feature of this article was a pop-up at the
            beginning urging readers to sign a petition against Trump, a clear indication as to the political leanings of
            the website. Many students noticed this, and said it made it less reliable for them, but few were able to
            articulate why the pop-up was a problem (aside from the fact that they found it annoying). The pop-up
            said something about the persuasive bent of the website, but few students were able to pinpoint why
            this was a problem.
          </p>
          <p>
            Perhaps student difficulty explaining why a feature made the source more or less reliable to them comes
            from their (unearned, scholars might note) confidence in evaluating source material. Indeed, “students
            seem to trust their own judgement when determining the credibility of sources they found on the
            internet” (Dubicki, 2015, p. 676). This trend continues on the <Link to="/explore/dailypost">Daily Post</Link> (Daily Kos) article where novice
            students were dissuaded by word choice they did not understand, and more expert students recognized
            that word choice used in the article said something about the biased nature of the information therein.
            As Clark A. Chinn and Ronald W. Rinehart (2016) summarize, students often rely on source features to
            determine credibility, without understanding the underlying why these features matter. Instead, those
            that are able to articulate a source’s authoritative and persuasive processes within a given context tend
            to be more expert evaluators (p. 1716).
          </p>
          <h2>In Sum</h2>
          <p>
            We live in confusing times for student evaluators. We lack traditional modes of assessing authority and
            traditional methods of vetting. We live, in short, in an online environment of container collapse: “[t]he
            visual context and cues that print containers provide [that] used to help individuals identify a
            document’s origins and measure its value [are harder to discern] . . .In digital format, a document is
            decanted from its original container and must be carefully examined to determine the journey it took to
            reach the individual” (Connaway, 2018). Students have a hard time finding productive modes and
            methods by which to evaluate online material precisely because online material is increasingly difficult
            to categorize. As the rules of digital citizenry rapidly change, how are instructors rising to the challenge
            of helping students become more thoughtful consumers and producers of information?            
          </p>
        </article>

        <div className="next-page-button"> 
            <label> Next Page: </label>
            <Link to="../implications">Implications</Link>
          </div>
      </section>
  );
}

export default Context;
