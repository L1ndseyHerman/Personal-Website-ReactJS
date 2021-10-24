import React from "react";
import classes from "./Home.module.css";

import Wrapper from "../components/Wrapper";

const Home: React.FC = () => {
  return (
    <Wrapper title="Home">
      <p className={classes.par}>
        Hi, welcome to my personal website! This website was originally an
        assignment for a class where I had to use HTML5, CSS3, and Vanilla
        JavaScript (JavaScript without any frameworks like React JS) to create a
        basic website with certain features, such as at least 4 webpages, 1
        table, 1 unordered list, 2 selectors (radio-buttons, drop-down list,
        etc.), 2 animations, 2 external links, and possibly other requirements.
        I later added a &quot;Fun With JavaScript&quot; page after spending more
        time learning JavaScript on&nbsp;
        <a
          href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
          className={classes.link}
        >
          freecodecamp.org
        </a>
        . Since I just finished an online React JS course on&nbsp;
        <a
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
          className={classes.link}
        >
          udemy.com
        </a>
        , I decided to redo this website in React JS with better CSS as well. My
        old website can be found here:&nbsp;
        <a
          href="https://github.com/L1ndseyHerman/Website-Updates"
          className={classes.link}
        >
          github.com
        </a>
        . Also, check out my basic React JS videogame that is a PWA and hosted
        on AWS Amplify:&nbsp;
        <a href="https://www.shield-magic-sword.app/" className={classes.link}>
          shield-magic-sword.app
        </a>
        .
      </p>
      <p className={classes.updatedPar}>Last updated: 10/24/21</p>
    </Wrapper>
  );
};

export default Home;
