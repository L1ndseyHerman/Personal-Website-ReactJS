import React from "react";
import Wrapper from "../components/Wrapper";
import OneJSSkillGame from "../components/OneJSSkillGame";

const JS_Skills: React.FC = () => {
  return (
    <div>
      <Wrapper title="JS Skills">
        <OneJSSkillGame />
        <OneJSSkillGame />
        <OneJSSkillGame />
        <OneJSSkillGame />
      </Wrapper>
    </div>
  );
};

export default JS_Skills;
