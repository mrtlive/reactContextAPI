import React from "react";
import { useWeather } from "../context/WeatherContext";
import moment from "moment";

function Details() {
  const { data, dateState } = useWeather();

  return (
    <div className="container px-3 my-5">
      {data && (
        <>
          <div className="row justify-content-center">
            <div
              className="col-5 text-center shadow-sm mx-3 p-2 rounded-5"
              style={{ height: "200px", backgroundColor: "whitesmoke" }}
            >
              <legend className="text-primary fw-bold mt-5">Humidty</legend>
              {data &&
                data.list.map((item, key) => {
                  if (
                    item.dt_txt.includes(moment(dateState).format("YYYY-MM-DD"))
                  ) {
                    return (
                      <h1 key={key} className="text-primary fw-bold">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
                          style={{ width: "10%", height: "10%" }}
                          className="mb-2"
                          alt=""
                        />{" "}
                        {item.main.humidity}
                      </h1>
                    );
                  }
                  return null;
                })}
            </div>
            <div
              className="col-5 text-center shadow-sm mx-3 p-2 rounded-5"
              style={{ height: "200px", backgroundColor: "whitesmoke" }}
            >
              <legend className="text-primary fw-bold mt-5">Wind Speed</legend>
              {data &&
                data.list.map((item, key) => {
                  if (
                    item.dt_txt.includes(moment(dateState).format("YYYY-MM-DD"))
                  ) {
                    return (
                      <h1 key={key} className="text-primary fw-bold">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2204/2204367.png"
                          style={{ width: "10%", height: "10%" }}
                          className="mb-2"
                          alt=""
                        />{" "}
                        {item.wind.speed}
                        <span style={{ fontSize: "14px", marginRight: "10px" }}>
                          {"km/h"}
                        </span>
                      </h1>
                    );
                  }
                  return null;
                })}
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div
              className="col-10 text-center shadow-sm mx-3 p-2 rounded-5"
              style={{ height: "200px", backgroundColor: "whitesmoke" }}
            >
              <legend className="text-primary fw-bold mt-5">Feels Like</legend>
              {data &&
                data.list.map((item, key) => {
                  if (
                    item.dt_txt.includes(moment(dateState).format("YYYY-MM-DD"))
                  ) {
                    return (
                      <h1 key={key} className="text-primary fw-bold">
                        <img
                          src="https://cdn-icons.flaticon.com/png/512/3222/premium/3222801.png?token=exp=1660768040~hmac=07708188fe12ea7606454c9332dabf5c"
                          style={{ width: "7%", height: "7%" }}
                          className="mb-3"
                          alt=""
                        />{" "}
                        {Math.round(item.main.feels_like)}&#8451;
                        <span
                          style={{ fontSize: "14px", marginRight: "10px" }}
                        ></span>
                      </h1>
                    );
                  }
                  return null;
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
