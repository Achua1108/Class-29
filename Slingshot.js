class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    this.sling1= loadImage ("sprites/sling1.png")
    this.sling2= loadImage ("sprites/sling2.png")
    this.sling3= loadImage ("sprites/sling3.png")
    
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
       image(this.sling1, 200, 70, 38, 150)
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8)
            strokeWeight(10);

            if(pointA.x <200){

                line(pointA.x-25, pointA.y, pointB.x+20, pointB.y-7);
                bird.display();
                line(pointA.x-25, pointA.y, pointB.x-20, pointB.y-10)
                image(this.sling3, pointA.x-25, pointA.y-7, 10, 15)


            }
           
            else{

                line(pointA.x+25, pointA.y, pointB.x+20, pointB.y-7);
                bird.display();
                line(pointA.x+25, pointA.y, pointB.x-20, pointB.y-10)
                image(this.sling3, pointA.x+25, pointA.y-7, 10, 15)


            }


        }

        bird.display();
        image(this.sling2, 170, 60, 42, 100)

    }

    
}