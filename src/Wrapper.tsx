import classes from "./Wrapper.module.css";

const Wrapper = () => {
  return (
    <div className={classes.sky}>
      <div className={classes.cloud}>
        <p>Some text</p>
      </div>
    </div>
  );
};

export default Wrapper;
