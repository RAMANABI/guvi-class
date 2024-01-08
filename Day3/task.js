var obj1={name:"person1",age:5};
var obj2={age:5,name:"person1"};

if(JSON.stringify(obj1==obj2)){
    console.log("Equal");
}
else{
    console.log("Not Equal");
};
