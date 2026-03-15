import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleTotalVisited }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    const clicked = !visited;
    setVisited(clicked);
    handleTotalVisited(country)
  };
  
  return (
    <div className="country-card">
      <img src={country.flags.flags.png} alt="" />
      <h3>Country Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area < 300000 ? "(Small Country)" : "(Big Country)"}
      </p>
      <button className={visited ? "visited-btn" : ""} onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button>Add Visited Flag</button>
    </div>
  );
};

export default Country;
