function Person(posX, posY) {

  var options = {
    friction: 1
  }

  this.radius = 5;
  this.diameter = this.radius * 2;

  this.body = Bodies.circle(posX, posY, this.radius, options);
  this.pos = this.body.position;
  this.angle = this.body.angle;

  // add all of the bodies to the world
  World.add(engine.world, this.body);

  this.display = function() {

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    stroke(0);
    fill(255);
    ellipse(0, 0, this.diameter, this.diameter);
    pop();
  }

}
