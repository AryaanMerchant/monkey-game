var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var  obstacleGroup;
var score=0,ground;
var PLAY=1;
var END=0;
var gameState=1;
var FoodGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,300);
  
  monkey=createSprite(50,250,20,20);
 monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(250,300,500,40);
  ground.shapeColor=(rgb(140,300,50));

  obstacleGroup=createGroup();
  FoodGroup=createGroup();
}


function draw() {
  background("lightblue")

     obstacles();
     banana();
     
    
     if (keyDown("space") && monkey.y >= 240) {
        monkey.velocityY = -15;
     }
    
  
  
     console.log(monkey.y);
    
  
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
     
    
    
     
    if(monkey.isTouching(FoodGroup)){
       score=score+1;
      FoodGroup.destroyEach();
       }
    
   
  
    
  
  
    
   
  
monkey.collide( ground);
fill("black")
textFont("arial");
textSize(20);
text("SCORE:"+score,380,40);
  
  
   drawSprites();
}

function obstacles(){
  if(World.frameCount%120===0){
  obstacle=createSprite(500,260,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-6;
  obstacle.scale=0.15;
  obstacle.lifetime=130;
  obstacle.velocityX = -(6 + score / 100);
  obstacle.setCollider("circle", 0, 0, 230);
  obstacleGroup.add(obstacle);
  
  }




}
function banana(){
if(World.frameCount%100===0){
bananas=createSprite(500,140,20,20);
bananas.addImage(bananaImage);
bananas.velocityX = -(6 + score / 1);
bananas.velocityX=-6;
bananas.scale=0.08;
FoodGroup.add(bananas);
}
}


