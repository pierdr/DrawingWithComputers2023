/* THIS IS THE SIMPLEST DATA VISUALIZATION PROJECT */

/* VARIABLE DECLARATION */
let table;

var maxCo2;

var badColor;
var goodColor;

let sansserif;

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
  
  createCanvas(windowWidth*0.5, windowHeight);
   
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

}


function draw() {
  background(255);
  
  textAlign(RIGHT);
  text("Not All Foods Are Equal",width-25,height-28);
  textAlign(LEFT);
  
  let unit = height/(table.getRowCount()+2);
  
  for (i=0; i<table.getRowCount(); i++)
  {
    let foodName = table.getRow(i).obj.food;
    let co2 = table.getRow(i).obj.co2;
    let size = map(co2,0,maxCo2,0,width*0.8);
    let y = unit+(i*unit);
    let x = width*0.1;
    let colTmp = lerpColor(goodColor,badColor,map(co2,0,maxCo2,0.0,1.0));
    fill(colTmp);
    rect(x,y,size,10);
    fill(0);
    text(foodName+" "+co2,x,y-5);
    
  }
  
}
