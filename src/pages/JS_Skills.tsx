import React from "react";
import Wrapper from "../components/Wrapper";
import OneJSSkillGameWrapper from "../components/OneJSSkillGameWrapper";
import RandomSentenceGenerator from "../components/RandomSentenceGenerator";
import CrypticCode from "../components/CrypticCode";
import Wheel_lessFortune from "../components/Wheel_lessFortune";
import Cat_Dog from "../components/Cat_Dog";

const JS_Skills: React.FC = () => {
  return (
    <Wrapper title="JS Skills">
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
