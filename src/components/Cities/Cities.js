import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Cities.module.scss";
import City from "./City/City";

const Cities = (props) => {
  const [cityData, setCityData] = useState([]);
  const cityURL = `https://docs.openaq.org/v2/locations?city=${props.userInput}&order_by=lastUpdated`;
  const getCity = () => {
    axios.get(cityURL).then((response) => {
      const myCityData = response.data;
      setCityData(myCityData.results);
    });
  };

  useEffect(() => {
    getCity();
  }, [props.userInput]);

  return (
    <ul className={classes.cards}>
      {cityData.map((city) => {
        return <City city={city} />;
      })}
    </ul>
  );
};

export default Cities;
