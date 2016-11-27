function setup() {
  createCanvas(1500,1500);
  background(0, 0, 0)


}

function draw() {
  if (mouseIsPressed) {
    fill(0, 255, 0, 10);

  } else {
    fill(0, 255, 255, 10);
    stroke(0, 0, 0);
    
    noStroke();
smooth();
  }

  triangle(mouseX, mouseY, 20, 20, 40, 40);
}

