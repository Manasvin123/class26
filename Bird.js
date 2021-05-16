class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image3 = loadImage("sprites/yellowbird.png");
    this.image4 = loadImage("sprites/bluebird.png");
    this.image2 = loadImage ("sprites/smoke.png");
    this.trajectory=[]
    this.visibility=255
  }
  displaybird1(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();}
    displaybird2(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image3, 0, 0, this.width, this.height);
      pop();}
      displaybird3(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image4, 0, 0, this.width, this.height);
        pop();}
      
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //super.display();
    if(this.body.position.x>200 && this.body.velocity.x>11){
      var birdposition=[this.body.position.x, this.body.position.y]
      this.trajectory.push(birdposition)
    }
    for(var i=0;i<this.trajectory.length;i++){
      push();
      this.visibility=this.visibility-0.2
      tint(255, this.visibility)
image(this.image2, this.trajectory[i][0],this.trajectory[i][1])
pop()
    }
  }
}
