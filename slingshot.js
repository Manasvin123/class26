//    var options={
//        bodyA:bird.body,
//        bodyB: constrainedLog.body,
//        stiffness:0.04,
//        length:10,
//    }
//     chain= Constraint.create(options);
//     World.add(world,chain);
class slingshot{
constructor(bodyA,pointB){
    var options={
       bodyA:bodyA,
       pointB: pointB,
       stiffness:0.004,
       length:30,
     }
    this.body= Matter.Constraint.create(options)
    World.add(world, this.body);
    this.bodyA=bodyA
    this.pointB=pointB
this.sling1=loadImage("sprites/sling1.png")
this.sling2=loadImage("sprites/sling2.png")
this.sling3=loadImage("sprites/sling3.png")

}
fly(){
this.body.bodyA=null


}
display(){
     //line(x1,y1,x2,y2)
 // line(bird.body.position.x, bird.body.position.y, constrainedLog.body.position.x, constrainedLog.body.position.y)
 image(this.sling1, 200, 20)
 image(this.sling2, 170, 20)

if(this.body.bodyA){
    var pointA =this.body.bodyA.position
    var pointB =this.pointB
    push();
    if(pointA.x<200){
        stroke("#301608")
        strokeWeight(5);
        line(pointA.x-20,pointA.y, pointB.x-10,pointB.y)
        line(pointA.x-20,pointA.y, pointB.x+20,pointB.y)
    image(this.sling3, pointA.x-30, pointA.y-10,20, 30)
    }
else{
    stroke("#301608")
    strokeWeight(3);
    line(pointA.x-20,pointA.y, pointB.x-10,pointB.y)
    line(pointA.x-20,pointA.y, pointB.x+20,pointB.y)
image(this.sling3, pointA.x-30, pointA.y-10,20, 30)
}
pop();
}
}
}