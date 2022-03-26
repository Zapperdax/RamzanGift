let myTime = new Date();
let myHours = myTime.getHours();
let myDays = myTime.getDate() - 3;
console.log(myDays);
console.log(myHours);
let darkBody = document.querySelector("body");
let darkh1 = document.querySelector(".box .faq h1");
let darkBox = document.querySelector(".box");
let darkAcc = document.querySelectorAll(".accordion-button");
let darkBorder = document.querySelectorAll(".accordion-item");
let darkAccBody = document.querySelectorAll(".accordion-body");
let darkFirst = document.querySelector("#first");
let darkSecond = document.querySelector("#second");
let darkThird = document.querySelector("#third");
let darkp1 = document.querySelector("#firstp");
let darkp2 = document.querySelector(".imgsize");
let darkp3 = document.querySelector("#thirdp");
let format = "th";
    if(myDays == 1 || myDays == 21){
        format = "st";
    }
    else if(myDays == 2 || myDays == 22){
        format = "nd";
    }
    else if(myDays == 3 || myDays == 23){
        format = "rd";
    }

        //change image here
darkp2.innerHTML = "<img src='images/1.jpg'>"
darkp3.innerHTML = "";
if(myHours >= 0 && myHours <= 17){
    darkh1.innerHTML = "Happy " + myDays + format + " Sehri";
    darkp1.innerHTML = "Aw❤️, You Made It To " + myDays + format + " Roza 🌺 🌹 🌟";
}

if(myHours >= 18 && myHours <= 24){
    darkBody.style.backgroundColor = "#292929";
    darkh1.style.color = "#ffffff";
    darkh1.innerHTML = "Happy " + myDays + format + " Aftaari";
    darkBox.style.backgroundColor = "#121212";
    for(let i = 0 ; i< 3 ; i++){
        darkAcc[i].style.backgroundColor = "#1D1D1D";
        darkBorder[i].style.borderBottom = "1px solid #606368";
        darkAccBody[i].style.backgroundColor = "#3C4042";
        darkAccBody[i].style.color = "#F1F0F3";
    }
    darkp1.style.color = "#F1F0F3"
    darkp1.innerHTML = "Aw❤️, You Made It To " + myDays + format + " Roza 🌟 🌹 🌺";
    darkp3.innerHTML = "";
    darkFirst.style.color = "#CACACA";
    darkSecond.style.color = "#CACACA";
    darkThird.style.color = "#CACACA";
}