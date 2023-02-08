let years = [];
let list = [];
let model;

function preload() {
  // Load the data from the csv file
  data = loadTable("data/dataset.csv", "csv", "header");
  
}

function setup() {
   createCanvas(windowWidth,windowHeight/2);


  loadData();
  calculatePositionOfEachYearMonth();
  console.log(years);
  
  model = new Model();
  
  //ADD EVENT LISTENERS
  var button = document.getElementById("clear_button");
  button.addEventListener("click",function(){
    model.emptyList();
  });
  
  
  var ul = document.getElementById("list");
  ul.innerHTML = "";
 for(var i = 0;i<years.length;i++)
  {
    for(var j=0;j<years[i].months.length;j++)
    {
      var li = createElement("li",years[i].year+" "+years[i].months[j].month+"-->"+years[i].months[j].temperatureChange);
      li.parent(ul);
    }
  }
  
  
}
function draw() {
  background(233,196,107);
  
  
  stroke(77);
  line(0,height/2,width,height/2);
  
  for(var i = 0;i<years.length;i++)
  {
    years[i].show();
  }
  

}

function mouseClicked()
{
  
  for(var i = 0;i<years.length;i++)
  {
    for(var j=0;j<years[i].months.length;j++)
    {
      if(years[i].isMouseOver(years[i].months[j],5))
      {
        //MOUSE IS PRESSED OVER THIS MONTH AND YEAR
        console.log(years[i].year,years[i].months[j].month);
        //ADD THEM TO THE HTML PAGE
        model.addItem(years[i].year+" "+years[i].months[j].month+"-->"+years[i].months[j].temperatureChange);
        
      }
    }
  }
  console.log(model);
  
  //var ul = document.getElementById("list");
  //ul.innerHTML = "";
  //for( var k=0 ; k<model.list.length ;k++)
  //{
  //  var li = createElement("li",model.list[k]);
  //  li.parent(ul);
  //}
  
}
