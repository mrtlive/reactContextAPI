import { useWeather } from "../context/WeatherContext";
import { useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";

function Days() {
  const { city, getWeather, data } = useWeather();

  useEffect(() => {
    city !== "" && getWeather();
  }, [city]);

  return (
    <div className="col container mt-5 px-5">
      <div className="row justify-content-center">
        {data &&
          data.list.map((item) => {
            if (item.dt_txt.endsWith("15:00:00")) {
              return (
                <div
                  className="rounded-3 text-dark mx-2 py-3 mt-2 shadow-sm text-center border"
                  style={{
                    backgroundColor: "white",
                    width: "150px",
                    height: "190px",
                  }}
                  key={item.dt}
                >
                  <span className="fw-light" style={{ fontSize: "17px" }}>
                    <Moment format="dddd">{item.dt_txt}</Moment>
                  </span>
                  <br />

                  <img
                    src={
                      "https://openweathermap.org/img/wn/" +
                      item.weather[0].icon +
                      "@2x.png"
                    }
                    alt=""
                  />
                  <br />
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: "bold",
                      color: "#39adef",
                    }}
                  >
                    {Math.round(item.main.temp_max)}&#8451;
                  </span>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
}

export default Days;
