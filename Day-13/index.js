const allnames=document.querySelectorAll("li");


function clickFunc() { 
    allnames[0].style.color="red";
    allnames[1].textContent="Abinesh@7";
}

function addFunc() {
      allnames.forEach(item => {
        item.setAttribute("class","list");
        item.classList.remove("list");
      })
}

function exitFunc (){
    allnames[0].style.color="black";
    allnames[1].textContent="Name-2";
}

const alllist=document.getElementById("quotes");
alllist.style.color="green";

const p=document.createElement("p");
p.innerText="trust yourself";
//document.body.append(p);
//p.style.color="green";
//p.innerText="welcome to guvi";
//const text=document.createTextNode("Welcome to ZEN class!!!!");
//p.appendChild(text);
//p.style.color="blue";

//document.body.append(p);

const p1=document.createElement("p1");
p1.innerText="Belive in yourself";
//document.body.append(p1);
//p1.style.color="red";
//const text1=document.createTextNode("belive in yourself!!!!!");
//p1.appendChild(text1);
//p1.style.color="green";
//document.body.append(p1);
//p1.innerText="believe in yourself";

const txt=document.getElementById("text");
console.log("InnerText", txt.innerText);
console.log("InnerHTML", txt.innerHTML);
console.log("TextContent", txt.textContent);


