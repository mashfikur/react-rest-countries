import { useState } from "react"
import "./Country.css"

const Country = ({country,handleVisitedCountry}) => {
  const [visited,setVisited]=useState(false)

  const handleVisit=()=>{
    setVisited(!visited)
  }

  return (
    <div className={`country ${visited && 'visited'} `} >
      <h4> Name : {country?.name?.common}  </h4>
      <img src={country?.flags?.png} alt={country?.flags?.alt} />
      <p>Capital : {country?.capital} </p>
      <p>Code : {country?.cca2} </p>
      <button onClick={()=>handleVisitedCountry(country)} >Mark Visited</button>
      <button onClick={handleVisit} >{visited?" Visited":"Going"}</button>
      <h3> {visited?"I have visited":"I am going to visit"} </h3>
    </div>
  )
}

export default Country