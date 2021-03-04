var moving, fixed;

function setup() {
  createCanvas(600, 600);
  fixed = createSprite(300, 300, 80, 100);
  moving = createSprite(300, 300, 50, 100);

  fixed.shapeColor = "red";
  moving.shapeColor = "green";
}

function draw() {
  background(0);

  moving.x = mouseX;
  moving.y = mouseY;

  if (
    moving.x - fixed.x < (moving.width + fixed.width) / 2 &&
    fixed.x - moving.x < (moving.width + fixed.width) / 2 &&
    moving.y - fixed.y < (moving.height + fixed.height) / 2 &&
    fixed.y - moving.y < (moving.height + fixed.height) / 2
  ) {
    fixed.shapeColor = "cyan";
    fixed.shapeColor = "yellow";
  } else {
    fixed.shapeColor = "red";
    moving.shapeColor = "green";
  }

  drawSprites();
}
