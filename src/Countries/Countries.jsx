import React, { use, useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ allCountries }) => {
  const allCountry = use(allCountries);
  const countries = allCountry.countries;

  const [totalVisited, setTotalVisited] = useState([]);
  const handleTotalVisited = () => {
    const sum = [...totalVisited, countries];
    setTotalVisited(sum);
  };
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <h2>Total Country Visited: {totalVisited.length} </h2>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleTotalVisited={handleTotalVisited}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
