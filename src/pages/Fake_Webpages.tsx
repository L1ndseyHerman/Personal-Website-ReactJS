import React from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Fake_Webpages.module.css";

const Fake_Webpages: React.FC = () => {
  return (
    <Wrapper title="Fake Webpages">
      <p className={classes.par}>
        So I was going to make some fake webpages, for example, making webpages
        about a fake restaurant using similar CSS styles and content that real
        restaurants use, such as a Menu page, an &quot;about&quot; page, with
        content like &quot;Founded in 1952, this restuarant was voted the best
        restaurant in Cleveland blah blah blah years in a row&quot; or
        something, a store hours/contact page (phone number, address, etc), and
        maybe more pages. But I&apos;m starting a new job soon, so I&apos;m
        going to review C#.NET instead.
      </p>
    </Wrapper>
  );
};

export default Fake_Webpages;
