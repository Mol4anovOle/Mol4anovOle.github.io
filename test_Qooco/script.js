let a = 100;
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
  for (let i = 0; i < elemscollection.length; ++i) {
    elemscollection[i].style.background = "red";
    elemscollection[i + 1].style.background = "yellow";
    elemscollection[i + 2].style.background = "blue";
  }
}, 1000);
