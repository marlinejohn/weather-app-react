import React from "react";

import "./styles.css";

export default function Forecast(props) {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-day">{props.day}</div>
          <img src={props.imgUrl} width="40" alt="" />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-max">{props.valueMax}º</span>
            <span className="weather-forecast-min">/{props.valueMin}º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
