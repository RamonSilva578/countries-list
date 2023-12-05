import { useEffect, useState } from 'react'
import './App.css'
import  axios  from 'axios'

function App(){
  const [countriesList, setCountriesList] = useState([])
 useEffect(() => {
  axios.get("https://restcountries.com/v3.1/all").then((response) =>{
     setCountriesList(response.data);
  }); 
 }, []);
  return (
    <>
 {countriesList.map((country) => (
  <div key={country.name.common}>
   <h1>{country.name.common}</h1>
   <img src={country.flags.png} />
  </div>
 )
 
 )}
    </>  
  );
 }

export default App;
