let a = 150;
let b = 150;
let perSq = b * a;
let padding = 20;
let radius = 40;
let qualSq = Math.ceil(perSq / (radius + padding));

var container = document.getElementById("container");

for (var i = 0; i < qualSq; i++) {
  container.innerHTML += '<p class="circles"></p>';
}
let elemscollection = document.getElementsByClassName("circles");

setInterval(function() {
  for (let i = 0; i < elemscollection.length; i = i + 3) {
    elemscollection[i].style.background = "red";
  }
  for (let j = 1; j < elemscollection.length; j = j + 3) {
    elemscollection[j].style.background = "yellow";
  }
  for (let k = 2; k < elemscollection.length; k = k + 3) {
    elemscollection[k].style.background = "blue";
  }
}, 1000);
setInterval(function() {
  for (let i = 0; i < elemscollection.length; i = i + 3) {
    elemscollection[i].style.background = "yellow";
  }
  for (let j = 1; j < elemscollection.length; j = j + 3) {
    elemscollection[j].style.background = "blue";
  }
  for (let k = 2; k < elemscollection.length; k = k + 3) {
    elemscollection[k].style.background = "red";
  }
}, 1100);
setInterval(function() {
  for (let i = 0; i < elemscollection.length; i = i + 3) {
    elemscollection[i].style.background = "blue";
  }
  for (let j = 1; j < elemscollection2.length; j = j + 3) {
    elemscollection[j].style.background = "red";
  }
  for (let k = 2; k < elemscollection.length; k = k + 3) {
    elemscollection[k].style.background = "yellow";
  }
}, 1200);
