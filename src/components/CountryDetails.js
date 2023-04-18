import React from 'react'
import  { useState , useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';


const CountryDetails = ({countries}) => {


    let { alpha3Code } = useParams();
    const [country , setcountry] = useState();
    const [countryData , setcountryData] = useState({});

    useEffect(() => {
        setcountryData(countries.find((country) => alpha3Code === country.alpha3Code));
      }, [countries, alpha3Code, countryData]);

      useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
          .then((response) => response.json())
          .then((data) => {
            setcountry(data)
            setcountryData(true)
        });
        console.log(country)
      }, []);

      return (
        <>
          {countryData ? (
            <div className="col-7">
              {countryData.name && countryData.name.official ? (
                <h1>{countryData.name.official}</h1>
              ) : (
                <></>
              )}
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: '30%' }}>Capital</td>
                    {countryData.capital ? <td>{countryData.capital}</td> : <></>}
                  </tr>
                  <tr>
                    <td>Area</td>
                    {countryData.area ? (
                      <td>
                        {countryData.area} km
                        <sup>2</sup>
                      </td>
                    ) : (
                      <></>
                    )}
                  </tr>
                  <tr>
                    <td>Borders</td>
                    {countryData.borders && countryData.borders.length > 0 ? (
                      <td>
                        <ul className="list-group">
                          {countryData.borders.map((border) => {
                            return (
                              <li className="list-group-item list-group-item-action">
                                <a href={`/${border}`}>{border}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </td>
                    ) : (
                      <>None</>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p>Loading ...</p>
          )}
        </>
      );
    };
    
    export default CountryDetails;