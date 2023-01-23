function setup() {
  createCanvas(windowWidth,windowHeight);
}


function draw() {
  background(239  ,212,  108  );
  
  //THESE VECTORS SPECIFY TWO POINTS IN SPACE
  var p0 = createVector(width/2 ,height/2);
  var p1 = createVector(width/2,height/2-100);
  var changeVec = createVector(0,-50);
  for(var i=0;i<20;i++)
  {
    stroke(0);
    strokeWeight(10);
    line(p0.x,p0.y,p1.x,p1.y);
    p0.x = p1.x;
    p0.y = p1.y;
    changeVec.normalize(); 
    changeVec.mult(map(mouseY,0,height,1,100));
    console.log(changeVec.mag());
    changeVec.rotate( radians(map(mouseX,0,width,0,90) ) );
    
    p1 = p5.Vector.add(p1,changeVec);
  }
 
  
  
}
