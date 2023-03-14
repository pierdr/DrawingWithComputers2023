/* THIS IS THE SIMPLEST DATA VISUALIZATION PROJECT */

/* VARIABLE DECLARATION */
let table;

var maxCo2;

var badColor;
var goodColor;

let sansserif;

//JSONArray 
//JSONObject

var array = [10,0.5,10,54,41,23,21,2];
var matrix =[[3,4,1],[6,7,3],[1,2,1]];
//key value
var json = {"laptop":1,"desktop":15,"smartphone":0.2,"watch":0.05};
var json2 = {"families":[{"specie1":"bird1"},{"specie2":"bird2"},{"specie3":"bird3"}]};
var stringJ2 = JSON.stringify(json2);

var lightFoods = [];

/* PRELOAD DATA */
function preload() {
  /* 
    Methods that have load, like loadTable, loadImage, loadFont
    tend to be used into preload. 
    
    Loading assets takes time and you don't want to do that while you are running your sketch
    (having a fragmented behavior, potentially)
  */
  table     = loadTable('data/food_co2.csv', 'csv', 'header');
  sansserif = loadFont('data/sansserif.ttf');
}


function setup() {
  
  console.log(stringJ2);
  var obj = JSON.parse(stringJ2);
  console.log(obj);
  
  
  
  createCanvas(windowWidth*0.5, windowHeight);
   
  console.log("array length:",array.length);
  
   for(var i=0;i<array.length;i++)
  {
    console.log("item"+i+":"+array[i]);
  }
  for(i=0;i<10;i++)
  {
    array.push(11);
  }
  console.log(array);
   
   console.log("smartphone:",json.smartphone);
   
   for(var k in json)
   {
     console.log("object for key "+k+" has value "+json[k]);
   }

   //for(i=0;i<json.keys.length;i++)
   //{
     
   //}
   //for( key : json)
   //{
   //  console.log();
   //}
   
  //VARIABLE INITIALIZATION 
  maxCo2 = 0;
  badColor = color(245, 91, 83  );
  goodColor = color(177, 254, 210  );
  
  //PARSE DATA AND FIND MAXIMUM AMOUNT OF CO2
  console.log(table.getRowCount() + " total rows in table");

//REPRESENTATION OF TABLE AS A SERIES OF ARRAYS
  for (var i=0; i<table.getRowCount(); i++)
  {
    var row = table.getRow(i).arr;
    console.log(row);
  }
  
//REPRESENTATION OF TABLE AS A SERIES OF OBJECTS
  for (i=0; i<table.getRowCount(); i++)
  {
    row = table.getRow(i).obj;
    console.log(row);
  }
  
   for (i=0; i<table.getRowCount(); i++)
  {
    row = table.getRow(i).arr;
    if(maxCo2 < row[1])
    {
      maxCo2 = row[1]-0;
    }
  }
  console.log("maxCO2:",maxCo2);
  //SET FONT
  textSize(18);
  textFont(sansserif);
  
  rectMode(CORNER);
  console.log("highest value:",getHighestValue());
}


function draw() {
  background(255);
  
  textAlign(RIGHT);
  text("Not All Foods Are Equal",width-25,height-28);
  textAlign(LEFT);
  
  let unit = height/(table.getRowCount()+2);
  
  //for (i=0; i<table.getRowCount(); i++)
  //{
  //  let foodName = table.getRow(i).obj.food;
  //  let co2 = table.getRow(i).obj.co2;
  //  let size = map(co2,0,maxCo2,0,width*0.8);
  //  let y = unit+(i*unit);
  //  let x = width*0.1;
  //  let colTmp = lerpColor(goodColor,badColor,map(co2,0,maxCo2,0.0,1.0));
  //  fill(colTmp);
  //  rect(x,y,size,10);
  //  fill(0);
  //  text(foodName+" "+co2,x,y-5);
    
  //}
  
}
function getHighestValue()
{
  var maxValue = 0;
  for (i=0; i<table.getRowCount(); i++)
  {
    let foodName = table.getRow(i).obj.food;
    let fat = table.getRow(i).obj.fat;
    if(fat>maxValue)
    {
      maxValue = fat;
    }
  }
  return maxValue;
}
function mouseMoved()
{
  lightFoods = [];
  var threshold = map(mouseX,0,width,0,getHighestValue());
  for (i=0; i<table.getRowCount(); i++)
  {
     let foodName = table.getRow(i).obj.food;
    let co2 = table.getRow(i).obj.co2;
    let fat = table.getRow(i).obj.fat;
    if(fat<threshold)
    {
      lightFoods.push({"name":foodName,"co2":co2,"fat":fat});
    }
  }
  console.log(lightFoods);
}
