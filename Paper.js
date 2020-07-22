class Paper {
    constructor(x, y,radius) {
      var options = {
          
          restitution:0.3,
          friction:0.5,
          density:2.5,
          isStatic:false
      }
      this.body = Bodies.circle(100,367,radius, options);
      this.radius = radius;
      this.image = loadImage("Paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);  
      fill("Blue");
      image(this.image,0, 0, this.radius,50);
      pop();
    }
  }
  