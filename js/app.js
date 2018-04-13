// The namespace for this application
// // ()


var sketch1 = function(p) {

  p.i = 0;
  p.j = 0;


  p.setup = function() {
    var myCanvas2 = p.createCanvas(p.windowWidth, 400);
    myCanvas2.parent('animation-1');
  }

  p.draw = function() {
      p.background(206, 204, 232);
      var seconds = p.millis()/1000;
      var change = p.map(p.sin(seconds / 10), -1, 1, 0, 30);

      p.stroke(62, 130, 255);
      p.strokeWeight(2);
     // p.fill(176, 176, 176);
     // p.rect(p.map(p.mouseX, 0, 200, 0, 200), p.map(p.mouseY, 0, 400, 0, 400), 50, 50);

      p.noFill();
      p.stroke(62, 130, 255);
        
      for (p.i = 10; p.i < 400; p.i += change + 10){
        p.ellipse(p.windowWidth/2, 200, 20 + p.i);
    }

     // p.ellipse(p.map(p.mouseX, 0, 200, 0, 200), p.map(p.mouseY, 0, 400, 0, 400), 50, 50);
 
  }
}

var myp5 = new p5(sketch1);


