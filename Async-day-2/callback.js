function getDressed(callback) {
    console.log("get dressed by jeans and t-shirt");
    setTimeout(() => {
    callback();
    }, 1000);
}

function eatBreakfast(callback) {
    console.log("ate idli for breakfast");
    setTimeout(()=> {
     callback();
    }, 2000);
}

function goOut(){
    console.log("go out with your friend to theatre ")
};



//getDressed(() => {
  //  eatBreakfast(() => {
    //    goOut();
    //});
//});


async function startday(){
    try{
    await getDressed();
    await eatBreakfast();
    goOut();
    }
    catch(err){
        console.log("An error occurred:", err);
    }
}
startday();