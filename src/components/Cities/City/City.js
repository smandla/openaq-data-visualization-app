import React, { useState, useEffect } from "react";
import classes from "./City.module.scss";
import govIcon from "../../../icons/icons8-us-capitol-24.png";
import Measurements from "../../Measurements/Measurements";
import Modal from "../../Modal/Modal";
const City = (props) => {
  const [flip, setFlip] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [date, setDate] = useState("");
  // const cityURL = `https://docs.openaq.org/v2/locations?country_id=IN&city=Chennai&order_by=lastUpdated`;
  const cityurl = `https://docs.openaq.org/v2/measurements?sort=asc&country_id=IN&location_id=${props.city.id}&order_by=datetime
  `;

  const cardClickHandler = () => {
    setFlip(!flip);
  };

  const showModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  const setDateFormat = () => {
    let myDate = props.city.lastUpdated.substring(
      0,
      props.city.lastUpdated.indexOf("T")
    );
    let month = myDate.substring(5, 7);
    let day = myDate.substring(8);
    let year = myDate.substring(0, 4);
    myDate = `${months[month - 1]} ${day}, ${year}`;
    console.log(myDate);
    setDate(myDate);
  };
  useEffect(() => {
    setDateFormat();
  }, [props.city.lastUpdated]);
  console.log(date);
  return (
    <>
      {isModalOpen ? (
        <Modal
          id={props.city.id}
          setIsModalOpen={setIsModalOpen}
          name={props.city.name}
          months={months}
        />
      ) : (
        ""
      )}

      <li>
        <div className={classes.carddetail}>
          <input type="checkbox" id={props.city.id} />
          <label className={classes.card} htmlFor={props.city.id}>
            <div className={classes.front}>
              <div className={classes.card_info}>
                <span>{props.city.name}</span>
                <h4>{date}</h4>
              </div>

              <div className={classes.images}>
                <h3 className={classes.tooltip}>
                  <img src={govIcon} />
                  <span className={classes.tooltiptext}>
                    {props.city.entity}
                  </span>
                </h3>
                <img
                  className={classes.image}
                  src="https://www.transparentpng.com/thumb/hindu-flag/india-flag-png-1.png"
                  alt=""
                ></img>
              </div>
            </div>
            <div className={classes.overlay}>
              <div className={classes.row}>
                <h2>Average Measurements</h2>
              </div>

              <div className={classes.row}>
                <Measurements measurements={props.city.parameters} />
              </div>
              <div className={classes.row}>
                <h2 className={classes.date}></h2>
                <div className={classes.button}>
                  <button onClick={showModalHandler}>More...</button>
                </div>
              </div>
            </div>
          </label>
        </div>
      </li>
    </>
  );
};

export default City;
