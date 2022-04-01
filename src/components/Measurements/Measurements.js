import React, { useState, useEffect } from "react";
import classes from "./Measurements.module.scss";
import { PieChart, Pie } from "recharts";

const Measurements = (props) => {
  return (
    <div className={classes.pie}>
      <PieChart width={350} height={450}>
        <Pie
          data={props.measurements}
          dataKey="average"
          outerRadius={125}
          fill="#1b2837"
          isAnimationActive="true"
          label="average"
          labelLine={true}
        ></Pie>
      </PieChart>
    </div>
  );
};

export default Measurements;
