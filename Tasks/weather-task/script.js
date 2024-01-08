//16c968b71a5e1bc984fde7eaa921bd07 = weather api key


document.getElementById("weatherInfo-1").addEventListener('click', () => {
   const country = "Afghanistan";
   const api = "16c968b71a5e1bc984fde7eaa921bd07";
   
     fetch (`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
        const capital = data[0].capital[0];
        return fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
        );
    })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "detail-1"
      ).innerHTML =`Weather in ${data.name}: ${data.weather[0].main}, Temp: ${data.main.temp}`;
    })
    .catch((err) => {
        console.log("An error Occured:", err);
    });
})


document.getElementById("weatherInfo-2").addEventListener('click', () => {
    const country = "Åland Islands";
    const api = "16c968b71a5e1bc984fde7eaa921bd07";
    
      fetch (`https://restcountries.com/v3.1/name/${country}`)
     .then((response) => response.json())
     .then((data) => {
         const capital = data[0].capital[0];
         return fetch(
             `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
         );
     })
     .then((response) => response.json())
     .then((data) => {
       document.getElementById(
         "detail-2"
       ).innerHTML =`Weather in ${data.name}: ${data.weather[0].main}, Temp: ${data.main.temp}`;
     })
     .catch((err) => {
         console.log("An error Occured:", err);
     });
 })

 
document.getElementById("weatherInfo-3").addEventListener('click', () => {
    const country = "Albania";
    const api = "16c968b71a5e1bc984fde7eaa921bd07";
    
      fetch (`https://restcountries.com/v3.1/name/${country}`)
     .then((response) => response.json())
     .then((data) => {
         const capital = data[0].capital[0];
         return fetch(
             `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
         );
     })
     .then((response) => response.json())
     .then((data) => {
       document.getElementById(
         "detail-3"
       ).innerHTML =`Weather in ${data.name}: ${data.weather[0].main}, Temp: ${data.main.temp}`;
     })
     .catch((err) => {
         console.log("An error Occured:", err);
     });
 })
