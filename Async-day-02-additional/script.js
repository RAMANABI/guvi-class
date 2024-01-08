//let promiseobj=new Promise((resolve,reject) => {
    //console.log("You are not goot at all Raman,you are just  like dustbin!!!!")
//});


let promiseobj=new Promise((resolve,reject) => {
    //Producer code
    //console.log("Get from DataBase");
    try{
        let a=20;
        let b="Raman";
        const c=a+b;
        c=a+30+b;
        resolve(c);
    }
    catch(error){
            reject("An error occurred",error);
        } 

});
console.log(promiseobj);

promiseobj.then((val) => {
    console.log("The program is resolved",val);
})
promiseobj.catch((error) => {
     console.log("An error is occurred",error);
    
})

//promiseobj.catch(err){
    console.log("error occurred", err);
//}



function getready(){
    console.log("Get to go for Bank");
    return
}

function checkbal(){
    console.log("Check the bal available in your account");
    setTimeout(() => {

    })
}

function print(){
    console.log("Print passbook after check balance");

}
function returnhome(){
    console.log("Return home after your work id finish in bank");
}