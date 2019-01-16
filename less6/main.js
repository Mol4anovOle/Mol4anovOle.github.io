var buttons = document.querySelectorAll(".slide")
var benner = document.querySelector(".benner");
var background = ["img/back2.jpg","img/header.png","img/back.jpg"];


buttons[2].onclick= function(){
    buttons[1].classList.remove("cycle");
    buttons[0].classList.remove("cycle");
    buttons[2].classList.add("cycle");
    benner.style.backgroundImage = "url(" +background[2]+")";
}

buttons[0].onclick= function(){
    buttons[1].classList.remove("cycle");
    buttons[2].classList.remove("cycle");
    buttons[0].classList.add("cycle");
    benner.style.backgroundImage = "url(" +background[0]+")";
}

buttons[1].onclick= function(){
    buttons[0].classList.remove("cycle");
    buttons[2].classList.remove("cycle");
    buttons[1].classList.add("cycle");
    benner.style.backgroundImage = "url(" +background[1]+")";

}

var menu = document.querySelector(".menu");
var list = document.querySelector(".firstt");
var label = document.querySelector("#label")
var i = 0;

menu.onclick = function(){
    i++;
    if(i%2==1){
        list.style.display="flex";
        menu.innerText = "-";
        menu.style.transform = "rotate(180deg)";
        menu.style.transitionDuration = "1s";
    }
    if(i%2==0){
        list.style.display="none";
        menu.innerText = "+";
        menu.style.transform = "rotate(-180deg)";
        menu.style.transitionDuration = "1s";
        
    }

}