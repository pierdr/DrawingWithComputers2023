var imgHawk,imgGrass;
var imageLoaded = false;

function setup() {
  createCanvas(400, 400);

  var keyword = 'Trichophorum bracteatum';
  loadJSON(`http://localhost:3000/search?q=${keyword}`, handleApiResponseGrass);
  keyword = 'hawk';
  loadJSON(`http://localhost:3000/search?q=${keyword}`, handleApiResponseHawk);
}

function handleApiResponseGrass(data) {
  console.log(data.value);
   imgGrass = loadImage(data.value, function() {
      console.log("image loaded");
      imageLoaded = true;
    });
  // do something with the data retrieved from the API
}
function handleApiResponseHawk(data)
{
   imgHawk = loadImage(data.value, function() {
      console.log("image loaded");
      imageLoaded = true;
    });
}

function draw() {
  background(220);
  //if(imageLoaded)
  //{
    if(imgHawk != null)
    {
      image(imgHawk,0,0,width/2,height);
    } 
    if(imgGrass != null)
    {
      image(imgGrass,width/2,0,width/2,height);
    } 
 //}
}
