async function fetchdata(){
    let response=await fetch("https://restcountries.com/v3.1/name/France");
    let data= await response.json();
    let capital= data[0].capital[0];
    console.log("France Capital:", capital);

}

fetchdata();

function timeoutPromise(message,interval) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, interval)
    })
};


let Promise1= timeoutPromise("1st promise resolved",1000);
let Promise2= timeoutPromise("2nd promise resolved",2000);
let Promise3= timeoutPromise("3rd promise resolved",3000);


Promise.all([Promise1,Promise2,Promise3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error("A promise failed to resolve", error);
    })



