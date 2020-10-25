
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var tree, tree_img;
var ground;
var stone;
var boy, boy_img;
var mango1, mango2, mangoo3, mango4;

function preload(){
	tree_img = loadImage("tree.png");
	boy_img = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 450, 1000, 20);

	stone = new Stone(200, 200, 50);

	mango1 = new Mango(600, 100, 50, 50);
	mango2 = new Mango(620, 80, 50, 50);
	mango3 = new Mango(650, 110, 50, 50);
	mango4 = new Mango(600, 90, 50, 50);
}


function draw() {
  Engine.run(engine);

  rectMode(CENTER);
  background('lightblue');

  image (tree_img, 600, 50, 400, 400);

  image(boy_img, 100, 290, 200, 200);

  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
}



