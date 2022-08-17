import Days from "./Days";
import { useWeather } from "../context/WeatherContext";
import Details from "./Details";
import Sidebar from "./Sidebar";
import "../App.css";

function Container() {
  const { city } = useWeather();
  return (
    <div
      className="container px-0 shadow-lg rounded-5 mh-100 mt-5"
      style={{ backgroundColor: "white" }}
    >
      <div className="rounded-5 row g-0">
        <div className="col-lg-3 col-sm-12">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <Days />
          </div>
          <div className="row">
            {!city && (
              <legend className="mt-3 text-center display-5 fw-light text-primary">
                Weather App
              </legend>
            )}

            <Details />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
