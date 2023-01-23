function setup() {
  createCanvas(windowWidth,windowHeight);
}


function draw() {
  background(239  ,212,  108  );
  
  //THESE VECTORS SPECIFY TWO POINTS IN SPACE
  var p0 = createVector(width/2 ,height/2);
  var p1 = createVector(width/2,height/2-100);
  
  stroke(0);
  strokeWeight(10);
  line(p0.x,p0.y,p1.x,p1.y);
  
  var changeVec = createVector(0,-50);
  changeVec.rotate(radians(30));
  
  var p2 = p5.Vector.add(p1,changeVec);
  line(p1.x,p1.y,p2.x,p2.y);
  
  
  changeVec.rotate(radians(30));
  var p3 = p5.Vector.add(p2,changeVec);
  line(p2.x,p2.y,p3.x,p3.y);
}
