class Roof {
    constructor(x, y, width, height) {
      var options = {
        
      }
      this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }