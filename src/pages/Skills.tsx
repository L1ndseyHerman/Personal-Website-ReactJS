import React from "react";
import classes from "./Skills.module.css";
import Wrapper from "../components/Wrapper";

const Skills: React.FC = () => {
  return (
    <Wrapper title="Skills">
      <ul className={classes.ulOuter}>
        <li>Programming Languages:</li>
        <ul className={classes.ulInner}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Java</li>
          <li>Swift</li>
          <li>C#.NET</li>
          <li>MSSQL</li>
          <li>MySQL</li>
          <li>Delphi</li>
        </ul>
        <li>IDEs:</li>
        <ul className={classes.ulInner}>
          <li>VS Code</li>
          <li>Eclipse</li>
          <li>Android Studio</li>
          <li>XCode</li>
          <li>Visual Studio</li>
          <li>Delphi</li>
        </ul>
        <li>Frameworks/Libraries:</li>
        <ul className={classes.ulInner}>
          <li>React JS</li>
          <li>Jest</li>
          <li>FireDAC</li>
        </ul>
        <li>Ways of thinking:</li>
        <ul className={classes.ulInner}>
          <li>Agile Software Development</li>
          <li>Scrum</li>
          <li>Kanban</li>
        </ul>
        <li>Others:</li>
        <ul className={classes.ulInner}>
          <li>GitHub</li>
          <li>AWS Amplify</li>
          <li>Paint.net</li>
        </ul>
      </ul>
    </Wrapper>
  );
};

export default Skills;
