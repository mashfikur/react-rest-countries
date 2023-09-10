import { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("visited");
    console.log(country);
    const newArray = [...visitedCountries, country];
    setVisitedCountries(newArray);
  };

  return (
    <>
      <h3>Countries : {countries.length} </h3>

      <div>
        <h4>Visited Countries : {visitedCountries.length} </h4>
        <ol>
          {visitedCountries.map((country) => {
            return <li key={country.cca3}> {country.name.common} </li>;
          })}
        </ol>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
