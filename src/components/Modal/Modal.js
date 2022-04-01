import React, { useState, useEffect } from "react";
import classes from "./Modal.module.scss";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Modal = (props) => {
  const [dayMeasurements, setDayMeasurements] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [paramSelected, setParamSelected] = useState("so2");
  const [parameters, setParameters] = useState([]);
  const newDate = new Date();
  const updatedDate = newDate
    .toISOString()
    .substring(0, newDate.toISOString().indexOf("T"));
  const [date, setDate] = useState(updatedDate);
  console.log(date);
  const [dateFormat, setDateFormat] = useState("");

  const getDayMeasurements = () => {
    const url = `https://docs.openaq.org/v2/measurements?date_from=${date}T00%3A00%3A00&date_to=${date}T23%3A59%3A59&limit=1000&location_id=${props.id}`;
    //u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?date_from=2022-03-30T00%3A00%3A00&date_to=2022-03-30T23%3A59%3A59&limit=1000&location_id=860
    //u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?date_from=2022-03-30T00%3A00%3A00&date_to=2022-03-30T23%3A59%3A59&location_id=860
    axios.get(url).then((response) => {
      const myDayMeasurements = response.data;
      setDayMeasurements(myDayMeasurements.results);
      const paramSet = [
        ...new Set(myDayMeasurements.results.map((param) => param.parameter)),
      ];
      setParameters(paramSet);
    });
  };
  const getFilteredData = () => {
    const result = dayMeasurements;
    if (parameters.includes(paramSelected)) {
      setFilteredData(
        result.filter((param) => param.parameter === paramSelected)
      );
    }
  };

  useEffect(() => {
    getDayMeasurements();
  }, [date]);
  useEffect(() => {
    getFilteredData();
  }, [paramSelected, date]);
  const clickHandler = (e) => {
    setParamSelected(e.target.innerHTML);
  };
  const dateClickHandler = (e) => {
    setDate(e.target.value);
  };
  const exitModalHandler = () => {
    props.setIsModalOpen(false);
  };
  const getDateFormat = () => {
    let myDate = date;
    console.log(myDate);
    let month = myDate.substring(5, 7);
    let day = myDate.substring(8);
    let year = myDate.substring(0, 4);
    console.log(month, day, year);
    myDate = myDate === "" ? "" : `${props.months[month - 1]} ${day}, ${year}`;

    setDateFormat(myDate);
  };
  useEffect(() => {
    getDateFormat();
  }, [date]);
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <div className={classes.column}>
          <div className={classes.left}>
            <div className={classes.titleInfo}>
              <span> {props.name} </span>
              <span className={classes.titleInfo_date}>{dateFormat}</span>
            </div>
            {filteredData.length === 0 ? (
              <p>Choose a Date to see details</p>
            ) : (
              <div className={classes.graph}>
                <h1>Average {paramSelected.toUpperCase()} Measurements</h1>
                <BarChart width={1000} height={500} data={filteredData}>
                  <XAxis dataKey={date.utc + 1} />
                  <YAxis dataKey="value" label="" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#7ebbf8" label="parameter" />
                </BarChart>
              </div>
            )}
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.filters}>
            <div className={classes.datePicker}>
              <label for="start">Date:</label>

              <input
                type="date"
                // value={date}
                min="2016-01-01"
                onClick={dateClickHandler}
              />
            </div>
            <div className={classes.parameters}>
              <label className={classes.params_label}> Parameters:</label>
              {parameters.length === 0 ? (
                <span className={classes.params_empty}>
                  No Data for this Day!
                </span>
              ) : (
                <div className={classes.params}>
                  {parameters.map((param) => {
                    return (
                      <div>
                        <button
                          className={classes.checkbox}
                          onClick={clickHandler}
                        >
                          {param}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <button className={classes.exit} onClick={exitModalHandler} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
