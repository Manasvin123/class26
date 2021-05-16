const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint= Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var chain;
var gamestate="onsling"
var response, responsetype
var datetime
var hour
var score=0
var birds=[]
var reset
var bflysound, bselectsound



function preload() {
bflysound=loadSound("sprites/bird_flying.mp3")
bselectsound=loadSound("sprites/bird_select.mp3")


    backgroundImg = loadImage("sprites/bg.png");
}
async function backgroundchange(){
response=await fetch("http://worldtimeapi.org/api/timezone/America/Chicago")
responsetype=await response.json()
console.log (responsetype)
datetime=responsetype.datetime
console.log (datetime)
hour=datetime.slice(11,13)
console.log (hour)
if(hour>=06&&hour<=15){
bg="sprites/bg.png"


}
else{
bg="sprites/nighttime.jpg"



}

backgroundImg=loadImage(bg)

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
    log1 = new Log(810,260,300, PI/2);
   // log8 = new Log(811, 260, 300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    bird = new Bird(100,50);
    bird2= new Bird(90, 150);
    bird3=new Bird(150, 150)
    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird)
  //  constrainedLog= new Log(200,380,150,PI/2);
chain=new slingshot(birds[birds.length-1].body, {x:200, y:50})
backgroundchange()
Reset=createImg("sprites/refresh.png")
Reset.position(50, 50)

}

function draw(){
    if(backgroundImg){background(backgroundImg)}
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
//og8.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.displaybird1();
    bird2.displaybird2();
    bird3.displaybird3();
    bird.display();
    bird2.display();
    bird3.display();
    platform.display();
pig1.score();
pig3.score();


textSize(20)
fill ("white")
text("Score:"+score, 50, 50)
Reset.mousePressed(reset)


   // constrainedLog.display();
    
    chain.display();
    
}
function mouseDragged(){
if(gamestate!=="launch"){


    Matter.Body.setPosition(birds[birds.length-1].body,{x:mouseX, y:mouseY})}
}
function mouseReleased(){
chain.fly();
bflysound.play()
birds.pop()
gamestate="launch"
}
function keyPressed(){
if(keyCode===32&&gamestate==="launch"){
chain.attach(birds[birds.length-1].body)
bselectsound.play();
gamestate="onsling"
//bird.trajectory=[]
//bird.body.position.x=100
//bird.body.position.y=50
}
}
function reset(){
location.reload()






}