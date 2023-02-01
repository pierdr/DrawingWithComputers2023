class Flower{
  
 constructor(x_,y_,size_)
 {
   this.pos = createVector(x_,y_);
   
   this.size = size_;
   this.x = x_;
 }
  
  show()
  {
    
    var distMF = p5.Vector.dist(this.pos,mouse_v);
   
    var mult = constrain( map(distMF,0,width/2,1.5,1.0) , 1.0,5.0);
     //console.log("test",distMF,mult);
    //stem
    line(this.pos.x,this.pos.y,this.pos.x,this.pos.y+50);
    
    //head
    ellipse(this.pos.x,this.pos.y,this.size*mult,this.size*mult);
    
    console.log(this.x);
  }
  
  
}
