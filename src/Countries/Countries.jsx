import React, { use } from "react";
import Country from "./Country";
import "./Countries.css"

const Countries = ({ allCountries }) => {
  const allCountry = use(allCountries);
  const countries = allCountry.countries;
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <div className="countries-container">
      {
        countries.map(country => <Country key={country.cca3.cca3} country = {country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;
