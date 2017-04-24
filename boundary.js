function Boundary(posX, posY, w, h, a) {

  var options = {
    isStatic: true,
    angle: a
  };

  this.body = Bodies.rectangle(posX, posY, w, h, options);
  this.pos = this.body.position;

  // add the body to the world
  World.add(engine.world, this.body);

  this.display = function() {

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.body.angle);
    //noStroke();
    fill(180);
    rect(0, 0, w, h);
    pop();
  }

}
