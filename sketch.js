var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,helicopterBody;
var bucket;

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

	engine = Engine.create();
	world = engine.world;

	bucket = new Bucket(400,650);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.visible = false;
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 50 , {isStatic:true} );
 	World.add(world, ground);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  bucket.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


   if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  packageSprite.visible = true;
	  
	  
		fill("green");
	  textSize(20);
	  text("YAY! PACKAGE DELIVERED",300,350);
	  
   
  }
  drawSprites();
}
