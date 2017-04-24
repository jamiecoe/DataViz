// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var matterBox;
var people = [];
var boundaries = [];
var ground;

function setup() {
    createCanvas(400, 400);
    // Create a new physics engine
    engine = Engine.create();
    //Engine.run(engine);

    boundaries.push(new Boundary(150, 100, width * 0.6, 20, 0.3));
    boundaries.push(new Boundary(250, 300, width * 0.6, 20, -0.3));


    rectMode(CENTER);
}

function mousePressed() {
    people.push(new Person(mouseX, mouseY, 10));
}

function draw() {
    background(50);

    Engine.update(engine);

    people.forEach(function(person) {
      person.display();
    })

    boundaries.forEach(function(boundary) {
      boundary.display();
    })

}
