let connection;
let receivedColor;

function setup() {
  createCanvas(400, 400);
  background(0);
  receivedColor = color(0,0,0);
  // Connect to web socket server on port 8009
  connection = new WebSocket('ws://10.28.78.30:8009');

  // When a message is received from the server
  connection.onmessage = function(event) {
    console.log(event);
    let data = JSON.parse(event.data);
    receivedColor = color(data.col.r, data.col.g, data.col.b);
    fill(receivedColor);
    rect(0, 0, width, height);
  };
}

function draw() {
  // No need to draw anything here
}

function keyPressed() {
  // When the spacebar is pressed
  if (keyCode === 32) {
    // Change the color to a variant of the original color
    let newColor = color(
      255-red(receivedColor),
      255-green(receivedColor),
      255-blue(receivedColor)
    );
    fill(newColor);
    rect(0, 0, width, height);

    // Send the new color back to the server
    let message = {
      col: {
        r: red(newColor),
        g: green(newColor),
        b: blue(newColor)
      }
    };
    socket.send(JSON.stringify(message));
  }
}
