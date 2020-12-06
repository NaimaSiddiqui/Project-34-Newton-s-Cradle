class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stifness: 1,
            angularStiffness:1,
            length:220
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
display(){
    if(this.sling.bodyA){
        console.log(this.sling.bodyA);
        push()
        strokeWeight(4);
        stroke("black");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y-20,this.sling.pointB.x,this.sling.pointB.y);
        pop();
    }
}


}