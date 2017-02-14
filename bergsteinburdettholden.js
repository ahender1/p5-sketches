var message = "Ellie Maddie Lucy", // What the text says
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 95,
  x, y; // x and y coordinates of the text

function preload() {
  font = loadFont('peach-sundress.ttf');
}

function setup() {
  createCanvas(710, 400); // canvas size
  
  
  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;                       // how far it is moving when it shakes
  y = height / 2 - bounds.h / 2;
}

function draw() {
  // if mouse is pressed change background color
  // if mouse is not pressed change background color
  // a semi-transparent rectangle on top of the words to fade them out
  if (mouseIsPressed) {
  fill(240, 100, 113); // color of the rectangle
  } else {
  fill (0, 200, 50)
  }
  // if right arrow is pressed change background color
  if (keyIsDown(RIGHT_ARROW))
      fill (255, 100, 0)
  
  // if left arrow is pressed change backgroung color
  if (keyIsDown(LEFT_ARROW))
      fill (120, 130, 255)
 
 // if up arrow is pressed change background color     
  if (keyIsDown(UP_ARROW))
      fill (0,200,255)

// if down arrow is pressed change background color      
  if (keyIsDown(DOWN_ARROW))
      fill (100, 120, 200)
      
      
  rect(mouseX, mouseY, 100, 100)
  strokeWeight(25) // weight of background
  stroke(0) //color of stroke background
  rect(0, 0, width, height); // size of the rectangle

 // write the text in pink, use a stroke, have the stroke be white
  fill(250, 165, 200); // color of words
  strokeWeight(7) // weight of stroke on words
  stroke(255) // color of stroke on words
  text(message, x, y);
   bounds = font.textBounds(message,x,y,fontsize);
  

  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x += random(-5, 5); // words won't juggle much to the side
    y += random(-13, 13); // words will jiggle more up and down than side to side
  }
}