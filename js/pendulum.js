class Pendulum{
    constructor(x,y,color){
        var options = {
            restitution: 1,
            friction: 0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
          };
        
        this.body=Bodies.circle(x,y,20,options)
        this.color=color;
        World.add(world,this.body)
       // this.x=x;
       // this.y=y;

    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x,pos.y,40,40);

    }
}