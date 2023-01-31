class InteractiveSlowCircle
{
  
  
  constructor(x_,y_)
  {
    this.pos = createVector(x_,y_);
    this.radius = 100;
    this.colors = {mouseIn:color(101 , 161 , 232  ),mouseOut:color(151 , 113  ,212   )};
    
    this.currentColor = this.colors.mouseOut;
    this.delayActions = 0;
    this.actionFired = 0;
    this.doChangeColor = false;
  }
  changeColor(){
    
    this.currentColor = this.colors.mouseOut;
   
  }
  changeColorDelayed(delay_){
    this.actionFired = millis();
    
    this.delayActions =(delay_==undefined)?0 : delay_;
    this.doChangeColor = true;
    console.log("change color:",this.doChangeColor);
  }
  
  show()
  {
   
    if(millis()-this.actionFired > this.delayActions && this.doChangeColor)
    {
      this.currentColor = color(random(0,255),random(0,255),random(0,255));
      this.doChangeColor = false;
    }
    fill(this.currentColor );
    ellipse(this.pos.x,this.pos.y,this.radius*2,this.radius*2);
    
  }
  checkIfMouseInside()
  {
    let mouse_v = createVector(mouseX,mouseY);
    if(p5.Vector.dist(this.pos,mouse_v) > this.radius)
    {
      return false;
    }
    else
    {
     return true;
    }
  }
}
