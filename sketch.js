
var sea,sea_img;
var ship,ship_moving;

function preload(){

sea_img=loadImage("sea.png")
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
 

  sea= createSprite(0,280,400,400);
  sea.addImage(sea_img);
  sea.scale=0.4;
  ship=createSprite(200,280,30,30);
  ship.addAnimation("moving",ship_moving);
  ship.scale=0.2;

}

function draw() {
  background("lightblue");
 
 if (sea.x<0) {
sea.x = sea.width/2
 }

  drawSprites();
}