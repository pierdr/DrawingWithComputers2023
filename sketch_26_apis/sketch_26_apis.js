var img;
var imageLoaded = false;
function setup() {
  createCanvas(400, 400);

  const keyword = 'Trichophorum bracteatum';
  loadJSON(`http://localhost:3000/search?q=${keyword}`, handleApiResponse);
}

function handleApiResponse(data) {
  console.log(data.value);
   img = loadImage(data.value, function() {
      console.log("image loaded");
      imageLoaded = true;
    });
  // do something with the data retrieved from the API
}

function draw() {
  background(220);
  if(imageLoaded)
  {
    image(img,0,0,width,height);
   }
}
