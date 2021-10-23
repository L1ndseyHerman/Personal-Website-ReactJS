import React from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Education.module.css";

const Education: React.FC = () => {
  return (
    <Wrapper title="Education">
      <table className={classes.table}>
        <tr>
          <th>School Name:</th>
          <th>Attended:</th>
          <th>Major:</th>
          <th>Degree Earned:</th>
          <th>Honors:</th>
        </tr>
        <tr>
          <td className={classes.td}>John Carroll University</td>
          <td className={classes.td}>
            August 2017-January 2020 (5 semesters), Full-Time
          </td>
          <td className={classes.td}>
            Computer Science; Minor: Creative Writing
          </td>
          <td className={classes.td}>
            Bachelor of Science earned January 15th, 2020
          </td>
          <td className={classes.td}>
            Dean&apos;s List 5 consecuitive semesters, 3.8 GPA
          </td>
        </tr>
        <tr>
          <td className={classes.td}>Lakeland Community College</td>
          <td className={classes.td}>Fall 2013-Spring 2017, Part-Time</td>
          <td className={classes.td}>
            Undecided at first, took core classes part-time while working close
            to full-time.
          </td>
          <td className={classes.td}>Associate of Arts</td>
          <td className={classes.td}>
            Dean&apos;s List, Member of Phi Theta Kappa
          </td>
        </tr>
        <tr>
          <td className={classes.td}>West Geauga High School</td>
          <td className={classes.td}>Fall 2009-Spring 2013, Full-Time</td>
          <td className={classes.td}>
            Majorly enthusiastic about marching band (WGMB!)
          </td>
          <td className={classes.td}>Graduated with Honors</td>
          <td className={classes.td}>Honors Diploma</td>
        </tr>
      </table>
    </Wrapper>
  );
};

export default Education;
