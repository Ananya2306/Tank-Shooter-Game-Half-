// canvas variable
var canvas;
// background variable and its image
var bg;
var bgImg;
// player variable and its image 
var player;
var playerImg;
// Enemy tanks variable and its images
var t1 , t2 , t3 , t4 , t5 , t6 ;
var t1Img , t2Img , t3Img , t4Img , t5Img , t6Img ;

// Function for loading Images
function preload(){
bgImg = loadImage("Images/grass.png");

}

// Function for creating Sprites
function setup() {
  // Canvas
 canvas =  createCanvas(displayWidth-20,displayHeight-30);
  
bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
 bg.y = bg.height/2;

}

// Function for making them work and display 
function draw() {
  //image(bgImg,0,-displayHeight*4,displayWidth,displayHeight*5);
  bg.addImage(bgImg);
  bg.scale =2;
  bg.velocityY =-10;
  if(bg.y <0){
    bg.y = bg.height/2;
  }

  drawSprites();
}