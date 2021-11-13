import React, { FC } from "react";
import { WeatherData } from "../redux/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <section className="section">
      <div className="container">
        <div className="header-city-main">
          <h1 className="header-city">
            {data.name} - {data.sys.country}
          </h1>
          <div>
            <p className="weather-desc">{data.weather[0].description}</p>
            <p className="weather-icon">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="icon"
              />
            </p>
          </div>
        </div>
        <div className="weather-div">
          <div className="temp-div">
            <p className="heading">Temp</p>
            <div className="title">
              <p className="temp">{data.main.temp} K</p>
              <p className="temp-symbol">
                {fahrenheit}
                <sup>&#8457;</sup>{" "}
              </p>
              <p className="temp-symbol">
                {celsius}
                <sup>&#8451;</sup>{" "}
              </p>
            </div>
          </div>

          <div className="weather-div2">
            <div>
              <p className="heading">Humidity</p>
              <p className="title">{data.main.humidity}</p>
            </div>
          </div>
          <div className="weather-div3">
            <div>
              <p className="heading">Pressure</p>
              <p className="title">{data.main.pressure}</p>
            </div>
          </div>
          <div className="weather-div4">
            <div>
              <p className="heading">Wind</p>
              <p className="title">{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
