class Paper {
    constructor(x,y,radius,pixel) {
      var options = {
          isStatic: false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      this.body = Bodies.circle(x,y,radius,pixel,options);
      this.radius = radius;
      this.pixel = pixel;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      circMode(CENTER);
      fill("pink");
      circ(pos.x, pos.y, this.radius,this.pixel);
    }
  };