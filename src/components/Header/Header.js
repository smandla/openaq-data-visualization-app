import React from "react";
import classes from "./Header.module.scss";
const Header = (props) => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          AIR QUALITY IN {props.city ? `${props.city.toUpperCase()},` : ""}{" "}
          INDIA
        </h1>
        <form className={classes.search} onSubmit={props.onSubmitHandler}>
          <label className={classes.search_label} for="search_bar"></label>
          <input
            className={classes.search_bar}
            type="search"
            placeholder="Search..."
            list="text_editors"
            onChange={props.onInputHandler}
          />

          <datalist id="text_editors">
            <select multiple size="8">
              {props.citiesArr.map((a) => {
                return <option value={a}>{a}</option>;
              })}
            </select>
          </datalist>
          <button className={classes.btn}>j </button>
        </form>
      </header>
    </div>
  );
};

export default Header;
