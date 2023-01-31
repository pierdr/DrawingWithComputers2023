class InteractiveCircle
{
  
  
  constructor(x_,y_)
  {
    this.pos = createVector(x_,y_);
    this.radius = 100;
    this.colors = {mouseIn:color(101 , 161 , 232  ),mouseOut:color(151 , 113  ,212   )};
    
    this.currentColor = this.colors.mouseOut;
  }
  changeColorIfMouseIn(){
    let mouse_v = createVector(mouseX,mouseY);
    if(p5.Vector.dist(this.pos,mouse_v) > this.radius)
    {
      this.currentColor = this.colors.mouseIn;
    }
    else
    {
      this.currentColor = this.colors.mouseOut;
    }
  }
  resizeIfMouseIn()
  {
    let mouse_v = createVector(mouseX,mouseY);
    if(p5.Vector.dist(this.pos,mouse_v) > this.radius)
    {
      this.radius = 50;
    }
    else
    {
      this.radius = 100;
    }
  }
  show()
  {
    fill(this.currentColor );
    ellipse(this.pos.x,this.pos.y,this.radius*2,this.radius*2);
  }
}
