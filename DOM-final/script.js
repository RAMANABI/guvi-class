document.getElementById("change").addEventListener("mouseover",function(){
    this.style.color= "blue";
});
document.getElementById("change").addEventListener("mouseout", function(){
    this.style.color= "black";
});


//let name=prompt("Please enter your name");
//document.getElementById("display").innerText=name;

document.querySelector("h1").addEventListener("click", function (event){
    let coordinates="x: " + event.clientX + " y:" +event.clientY;
    document.getElementById("mc").textContent=coordinates;
});   

document.getElementById("txt").addEventListener("input" , function() {
    let count=this.areaValueMax.trim().length;
    document.getElementById("count").innerText="count";
});

document.getElementById("enter").addEventListener("click", function () {
    if (document.documentElement.requestFullscreen){
        document.documentElement.requestFullscreen();
    }
});

document.getElementById("exit").addEventListener("click", function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
});

