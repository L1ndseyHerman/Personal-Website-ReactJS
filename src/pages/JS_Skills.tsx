import React from "react";
import Wrapper from "../components/Wrapper";
import OneJSSkillGameWrapper from "../components/OneJSSkillGameWrapper";
import RandomSentenceGenerator from "../components/RandomSentenceGenerator";
import CrypticCode from "../components/CrypticCode";
import Wheel_lessFortune from "../components/Wheel_lessFortune";
import Cat_Dog from "../components/Cat_Dog";
import classes from "./JS_Skills.module.css";

const JS_Skills: React.FC = () => {
  return (
    <Wrapper title="JS Skills">
      <p className={classes.par}>
        Unlike the first six pages on this website (Home-Contact), I came up
        with the idea for this page in Spring 2020 after graduating from John
        Carroll. I had been learning more about JavaScript on&nbsp;
        <a
          href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
          className={classes.link}
        >
          freecodecamp.org
        </a>
        &nbsp;and wanted to show off my newly-aquired knowledge. These games
        involve some basic JavaScript features.
      </p>
      <OneJSSkillGameWrapper>
        <RandomSentenceGenerator />
      </OneJSSkillGameWrapper>
      <OneJSSkillGameWrapper>
        <CrypticCode />
      </OneJSSkillGameWrapper>
      <OneJSSkillGameWrapper>
        <Wheel_lessFortune />
      </OneJSSkillGameWrapper>
      <OneJSSkillGameWrapper>
        <Cat_Dog />
      </OneJSSkillGameWrapper>
    </Wrapper>
  );
};

export default JS_Skills;
