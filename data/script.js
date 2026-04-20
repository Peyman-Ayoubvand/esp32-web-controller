// button styling
const allButtons = document.querySelectorAll(".buttons button");

allButtons.forEach(function(button){
    button.addEventListener("click",function(){
        const parent = this.closest(".buttons");
        const groupButtons = parent.querySelectorAll("button");

        groupButtons.forEach(function(btn){
            btn.classList.remove("active");

        });
        this.classList.add("active");
    });
});


//  range styling
const ranges = document.querySelectorAll(".ranges input[type=range]");
ranges.forEach(function(range){
    range.addEventListener("input", function(){
        const parent = this.closest(".leds");
        const targetRange = parent.querySelector(".real-value");
        targetRange.textContent= this.value  + " %";
        const buttons =  parent.querySelectorAll(".buttons button");
        buttons.forEach(function(btn){
             btn.classList.remove("active");
        });


        let ledNumber;

        if (this.id === "red-range"){
            ledNumber = 1;
        }else if (this.id === "blue-range"){
            ledNumber = 2;
        }else if (this.id === "white-range"){
            ledNumber = 3;
        }

        fetch("/brightness?led="+ledNumber+"&value="+ this.value);
    });
});

//connect UI to API
//On Buttons
const onRedBUtton= document.getElementById("Turn-On-Red-LED");
onRedBUtton.addEventListener("click", function(){
    fetch("/on?led=1");
    const parent = this.closest(".leds");
    const syncRange = parent.querySelector(".ranges input[type=range]");
    syncRange.value = 100;
    const syncNumber = parent.querySelector("p");
    syncNumber.textContent = 100 +" %";
});

const onBlueBUtton= document.getElementById("Turn-On-Blue-LED");
onBlueBUtton.addEventListener("click", function(){
    fetch("/on?led=2");
    const parent = this.closest(".leds");
    const syncRange = parent.querySelector(".ranges input[type=range]");
    syncRange.value = 100;
    const syncNumber = parent.querySelector("p");
    syncNumber.textContent = 100 +" %";

});
const onWhiteBUtton= document.getElementById("Turn-On-White-LED");
onWhiteBUtton.addEventListener("click", function(){
    fetch("/on?led=3");
    const parent = this.closest(".leds");
    const syncRange = parent.querySelector(".ranges input[type=range]");
    syncRange.value = 100;
    const syncNumber = parent.querySelector("p");
    syncNumber.textContent = 100  +" %";

});

//Off Buttons
const offRedBUtton= document.getElementById("Turn-Off-Red-LED");
offRedBUtton.addEventListener("click", function(){
    fetch("/off?led=1");
    const parent = this.closest(".leds");
    const syncRange = parent.querySelector(".ranges input[type=range]");
    syncRange.value = 0;
    const syncNumber = parent.querySelector("p");
    syncNumber.textContent = 0 +" %";

});
const offBlueBUtton= document.getElementById("Turn-Off-Blue-LED");
offBlueBUtton.addEventListener("click", function(){
    fetch("/off?led=2");
    const parent = this.closest(".leds");
    const syncRange = parent.querySelector(".ranges input[type=range]");
    syncRange.value = 0;
    const syncNumber = parent.querySelector("p");
    syncNumber.textContent = 0 +" %";

});
const offWhiteBUtton= document.getElementById("Turn-Off-White-LED");
offWhiteBUtton.addEventListener("click", function(){
    fetch("/off?led=3");
    const parent = this.closest(".leds");
    const syncRange = parent.querySelector(".ranges input[type=range]");
    syncRange.value = 0;
    const syncNumber = parent.querySelector("p");
    syncNumber.textContent = 0 +" %";

});