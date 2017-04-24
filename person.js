function Person(posX, posY, radius) {

  var options = {
    restitution: 0.6
  }

  this.body = Bodies.circle(posX, posY, radius, options);
  this.pos = this.body.position;
  this.radius = radius;
  this.diameter = radius * 2;
  this.angle = this.body.angle;

  // add all of the bodies to the world
  World.add(engine.world, this.body);

  this.display = function() {

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    noStroke();
    fill(255);
    ellipse(0, 0, this.diameter, this.diameter);
    pop();
  }

}
