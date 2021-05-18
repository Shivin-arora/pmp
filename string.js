class String1{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
       // this.bodyA = bodyA
       // this.pointB = pointB
        this.string = Constraint.create(options);
        
        World.add(world, this.string);
       
    }

    attach(){
		this.string.bodyA=stone.body;
	}

    fly(){
        this.string.bodyA = null;
    }

    display(){
        
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.string.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
        
    }

    
   
    






    

    
}