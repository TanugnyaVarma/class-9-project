var box ;
function setup() {
  createCanvas(400,400);
 
}
function draw() 
{
  background(30);
  background("black");

  if(keyIsDown(LEFT_ARROW)){
    background("red");
  }

  if(keyIsDown(RIGHT_ARROW)){
    background("blue");
  }
  if(keyIsDown(UP_ARROW)){
    background("green");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("yellow");
  }





 drawSprites();
}




