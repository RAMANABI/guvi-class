import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [country, setCountry] = useState([]);
  const [flag,setFlag] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(res => {
      const countryName = res.data.map(item => item.name.common);
      console.log("countryName:",countryName);
      const countryFlag = (res.data.map(flags => flags.flag));
      console.log("List of Country Flags:", countryFlag);
      setCountry(countryName);
      setFlag(countryFlag);
    
    })
  }, []);


   

  return (
      <div>
        <h1>List Of Countries</h1>
        <ul>
          {country.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      </div>
  )
}

export default App
