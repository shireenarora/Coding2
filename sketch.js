var box

function setup() {
  createCanvas(400,400);

  box = createSprite(200,200,40,40)
}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW))
  {
    box.position.x = box.position.x + 2
    background("blue")
  }
  if (keyIsDown(LEFT_ARROW))
  {
    box.position.x = box.position.x - 2
    background("red")
  }
  if (keyIsDown(UP_ARROW))
  {
    box.position.y = box.position.y -2
    background("yellow")
  }
  if (keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 2
    background("green")
  }
  drawSprites()
}




