const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup()
{
	var canvas = createCanvas(1300,600);
	
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,570,1300,20);
	paper = new Ball(200,450,50);
	dustbin = new Dustbin(1000,440);
}

function draw()
{
	background(255);
	Engine.update(engine);

	ground.display();
	paper.display();
	dustbin.display();
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-130});
  
	}
}