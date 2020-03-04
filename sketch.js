const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,chuck;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bc.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(400,50,40,40);

    box3 = new Box(700,240,40,40);
    box4 = new Box(920,240,40,40);
    pig3 = new Pig(810, 220);

    log3 =  new Log(400,50,40,40);

    box5 = new Box(810,160,70,70);
    log4 = new Log(400,50,40,40);
    log5 = new Log(400,50,40,40);
box6=new Box (400,160,70,70);
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    box7=new Box (460,160,70,70);
   box8=new Box(360,160,70,70);
   box9=new Box(480,180,70,70);
   box10=new Box(500,180,70,70);
   box11=new Box(520,180,70,70);
   box12=new Box(540,200,70,70);
   box13=new Box(560,200,70,70);
   box14=new Box(580,200,70,70);
   box15=new Box(600,200,70,70);
   box16=new Box(620,220,70,70);
   box17=new Box(640,220,70,70);
   box18=new Box(660,240,70,70);
   box19=new Box(680,260,70,70);
   box20=new Box(700,300,70,70);
   box21=new Box(720,220,70,70);
   box22=new Box(740,180,70,70);
   box23=new Box(760,200,70,70);
   box24=new Box(780,200,70,70);
   box25=new Box(800,200,70,70);
   box26=new Box(820,220,70,70);
   box27=new Box(840,220,70,70);
   box28=new Box(860,240,70,70);
   box29=new Box(880,260,70,70);
   box30=new Box(900,300,70,70);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
    box6.display();  
    box7.display(); 
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
 slingshot.attach(bird.body);
    }
}