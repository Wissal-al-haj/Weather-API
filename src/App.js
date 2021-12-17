import React, { Component } from "react";
import clear from "./img/weather-icons/clear.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";


import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wissal"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header className="container-header">
          <div className="container-input">
            <input type="text" >
            </input>
            <button>FIND WEATHER</button>
          </div>
        </header>

        <div className="weather-today">
          <img src={partlycloudy} alt="cloud-img"/>
          <p><span class="overcast">overcast clouds</span></p>
          <p>
          <span className="spacing">Temperature</span> 10&#176; to 11&#176; C
          </p>
          <p className="change-sizing">
            <span>Humidity</span> 78% <span>Pressure</span> 1008.48
          </p>
        </div>

        <div className="week-weather">
          <div>
            <time>03:00</time>
            <img src={partlycloudy} alt="img1"/>
            <p>8 &#176;C</p>
          </div>
          <div>
            <time>06:00</time>
            <img src={clear} alt="img2"/>
            <p>9 &#176;C</p>
          </div>
          <div>
            <time>09:00</time>
            <img src={clear} alt="img3"/>
            <p>14 &#176;C</p>
          </div>
          <div>
            <time>12:00</time>
            <img src={clear} alt="img4"/>
            <p>17 &#176;C</p>
          </div>
          <div>
            <time>15:00</time>
            <img src={clear} alt="img5"/>
            <p>18 &#176;C</p>
          </div>
          <div>
            <time>18:00</time>
            <img src={clear} alt="img6"/>
            <p>16 &#176;C</p>
          </div>
          <div>
            <time>21:00</time>
            <img src={partlycloudy} alt="img7"/>
            <p>13 &#176;C</p>
          </div>
          

        </div>

      
      </div>
    );
  }
}

export default App;
