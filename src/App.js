// src/App.js
import "./App.css";
import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from 'react-router-dom';


function App() {
  const [countries, setcountries] = useState()

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => setcountries(data));
    console.log(countries)
  }, []);

  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
          {countries && <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CountriesList countries={countries} />
            <Routes>
              <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>}
          </div>
        </div>
      </div>
      )
}
      export default App;