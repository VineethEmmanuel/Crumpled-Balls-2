const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	binImg = loadImage("dustbin.png");

}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,370,800,20);

	paper = new Paper(100,300,50);

	bin1=new Bin(620,349,120,20);
	bin2=new Bin(550,280,30,160);
	bin3=new Bin(680,280,30,160);

	binPic = createSprite(615,270,130,20);
	binPic.addImage(binImg);
	binPic.scale = 0.63;
	binPic.visible = true;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y:-800});	
	}
}


