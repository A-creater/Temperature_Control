import React, { useState, Component } from "react";

import './App.css';





function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const increaseTemperature = () => {
    const newTemperatureValue = temperatureValue + 1;
    setTemperatureValue(newTemperatureValue);
    if (newTemperatureValue >= 15) {
      setTemperatureColor('hot');
    }


  }

  const decreaseTemperature = () => {
    const newTemperatureValue = temperatureValue - 1;
    setTemperatureValue(newTemperatureValue);
    if (newTemperatureValue < 15) {
      setTemperatureColor('cold');
    }
  }




  return (
    <div className="app-container">
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`} >{temperatureValue}*C</div>
      </div>
      <div className='button-container'>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
      <div></div>
    </div>
  );
}




export default App;
