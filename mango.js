class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution : 0,
            friction :1
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r;
      this.x=x;
      this.y=y;
      this.image=loadImage("images/mango.png");
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     push();
     translate(pos.x,pos.y);
     rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.radius, this.radius);
      
      pop();
    }
  };
