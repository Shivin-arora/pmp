class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0,
			    friction:1,
			    density:1.2
      }
      
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r;
      this.image=loadImage("images/stone.png");
      this.image2=loadImage("images/boy.png");
      this.x = x;
      this.y = y;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     push();
     translate(pos.x,pos.y);
      imageMode(CENTER);
      
      image(this.image,0,0, 70,70);
     
      pop();
    }
    boy(){
      image(this.image2,200,370,250,300);
    }
  };
