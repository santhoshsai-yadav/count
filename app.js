
let count = document.querySelector("#values");
let increm = document.querySelector("#incre");
let decrem = document.querySelector("#decre");

let k = 0;
increm.addEventListener("click",()=> {
    k = k + 1;
    count.textContent = k;
});

decrem.addEventListener("click",()=> {
    k = k - 1;
    count.textContent = k;
});


function clera(){
    document.querySelector("#values").textContent='';
}