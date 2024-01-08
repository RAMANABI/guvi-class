// console.log("Wake up at early morning");

// console.log("Meditate for 30 minutes");

// setTimeout(() => {
//     console.log("Work For Your Carrer");
// },6000);

function display(txt){
    document.getElementById("Independence").innerText = txt;
}

function callBack(){
    display(10);
    setTimeout(() => {
        display(9);
        setTimeout(() => {
            display(8);
            setTimeout(() => {
                display(7);
                setTimeout(() => {
                    display(6);
                    setTimeout(() => {
                        display(5);
                        setTimeout(() => {
                            display(4);
                            setTimeout(() => {
                                display(3);
                                setTimeout(() => {
                                    display(2);
                                    setTimeout(() => {
                                        display(1);
                                        setTimeout(() => {
                                            display("HAPPY INDEPENDENCE DAY");
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}

callBack();