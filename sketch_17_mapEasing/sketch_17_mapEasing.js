var settings = {
  value:
0
  };
const gui = new dat.GUI();
gui.add(settings, "value", 0.0, 100.0, 1.0);

function setup() {
  createCanvas(512, 768);
  console.log(map2(25.0,0.0,100.0,0.0,1.0, LINEAR, EASE_IN_OUT));
}


function draw() {
  background(198, 220, 249   );
  stroke(0);
  for (var i =0; i<6; i++)
  {
    line(100, 128*i, width-100, 128*i);
  }
  noStroke();
  fill(0);
  text("LINEAR", 90, 118);
  text("QUADRATIC", 90, 246);
  text("CUBIC", 90, 374);
  text("SINUSOIDAL", 90, 502);
  text("EXPONENTIAL", 90, 630);
  
  fill(0,0,0,15);
  //LINEAR
  let mappedX = map2(settings.value, 0, 100, 100, width - 100, LINEAR, EASE_IN_OUT);
  let mappedSize = map2(settings.value, 0, 100, 20, 100, LINEAR, EASE_IN_OUT);
  //console.log(settings.value,mappedX,mappedSize);
  ellipse(mappedX, 128, mappedSize, mappedSize);

  //QUADRATIC
  mappedX = map2(settings.value, 0, 100, 100, width - 100, QUADRATIC, EASE_IN_OUT);
  mappedSize = map2(settings.value, 0, 100, 20, 100, QUADRATIC, EASE_IN_OUT);
  ellipse(mappedX, 256, mappedSize, mappedSize);

  //CUBIC
  mappedX = map2(settings.value, 0, 100, 100, width - 100, CUBIC, EASE_IN_OUT);
  mappedSize = map2(settings.value, 0, 100, 20, 100, CUBIC, EASE_IN_OUT);
  ellipse(mappedX, 384, mappedSize, mappedSize);

  //SINUSOIDAL
  mappedX = map2(settings.value, 0, 100, 100, width - 100, SINUSOIDAL, EASE_IN_OUT);
  mappedSize = map2(settings.value, 0, 100, 20, 100, SINUSOIDAL, EASE_IN_OUT);
  ellipse(mappedX, 512, mappedSize, mappedSize);

  //EXPONENTIAL
  mappedX = map2(settings.value, 0, 100, 100, width - 100,EXPONENTIAL, EASE_IN_OUT);
  mappedSize = map2(settings.value, 0, 100, 20, 100, EXPONENTIAL, EASE_IN_OUT);
  ellipse(mappedX, 640, mappedSize, mappedSize);
}
