import classes from "./App.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
  const [userInput, setUserInput] = useState("");
  const [city, setCity] = useState("");
  const [citiesArr, setCitiesArr] = useState([]);
  const COUNTRY = "IN";

  const url = ` https://docs.openaq.org/v2/cities?limit=10000&sort=asc&country_id=${COUNTRY}&order_by=city`;

  const getData = () => {
    axios.get(url).then((response) => {
      const myData = response.data;
      setCitiesArr(myData.results.map((a) => a.city));
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (citiesArr.includes(userInput)) {
      setCity(userInput);
    }
    setUserInput("");
  };

  return (
    <>
      <Header
        city={city}
        onSubmitHandler={submitHandler}
        onInputHandler={inputHandler}
        citiesArr={citiesArr}
      />
      <Container cityInput={city} citiesArr={citiesArr} />
      <div className={classes.footer}></div>
    </>
  );
}

export default App;
