import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total: " + contar);
  }, [contar]);

  const onoff = () => {
    //console.log("Encender/Apagar");
    //setStateCar(!stateCar);
    setStateCar((prevalue) => !prevalue);
    setContar(contar + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche está: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Cantidad de Clicks: {contar}</h4>
        <button onClick={onoff}>Encender/Apagar</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
