function setup() {
    createCanvas(1600, 1700)
}

function draw() {
    if (mouseIsPressed) {
        fill(40,255,255,.25);
        rect(mouseX, mouseY, 10, 1000);
        fill(255,255,255);
 }  else { 
        fill(1,250,250,25);
        ellipse(mouseX, mouseY, 150, 1000)

}}