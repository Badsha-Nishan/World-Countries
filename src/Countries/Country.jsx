import React from 'react';
import "./Country.css"

const Country = ({country}) => {
    return (
        <div className="country-card">
            <img src={country.flags.flags.png} alt="" />
            <h3>Country Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area < 300000 ? "Small Country" : "Big Country"}</p>
            <button>Not Visited</button>
            <button>Add Visited Flag</button>
        </div>
    );
};

export default Country;