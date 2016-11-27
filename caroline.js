function setup() {
  createCanvas(1400, 1400);
}

function draw() {
  if (mouseIsPressed) {
    fill(255, 110, 200, 75);
  } else {
    fill(0, 255, 240, 75);
  }

  triangle(mouseX, mouseY, 300, 300, 300, 500, 100, 100);
}