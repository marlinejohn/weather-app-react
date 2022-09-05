import React from "react";
import "./styles.css";

export default function Weather() {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="Ckear Sky"
              className="float-left"
            />
            <span className="float-left ">
              <strong>28</strong>
              <span className="units">
                <a href="#" className="active">
                  ºC
                </a>{" "}
                | <a href="#">ºF</a>
              </span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul className="properties ">
            <li>
              Humidity : <span>51</span>%
            </li>
            <li>
              Wind : <span>3</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
