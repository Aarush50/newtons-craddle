
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);
	bobX=800;
	bobY=700;

	engine = Engine.create();
	world = engine.world;
	roof=new Roof();
	bobDiameter=20;
	bobObject1=new Bob(bobX-bobDiameter*2,bobY,bobDiameter);
	bobObject2=new Bob(bobX-bobDiameter*1,bobY,bobDiameter);
	bobObject3=new Bob(bobX,bobY,bobDiameter);
	bobObject4=new Bob(bobX+bobDiameter*1,bobY,bobDiameter);
	bobObject5=new Bob(bobX+bobDiameter*2,bobY,bobDiameter);
	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3=new Rope(bobObject3.body,roof.body,0,0);
	rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2,0);


	//Create the Bodies Here.
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}
function drawLine(Constraint){
  bobbodyposition=constraint.bodyA.position;
  roofbodyposition=constraint.bodyB.position;
  roofbodyOffset=constraint.pointB
  line(bobbodyposition.x,bobbodyposition.y,roofbodyposition.x+roofbodyOffset.x,roofbodyposition.y+roofbodyOffset.y);
}

