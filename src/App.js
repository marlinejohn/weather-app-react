import Form from "./Form";
import Overview from "./Overview";
import Weather from "./Weather";
import Forecast from "./Forecast";
// import "./App.css";
import "./styles.css";

export default function App() {
  return (
    <div className="weather-app-container">
      <div className="weather-app-wrapper">
        <Form />
        <Overview />
        <Weather />
        <div className="row">
          <div className="col-2">
            <Forecast
              day="Tue"
              imgUrl="http://openweathermap.org/img/wn/04d@2x.png"
              valueMax="28"
              valueMin="16"
            />
          </div>
          <div className="col-2">
            <Forecast
              day="Wed"
              imgUrl="	http://openweathermap.org/img/wn/02d@2x.png"
              valueMax="33"
              valueMin="20"
            />
          </div>
          <div className="col-2">
            <Forecast
              day="Thu"
              imgUrl="	http://openweathermap.org/img/wn/03d@2x.png"
              valueMax="37"
              valueMin="23"
            />
          </div>
          <div className="col-2">
            <Forecast
              day="Fri"
              imgUrl="	http://openweathermap.org/img/wn/10d@2x.png"
              valueMax="28"
              valueMin="20"
            />
          </div>
          <div className="col-2">
            <Forecast
              day="Sat"
              imgUrl="http://openweathermap.org/img/wn/01d@2x.png"
              valueMax="24"
              valueMin="15"
            />
          </div>
          <div className="col-2">
            <Forecast
              day="Sun"
              imgUrl="http://openweathermap.org/img/wn/03d@2x.png"
              valueMax="27"
              valueMin="14"
            />
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/marlinejohn/Weather-app "
          target="_blank"
          rel="noreferrer"
        >
          open-source code
        </a>{" "}
        by Marline John
      </small>
    </div>
  );
}
