function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0   );
   for(var i=0;i<100;i+=1)
   {
     stroke(0,i*2.5,i*2.5);
     line(i,0,i,100);
   }
}
