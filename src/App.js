import "./App.css";
import Container from "./component/Container";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </div>
  );
}

export default App;
