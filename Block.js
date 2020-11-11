class Block {
    constructor(x,y,width,height,angle){
      var options = {
        'restitution':0.8,
        'friction':0.8,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

    Matter.Body.setAngle(this.body, angle);

    this.color = random(0,255)
    this.color1 = random(0,255)
    this.color2 = random(0,255)
    
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER)
      fill(this.color, this.color1, this.color2)
      rect(0,0, this.width, this.height)
      pop();
    }
  }