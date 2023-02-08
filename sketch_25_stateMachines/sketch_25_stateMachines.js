let currentState;

const states = {
  INIT: 0,
  RECTANGLE: 1,
  TRIANGLE: 2,
  ELLIPSE: 3
};
//const INIT = 0;
//const RECT = 1;
//const TRI = 2;
//const ELLIPSE =3;

const stateNames = ["INIT","RECT","TRI","ELLIPSE"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentState = states.INIT;
}

function draw() {
  background(252  ,146  ,132  );

  
  
  switch(currentState)
  {
    case states.INIT:
      break;
      case states.RECTANGLE:
      rectMode(CENTER);
      fill(141,  113,  184  );
      rect(width / 2, height / 2, 100, 100);
    break;
    case states.TRIANGLE:
      fill(106  ,173  ,156  );
      triangle(width / 2, height / 2 - 50, width / 2 - 50, height / 2 + 50, width / 2 + 50, height / 2 + 50);
    break;
    case states.ELLIPSE:
      fill(87  ,114,  220    );
      ellipse(width / 2, height / 2, 100, 100);
    break;
    
  }
  
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  text(stateNames[currentState], width / 2, height / 2);
}

function mousePressed() {
  switch (currentState) {
    case states.INIT:
      changeState( states.RECTANGLE);
      break;
    case states.RECTANGLE:
      changeState( states.TRIANGLE);
      break;
    case states.TRIANGLE:
      changeState( states.ELLIPSE);
      break;
    case states.ELLIPSE:
      changeState( states.RECTANGLE);
      break;
  }
}
function changeState(newState)
{
  currentState = newState;
}
