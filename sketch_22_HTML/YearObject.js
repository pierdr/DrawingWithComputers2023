// Year class to store the yearly data
class YearObject {
  constructor(year) {
    this.year = year;
    this.months = [];
    
  }

  addMonth(month, temperatureChange) {
    this.months.push({
      month: month,
      temperatureChange: temperatureChange,
      rect : {x:0,y:0,w:0,h:0}
    });
  }
  addPosition(monthIndex,x_,y_,w_,h_)
  {
    //console.log(this.months[monthIndex],monthIndex);
    this.months[monthIndex].rect.x = x_;
    this.months[monthIndex].rect.y = y_;
    this.months[monthIndex].rect.w = w_;
    this.months[monthIndex].rect.h = h_;
    
  }
  
 isMouseOver(month,margin) {
   var rectMonth = month.rect;
    if (mouseX > rectMonth.x-margin && mouseX < rectMonth.x + rectMonth.w + margin &&
        mouseY > rectMonth.y -margin && mouseY < rectMonth.y + rectMonth.h+margin) {
      return true;
    }
    return false;
  }
  
  show()
  {
    
    for(var j = 0;j< this.months.length;j++)
    {
      var hTmp = map(this.months[j].temperatureChange,-5,5,height/2,-height/2) ;
      var colIndex = map(this.months[j].temperatureChange,-5,5,0,1.0) ;
      var colTmp = lerpColor(color(2 , 224 , 243  ),color(229 , 57 , 70  ),colIndex);
      fill(colTmp);
      noStroke();
      var rectTmp = this.months[j].rect;
      var mouseOver = this.isMouseOver(this.months[j],5);
      if(mouseOver)
      {
        fill(255,0,0);
        stroke(colTmp);
      }
      rect(rectTmp.x,rectTmp.y,rectTmp.w,rectTmp.h);
      if(mouseOver)
      {
        fill(0);
        rect(rectTmp.x,rectTmp.y,200,15);
        fill(255);
        text(this.year+" "+this.months[j].month+" --> "+this.months[j].temperatureChange,rectTmp.x+10,rectTmp.y+12);
      }
    }
  }
}
