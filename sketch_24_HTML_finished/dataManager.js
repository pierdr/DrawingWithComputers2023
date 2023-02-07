function loadData()
{
  /*** LOAD THE DATA ***/
  // Get the number of rows in the csv file
  let rows = data.getRowCount();
  
  // Loop through each row of the data
  for (let i = 0; i < rows; i++) {
    for(let j = 1980;j<2019;j++)
    {
      let value = parseFloat(data.getString(i, "Y"+j));
      let month = data.getString(i, "MonthsCode");
      console.log("year:",j," month:", month," value:",value);
      
      // Check if there's already a Year object for this year
      
      /*this is pretty confusing, but it's important to understand callbacks. 
        basically we can pass a function as an argument to another function, and that function helps us sort, find etc.. 
      
      Here is an explanation of what it's happening:
      
      const array1 = [5, 12, 8, 130, 44];
      const found = array1.find(function(element){return element > 10});
      
      In this example, the callback function checks if the current element (the number) is greater than 10. If the condition is true, then the function returns the value of that element and stops searching through the rest of the array. If the condition is not met, the function will continue searching through the rest of the array until a value that satisfies the condition is found or the end of the array is reached.
        
      */
      let thisYear = years.find(function(element){
        
         return element.year == j;
      });
      
      
      if (!thisYear) {
        // If not, create a new Year object for this year
        thisYear = new YearObject(j);
        years.push(thisYear);
      }
      thisYear.addMonth(month, value);
    }
    
    
  }
  //DONE LOADING
  console.log("done loading "+years.length+"years of data");
}

function calculatePositionOfEachYearMonth()
{
   //Calculate positioning of each element
  //THis is good to do here so we don't need to do it every frame
  var unit = ( width/(years.length*12) );
  for(var i = 0;i<years.length;i++)
  {
  
    for(var j = 0;j< years[i].months.length;j++)
    {
      var valTmp = years[i].months[j].temperatureChange;
      var hTmp = map(valTmp,-5,5,-height/2,+height/2) ;
      var colTmp = map(valTmp,-5,5,0,1.0) ;
      fill(lerpColor(color(2 , 224 , 243  ),color(229 , 57 , 70  ),colTmp));
      noStroke();
      if(valTmp >0)
      {
        years[i].addPosition(j,((i*12)+j)*unit, height/2 - hTmp   , unit,abs(hTmp));
      }
      else
      {
        years[i].addPosition(j,((i*12)+j)*unit, height/2, unit, abs(hTmp));
      }
      
    }
  }
}
function clearHTML()
{
  var ul = document.getElementById("list");
   ul.innerHTML = "";
    console.log("clear",ul.innerHTML);
}
