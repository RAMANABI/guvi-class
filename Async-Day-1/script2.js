let add= (callback) => {
     x=4,
     y=64;
     console.log("sum:", x+y);
     callback();
}
let sub= (callback) => {
    a=75,
    b=65;
    console.log("sub:", b-a);
    callback();
};

let results= () => {
    console.log("Finished this operation");
}

//add(results());
sub(results());


