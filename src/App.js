import React from 'react';
import logo from './logo.svg';
import './App.css';

function FunctionalCounter() {
  const [value, setValue] = React.useState(0);
  return (<div>
    <span>გაიგე რამდენად ყლე ხარ: {value}  </span>
    <button style={{backgroundColor:'black', color:'white', height:30}} onClick={() => setValue(oldValue => oldValue + 1)}>დააჭირე</button>
  </div>);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Resto
        </p>
        <a
          className="App-link"
          href="/#"
          rel="noopener noreferrer"
        >
          Resto.ge © 2019
        </a>
        <br />
        <FunctionalCounter />
      </header>
    </div>
  );
}

export default App;
