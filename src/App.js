import MainPage from "./container/MainPage";
import LandingPage from "./container/LandingPage";
import backPhoto from "./assets/img/blur-wallpapers.jpg";
import "@fontsource/montserrat";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backPhoto})` }} >
      <LandingPage />
      <MainPage />
    </div>
  );
}

export default App;
