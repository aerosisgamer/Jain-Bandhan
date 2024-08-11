// ---------Subscription---------
let planContainer = document.getElementById("plan-container");

function popAdd(val){
    val.classList.add("plan-pop-up", "pop-transition");
}

function popRemove(val){
    val.classList.remove("plan-pop-up");
}