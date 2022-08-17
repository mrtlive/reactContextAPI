import React from "react";
import { useWeather } from "../context/WeatherContext";
import cities from "../files/city.json";
import weather from "../files/weather.json";
import Moment from "react-moment";
function Sidebar() {
  const { city, setCity, data, dateState } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <div className="container my-5 px-5">
      <div className="row g-0 shadow">
        <div className="form-floating">
          <select
            className="form-select"
            onChange={handleSubmit}
            value={city && city}
            id="floatingSelect"
          >
            <option value="">Choose...</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <label htmlFor="floatingSelect"> Select the City</label>
        </div>
      </div>
      <div className="row g-0">
        {data && (
          <>
            <div className="col">
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  data.list[0].weather[0].icon +
                  "@4x.png"
                }
                alt=""
              />
              <span className="display-1 mb-3">
                {Math.round(data.list[0].main.temp)}&#8451;
              </span>
              <h1 className="fw-light fs-6">
                <Moment format="dddd, HH:mm">{dateState}</Moment>
              </h1>
              <hr />
              <h1 className="fw-light fs-4 mt-2 mb-4">
                {" "}
                {data.list[0].weather[0].description}
              </h1>

              <h1 className="fw-light display-5 mt-3">
                {data.city.name},{weather.city.country}
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
