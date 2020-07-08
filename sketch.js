//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

//variables
var engine,world;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
var roof;

function setup() {
	//canvas
	createCanvas(1200,800);

	//engine
	engine = Engine.create();
	world = engine.world;

	//roof
	roof = new Roof (width/2, 100, width/4*3, 50 );
	//bobs
	bob1 = new Bob(320,550,20);
	bob2 = new Bob(360,550,20);
	bob3 = new Bob(400,550,20);
	bob4 = new Bob(440,550,20);
	bob5 = new Bob(480,550,20);
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	//ropes
	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);

	//running the engine
	Engine.run(engine);
	//render
	Render.run(render);
  
}


function draw() {
    //backgound color
	background('mediumseagreen');

	
	
	//rectangle mode
	rectMode(CENTER);
	
	//display objects
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	

}

function keyPressed () {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}

function drawLine(constraint){
	bobbodyposition = constraint.bodyA.position;
	roofbodyposition = constraint.bodyB.position;
	roofbodyoffset = constraint.pointB;
	roofbodyx = roofbodyposition.x + roofbodyoffset.x;
	roofbodyy = roofbodyposition.y + roofbodyoffset.y;
	line(bobbodyposition.x,bobbodyposition.y,roofbodyx,roofbodyy);


}


