// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var matterBox;
var impressionsPeople = [];
var boundaries = [];
var ground;
var platform;

function setup() {
    createCanvas(600, 600);
    // Create a new physics engine
    engine = Engine.create();
    //Engine.run(engine);

    for (var i = 0; i < 5; i++) {
        var xPos = width * 0.25 * i;
        boundaries.push(new Boundary(xPos, height * 0.75, 20, height * 0.5, 0));
    }

    ground = new Boundary(width * 0.5, height, width, 20, 0);

    rectMode(CENTER);

}


function draw() {
    background('#3d1c60');

    Engine.update(engine);

    if(impressionsPeople.length < 100) {
      impressionsPeople.push(new Person(width/2 + 20, 20));
    }

    impressionsPeople.forEach(function(person) {
        person.display();
    });



    boundaries.forEach(function(boundary) {
        boundary.display();
    });

    ground.display();

}
