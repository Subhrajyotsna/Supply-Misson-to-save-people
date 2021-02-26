var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	var ball_options ={
        restitution: 1
    }

	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	


	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
     
	bottom =createSprite(width/2, height-50,180,10)
	bottom.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200, 10,{restitution:1,isStatic:false});

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;

   
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  helicopterSprite.velocityX=0;
  helicopterSprite.velocityY=0;
  

  drawSprites();
  if(packageSprite.y>0&&packageSprite.y<210){
  packageSprite.x = helicopterSprite.x;
}
  keyPressed();
  if(packageSprite.isTouching(bottom)) {

	packageSprite.velocityY = 0;

}

  
 
  
 
}
function keyPressed() {
	//write code here
 if (keyDown("RIGHT_ARROW")) {
	 helicopterSprite.velocityX = 2;
 }
 if (keyDown("LEFT_ARROW")) {
	helicopterSprite.velocityX = -2;
}
if (keyDown("DOWN_ARROW")) {
	packageSprite.velocityY = 4;
	
	}

}
