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

}
fly(){
this.body.bodyA=null


}
display(){
     //line(x1,y1,x2,y2)
 // line(bird.body.position.x, bird.body.position.y, constrainedLog.body.position.x, constrainedLog.body.position.y)
if(this.body.bodyA){var pointA =this.body.bodyA.position
    var pointB =this.pointB
    strokeWeight(3);
    line(pointA.x,pointA.y, pointB.x,pointB.y)}


    
}


}