
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree,stone,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13;
var string,ground;


function preload(){
	boy=loadImage("images/boy.png");
  }



function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
tree=new Tree(1025,310,0,0);

ground=new Ground(width/2,600,width,20);


stone=new Stone(245,420,20);
 
mango1=new Mango(1100,100,60);
  mango2=new Mango(1170,130,60);
	mango3=new Mango(1010,140,60);
	mango4=new Mango(1000,70,60);
	mango5=new Mango(1050,80,60);
	mango6=new Mango(944,176,60);
	mango7=new Mango(900,230,50);
	mango8=new Mango(1140,150,50);
	mango9=new Mango(1100,230,50);
	mango10=new Mango(1200,200,50);
	mango11=new Mango(1073,160,50);
	mango12=new Mango(900,160,50);
	mango13=new Mango(1006,222,50);

stringObj = new String1(stone.body,{x:235, y:440});

	//stoneObj=new stone(235,420,30); 

//Engine.run(engine);
}

function draw() {

background(230);
  //frameRate(2)
Engine.update(engine);

fill("red");
text(mouseX,100,60); 
text(mouseY,200,60);

image(boy,200,360,200,300);

tree.display();


mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();
mango13.display();

dc(stone,mango1);
dc(stone,mango2);
dc(stone,mango3);
dc(stone,mango4);
dc(stone,mango5);
dc(stone,mango6);
dc(stone,mango7);
dc(stone,mango8);
dc(stone,mango9);
dc(stone,mango10);
dc(stone,mango11);
dc(stone,mango12);
dc(stone,mango13);


stringObj.display();
stone.display();
ground.display();

//stone.boy();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  stringObj.fly();
}

function dc(stone,mango){

	var stoneo = stone.body.position;
	var omango = mango.body.position;

var distance=dist(stoneo.x,stoneo.y,omango.x,omango.y);	
if(distance<=mango.r+stone.r){
	Matter.body.setStatic(mango.body,false);
}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:227,y:475});
		stringObj.attach();
	}
}