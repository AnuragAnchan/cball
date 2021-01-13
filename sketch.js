const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;


var bin;


function preload(){
  binImg = loadImage("sprites/dustbingreen.png");
}

function setup() {
  var canvas =createCanvas(800, 700);
     engine = Engine.create();
     world = engine.world;
     

bin=new Bin(100,110,20,20);


Engine.run(engine);
  
}

function draw() {
  
  background("black");

  bin.display();



  

 
}




