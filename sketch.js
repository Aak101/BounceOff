var fixedRect, movingRect, player, ground;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  player = createSprite(300,400,30,50)
  player.shapeColor = "blue";
  ground = createSprite(300,600,200,20 )
  ground.shapeColor = "brown"

  player.velocityY = 2
}

function draw() {
  background(0,0,0);  

bounceOff(movingRect,fixedRect);
bounceOff(movingRect,ground)
bounceOff(player,ground)
bounceOff(fixedRect,ground)
  drawSprites();
}


