const taskinput=document.getElementById("taskinput");
const addtask=document.getElementById("addtask");
const tasklist=document.getElementById("tasklist");



addtask.addEventListener('click', function () {
    const taskvalue=taskinput.value.trim();
    loadtaskfromlocalstorage();







    if(taskvalue.length) {
         const li=document.createElement("li");
         const checkbox=document.createElement("input");
         const deletebtn=document.createElement("Button");
         const txtNode=document.createTextNode(`${taskvalue}`);

         li.appendChild(checkbox);
         li.appendChild(txtNode);
         li.appendChild(deletebtn);
        deletebtn.addEventListener("click",function(){
            tasklist.removeChild(li);
         })


         function savetasktolocalstorage(){
            debugger;
            const task=Array.from(tasklist.children).map((li) => {
               const textelement=li.querySelector("input[type='checkbox']").nextsibling;
               return {
                   text: textelement.textcontent,
                   completed: li.querySelector("input[type='checkbox']").checked,
               };
            });
            localStorage.setItem("tasks",JSON.stringify(task));
        }

        function loadtaskfromlocalstorage(){
            const savedtask=JSON.parse(localStorage.getItem([task])) || [];
            for (const task of savedtask){
                createtaskelement(task);
            }
        }
        

         checkbox.addEventListener("change",function(){
            if(this.checked){
                li.classList.add("Completed");
            }else{
                li.classList.remove("Completed");
            }
         })

         checkbox.type="checkbox";
         deletebtn.innerText="Delete";

         tasklist.append(li);
        
         //saveTOsessionStorage("task",taskinput.value);
         //const task= getFromsessionStorage("task");
         //console.log("$$$$$$$$$$$$$",task);


         savetasktolocalstorage();

         taskinput.value="";

         

         //const url="https://www.zenclass.in/class";
         //opennewwindow(url);
         
         //alert(ismobilewidth());
         //alert(getcurrenturl());
         //scrolltotop();
         





         //function saveTOsessionStorage(key,value){
            //sessionStorage.setItem(key,JSON.stringify(value));
            //setTimeout ( () => { 
              //  console.log("Data saved to local storage");
            //} ,4000);
        
            //setInterval ( () => {
            //    console.log("Data saved to local storage");
          //  }, 4000);//
         
        //}

         //function getFromsessionStorage(key){
           // return sessionStorage.getItem(key);
         //};

        //function getcurrenturl(){
           // return window.location.href;
        //};

        //function seturl (url){
           // window.location.href=url;
        //}

        //function opennewwindow(url) {
           // window.open(url);
        //}

        //function ismobilewidth(){
          //  return window.innerWidth >= 768;

        //};

        //function scrolltotop(){
           // window.scrollTo(0,0);
        //};
        
         //alert("Task addes successfully");
         //let a=prompt("How old are you?");
         //alert(`You are ${age} years old!!`);
         //let isInstructor=confirm("Are you instructor");
         //alert(isInstructor);


        
        
        
        
}
});

