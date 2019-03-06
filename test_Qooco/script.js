var num = 21; // Кол-во ламп
var wrap = 400; // размер полотна
var girRadius = wrap / 2.5; // Радиус нашего круга
//генерируем лампочки
var container = document.getElementById("wrap");
for (var i = 0; i < num; i++) {
  container.innerHTML += '<p class="circles"></p>';
}

$(document).ready(function Rect() {
  for (i = 0; i < num; i++) {
    var f = (2 / num) * i * Math.PI; // Рассчитываем угол каждой лампочки в радианах
    var left = wrap + 2 * girRadius * Math.sin(f) - 15 + "px";
    var top = wrap / 2 + girRadius * Math.cos(f) - 27 + "px";
    $("#wrap p")
      .eq(i)
      .css({ top: top, left: left }); // Устанавливаем значения каждой лампочке
  }
});

//нажатие на кнопку
$(document).ready(function() {
  $("#button").click(function() {
    $("#button").toggleClass("circle");
    $("#wrap").toggleClass("circle");
    $(document).ready(function Circle() {
      for (i = 0; i < num; i++) {
        var f = (2 / num) * i * Math.PI; // Рассчитываем угол каждой лампочки в радианах
        var left = wrap / 2 + girRadius * Math.sin(f) - 15 + "px";
        var top = wrap / 2 + girRadius * Math.cos(f) - 27 + "px";
        $("#wrap p")
          .eq(i)
          .css({ top: top, left: left }); // Устанавливаем значения каждой лампочке
      }
    });

    return false;
  });
});

