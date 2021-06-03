const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, roof;
var wall1, wall2;
var villain;
var floor1, floor2, floor3;

var water1;
var lava1;
var coins;
var coin1;

function setup(){
createCanvas(displayWidth, displayHeight);
engine = Engine.create();
world = engine.world;
Engine.run(engine, world);

ground = new Ground(displayWidth/2+200, displayHeight-20,displayWidth,30);
roof = new Ground(displayWidth/2 + 200, 20, displayWidth,30);

wall1 = new Walls(200, displayHeight/2, 30, displayHeight);
wall2 = new Walls(displayWidth-20, displayHeight/2, 30, displayHeight);

villain = new Villain(displayWidth-200,displayHeight-200,300,300);

floor1 = new Ground(displayWidth/2+240,displayHeight/3,displayWidth-500, 30);
floor2 = new Ground(displayWidth/2-60,displayHeight/3+300,displayWidth-500, 30);
floor3 = new Ground(displayWidth/2+240,displayHeight/3+600,displayWidth-500, 30);

water1 = new Water(displayWidth/2+240, displayHeight/3, 200, 30);
lava1 = new Lava(displayWidth/2-60, displayHeight/3+300, 200, 30);
coin1 = new Coin(displayWidth/2-60, displayHeight/3,200,200)
}

function preload(){
// Load Images Here

}

function draw(){
background("white");


ground.display();
roof.display();
fill("red");
text(mouseX +","+ mouseY, 20, 20);
textSize(24);
text("If You Fall Into Water, You Will Sink Through and Drop Down 1 Layer",displayWidth/2-200, 30);
text("If You Fall Into Lava, You Will Take Damage and Restart At the Beginning",displayWidth/2-200, 60);

wall1.display();
wall2.display();

villain.display();

floor1.display();
floor2.display();
floor3.display();

water1.display();
lava1.display();
coin1.display();
keyPressed();

drawSprites();


}

function keyPressed(){
    if(keyCode===RIGHT_ARROW){
        villain.x=villain.x+20;
    }
    if(keyCode===LEFT_ARROW){
        villain.x=villain.x-20;
    }
    if(keyCode===UP_ARROW){
        villain.y=villain.y-20;
    }
    if(keyCode===DOWN_ARROW){
        villain.y=villain.y+20;
    }}