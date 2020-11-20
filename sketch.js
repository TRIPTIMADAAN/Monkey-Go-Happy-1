var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,score
var score
 var survivalTime =0 
var PLAY=1
var END = 0
gameState = PLAY
function preload()
{
  monkey_running =                  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup()
{
  monkey = createSprite(80,315,20,20)
  monkey . addAnimation("running",monkey_running),
  monkey.scale= 0.1
 
 obstacleGroup = createGroup();
FoodGroup = createGroup();
  ground = createSprite(400,350,900,10)
  ground .velocityX = -4
  ground.x = ground . width/2
  console.log(ground.x)
}


function draw() {
 background("white")
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -10;
      }
  monkey.velocityY = monkey.velocityY + 0.8
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(obstacleGroup.isTouching(monkey)){
        monkey.velocityY = 0;
       obstacleGroup . velocityX = 0
       FoodGroup . velocityX = 0
  }
 monkey.collide(ground);
  
  score = 0
 
  
  stroke ("black")
  textSize (22)
  fill("orange");
   survivalTime = survivalTime + Math.round(getFrameRate()/60);
  text("Survival = " +  survivalTime , 250,50)
  spawnFood()   
   spawnObstacles()
  drawSprites()
}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,70,40,10);
    banana .y = Math.round(random(200,50));
    banana .addImage(bananaImage);
    banana .scale = 0.5;
    banana .velocityX = -3;
    banana . scale=0.1
     //assign lifetime to the variable
    banana .lifetime = 200;
    
    //adjust the depth
  banana .depth = monkey.depth;
   monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    obstacle = createSprite(600,325,40,10);
  
   obstacle  .addImage(obstacleImage);
   obstacle  .scale = 0.5;
   obstacle  .velocityX = -3;
  obstacle . scale = 0.1
     //assign lifetime to the variable
    obstacle .lifetime = 200;
    
    //adjust the depth
  obstacle  .depth = monkey.depth;
   monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}



