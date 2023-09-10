import { useEffect, useState } from "react";
import Country from "../country/Country";

const Countries = () => {

    const [countries,setCountries]=useState([])

    useEffect(()=>{
      fetch("https://restcountries.com/v3.1/all")
      .then(res=>res.json())
      .then(data=>setCountries(data))
    },[])

  return (
    <div>
        <h3>Countries : {countries.length} </h3>
        <h3 >Countries only showing : {countries.slice(0,10).length} </h3>

        {
          countries.slice(0,10).map(country=><Country key={country.cca3} country={country} ></Country>)
        }

    </div>
  )
}

export default Countries;