import "./Country.css"

const Country = ({country}) => {
  return (
    <div className="country" >
      <h4> Name : {country?.name?.common}  </h4>
      <img src={country?.flags?.png} alt={country?.flags?.alt} />
      <p>Capital : {country?.capital} </p>
      <p>Code : {country?.cca2} </p>
    </div>
  )
}

export default Country