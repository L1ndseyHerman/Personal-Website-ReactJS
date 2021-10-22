import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Hobbies.module.css";
import ironMan from "./IronMan50ish.jpg";

const Hobbies: React.FC = () => {
  const [hobby, setHobby] = useState("");

  const selectChangeHandler: (
    event: React.ChangeEvent<{ value: string }>
  ) => void = (event) => {
    setHobby(event.target.value);
  };

  let hobbyText = null;
  let backgroundImage = classes.blueDiv;
  let hasIronManAnimation = false;

  if (hobby === "music") {
    hobbyText = (
      <>
        <p>
          I am a proud former member of the West Geauga High School Marching
          Band, where I played the flute for all four years of high school. I
          was also in Symphonic Band, where I made it to sixth chair flute out
          of fourty-ish flute players by my senior year. Below are some links to
          marching band performances I was a part of:
        </p>
        <p>
          The most diffucult routine I was a part of:&nbsp;
          <a
            href="https://www.youtube.com/watch?v=BBV_rFQH7lw"
            className={classes.link}
          >
            Video1
          </a>
        </p>
        <p>
          The most fun I ever had in marching band:&nbsp;
          <a
            href="https://www.youtube.com/watch?v=04JEjTd0s2Y"
            className={classes.link}
          >
            Video2
          </a>
        </p>
        <p>
          And one where my face is the thumbnail for some reason:&nbsp;
          <a
            href="https://www.youtube.com/watch?v=BvpN3VJOfPo"
            className={classes.link}
          >
            Video3
          </a>
        </p>
      </>
    );
    backgroundImage = classes.musicDiv;
  } else if (hobby === "creativeWriting") {
    hobbyText = (
      <p>
        I enjoy reading and writing science fiction and fantasy stories. I was
        also a part of Lakeland&apos;s student newspaper for one semester.
        During that time, I published five articles in <u>The Lakelander</u>,
        and one made the front page.
      </p>
    );
    hasIronManAnimation = true;
  } else if (hobby === "nature") {
    hobbyText = (
      <p>
        I enjoy getting outside and jogging, as well as going for walks in
        parks. I also like spending time with animals, whether by observing
        wildlife, or by cuddling up with my family&apos;s two adorable cats.
      </p>
    );
    backgroundImage = classes.natureDiv;
  } else if (hobby === "videoGames") {
    hobbyText = (
      <p>
        I enjoy playing and coding videogames. If you have an Android phone or
        tablet, check out my Super Mario-inspired videogame, &quot;Bob Go&quot;!
      </p>
    );
    backgroundImage = classes.videogameDiv;
  }

  return (
    <div>
      <Wrapper title="Hobbies">
        <select
          id="hobbyChoices"
          className={classes.select}
          onChange={(event: React.ChangeEvent<{ value: string }>) =>
            selectChangeHandler(event)
          }
        >
          <option value="">Hobbies:</option>
          <option value="music">Music</option>
          <option value="creativeWriting">Creative Writing</option>
          <option value="nature">Nature</option>
          <option value="videoGames">Video Games</option>
        </select>
        <div className={`${classes.blueDiv} ${backgroundImage}`}>
          {hasIronManAnimation && (
            <img
              src={ironMan}
              className={classes.ironMan}
              alt="A Flying Iron Man"
            />
          )}
          <div className={classes.infoDiv}>{hobbyText}</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hobbies;
