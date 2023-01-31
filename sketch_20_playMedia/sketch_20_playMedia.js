let video;
function preload()
{
  video = createVideo(['data/giphy.mp4']);
  video.hide();
  
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    video.loop();
    imageMode(CENTER);
}


function draw() {
  background(150);
  image(video, width/2, height/2); // draw the video frame to canvas
  filter(GRAY);
  image(video, mouseX, mouseY);
}
