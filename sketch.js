var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,690,1200,20);
	paper = new Paper (240,100,5,20);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    //World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  circMode(CENTER);
  background(0);
  
  //drawSprites();
  ground.display();
  paper.display();
 
}



