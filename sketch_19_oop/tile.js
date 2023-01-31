class Tile{
   constructor(x_,y_,size_,image_)
   {
     this.pos = createVector(x_,y_);
     this.tile = image_;
     this.size = size_;
   }
   
   show()
   {
     var distance = p5.Vector.dist(this.pos,mouse_v);
     var tmpSize = constrain(map(distance,width*0.25,0.0,this.size,this.size*2.5),this.size,this.size*2.5);
     image(this.tile,this.pos.x,this.pos.y,tmpSize,tmpSize);
   }
}
