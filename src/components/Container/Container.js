import React from "react";
import Cities from "../Cities/Cities";
import classes from "./Container.module.scss";
const Container = (props) => {
  return (
    <>
      {props.cityInput === "" ? (
        <p className={classes.empty}>Please Enter a City to Continue!</p>
      ) : (
        <>
          <div className={classes.filters}>
            <h1>Location Type Filter:</h1>
            <div className={classes.filter}>
              <button>Government</button>
              <button>Research</button>
            </div>
          </div>
          <Cities userInput={props.cityInput} />
        </>
      )}
    </>
  );
};

export default Container;
