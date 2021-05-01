
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const body = Matter.Body;
var myEngine,myWorld, ground;
var paper,paper_img;

var line1,line2,line3;

function preload()
{

}

function setup() {
	var myCanvas=createCanvas(800, 700);

	
	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
	ground = new Ground(0,680,1600,20);

	paper = new Paper(100,600,30);
	

	Engine.run(myEngine);
	console.log(paper.width);
	
	line1 = new Trash(710,620,200,100);
	//line2 = new Trash(620,665,150,12);
	//line3 = new Trash(700,621,12,100); 
}


function draw() {
  rectMode(CENTER);
  background("White");

  ground.display();
  paper.display();
  line1.display();
  //line2.display();
  //line3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:135,y:-135}); 
	}
}

