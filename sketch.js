var tom1,tom2,tom,jerry,jerry1,jerry2,bg,tom3
function preload() {
   tom1=loadAnimation("images/tomOne.png")
   tom2=loadAnimation("images/tomTwo.png","images/tomThree.png")
    tom3=loadAnimation("images/tomFour.png")

   jerry1=loadAnimation("images/jerryOne.png")
   jerry2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    jerry3=loadAnimation("images/jerryFour.png") 

    bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600)
    tom.addAnimation("tomSleeping",tom1)
    tom.scale=0.2
    jerry=createSprite(200,600) 
    jerry.addAnimation("jerryStand",jerry1)
    jerry.scale=0.15
}

function draw() {

    background(bg);
    tom.VelocityX=0
  if(tom.x-jerry.x<tom.width/2-jerry.width/2){
      tom.velocityX=0
      tom.addAnimation("tom",tom3)
      tom.x=300
      tom.scale=0.2
      tom.changeAnimation("tom")
      jerry.addAnimation("jerry",jerry3)
      jerry.scale=0.15
      jerry.changeAnimation("jerry")
  }

    drawSprites();
}


function keyPressed(){

  if (keyCode ===LEFT_ARROW){
      tom.velocityX=-5;
     tom.addAnimation("catRunning",tomImg2);
      tom.changeAnimation("catRunning");
text (mouseX+','+mouseY,10,45)
jerry.addAnimation("jerrywalk",jerry2)
jerry.frameDelay=25
jerry.changeAnimation("jerrywalk")
  }


}
