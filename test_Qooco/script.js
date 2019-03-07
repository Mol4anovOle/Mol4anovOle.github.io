const container = $("#container");
const elementRadius = 24;
const count = 36;
const rows = 6;
const cols = 12;
const radius = (elementRadius * count) / (2 * Math.PI);
let type = "rect";

function createElements() {
  for (let i = 0; i < 36; i++) {
    container.append($('<div class="circles">'));
  }
}

function makeRect() {
  let current = 0;

  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      if (r === 0 || r === rows || c === 0 || c === cols) {
        $(".circles")
          .eq(current)
          .css({
            top: `${r * elementRadius}px`,
            left: `${c * elementRadius}px`
          });
        current += 1;
      }
    }
  }
}

function makeCircle() {
  for (let i = 0; i < count; i++) {
    const angle = (2 * i * Math.PI) / count;

    $(".circles")
      .eq(i)
      .css({
        top: `${radius + radius * Math.cos(angle)}px`,
        left: `${radius + radius * Math.sin(angle)}px`
      });
  }
}

function toggleType() {
  if (type === "rect") {
    $("#btn").removeClass("circle");
    $("#container").removeClass("circle");
    makeRect();
    type = "circles";
  } else {
    makeCircle();
    $("#btn").toggleClass("circle");
    $("#container").toggleClass("circle");
    type = "rect";
  }
}

$("#btn").click(toggleType);

createElements();
toggleType();
