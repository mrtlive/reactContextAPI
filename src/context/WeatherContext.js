import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const getWeather = async () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=301d4e756d3dc4d13de0fd87247f8fe1&units=metric`
      )
      .then((response) => {
        const weat = response.data;
        setData(weat);
      });
  };

  const value = {
    days,
    city,
    setCity,
    getWeather,
    data,
    dateState,
    setDateState,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
