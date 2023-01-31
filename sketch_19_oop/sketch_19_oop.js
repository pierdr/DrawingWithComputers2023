
var imageNames = ["HyphaSiphonaria.jpg", "Jellyfish.jpg", "Mollusques.jpg"];
var tiles = [];
var mouse_v;



function setup() {
  createCanvas(windowWidth, windowHeight);

  var unit = width/6;

  imageNames.forEach(function(title, index) {
    loadImage('data/'+title, img => {
      tiles[index] = new Tile((index*2)*unit+unit, height/2, unit, img);
    }
    );
  }
  );
  imageMode(CENTER);
}


function draw() {
  background(0);

  mouse_v = createVector(mouseX,mouseY);
  
  tiles.forEach((tile)=>{ 
    tile.show();
  });
}
