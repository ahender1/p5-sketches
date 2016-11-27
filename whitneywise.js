function setup() {
  createCanvas(5000,5000);
background('#fae')
}


function draw() {
  
  stroke('rgba(0,255,0,0.25)');
strokeWeight(4);
rect(20, 20, 60, 60);if (mouseIsPressed) {
    fill(0);
  } else {
    fill(22,37);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

