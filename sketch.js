const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinko=[];
var engine, world;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
for(var j=50;j<=width;j=j+50){
plinko.push(new Plinko(j,50))
}
for(var j=25;j<=width;j=j+50){
  plinko.push(new Plinko(j,150))
  }
  for(var j=50;j<=width;j=j+50){
    plinko.push(new Plinko(j,250))
    }
  base=new Ground(200,780,600,10);
  line1= new Ground(230,580,5,400);
  line2= new Ground(300,580,5,400);
  line3= new Ground(370,580,5,400);
  line4= new Ground(440,580,5,400);
  line5= new Ground(160,580,5,400);
  line6= new Ground(90,580,5,400);
  line7= new Ground(20,580,5,400); 
  line8= new Ground(-50,580,5,400);

 
}

function draw() {
  background(0);  
  Engine.update(engine);
  base.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  line6.display();
  line7.display();
  line8.display();
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }
  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }
 
  drawSprites();

}