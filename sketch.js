const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

var world,engine;
var bob1,bob2,bob3,bob4,bob5;



function setup(){
    createCanvas(windowWidth/2,windowHeight);

engine=Engine.create();
world=engine.world;
 let canvasmouse= Mouse.create(canvas.elt);
 canvasmouse.pixelRatio= pixelDensity();
 let options={
     mouse: canvasmouse
 };
 mConstraint= MouseConstraint.create(engine,options);
 World.add(world, mConstraint);

bob1= new Pendulum(150,100,"red");
bob2=new Pendulum(190,100,"yellow");
bob3=new Pendulum(230,100,"blue");
bob4=new Pendulum(270,100,"green");
bob5=new Pendulum(310,100,"purple");

sling1=new Sling(bob1.body, {x:150, y:100});
sling2=new Sling(bob2.body, {x:190, y:100});
sling3=new Sling(bob3.body, {x:230, y:100});
sling4=new Sling(bob4.body, {x:270, y:100});
sling5=new Sling(bob5.body, {x:310, y:100});

}


function draw(){
    background("pink");
    console.log("draw")
 engine=Engine.update(engine);
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bob3.body,{x: mouseX, y: mouseY});
}