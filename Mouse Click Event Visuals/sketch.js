let circles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255);

  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.update();
    c.display();
  }
}

function mousePressed() {
  let size = random(50, 100);
  let color = getRandomColor();
  let x = mouseX;
  let y = mouseY;
  let circle = new Circle(x, y, size, color);
  circles.push(circle);
}

class Circle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.flashInterval = 60; // Flash interval in frames
    this.flashCounter = 0; // Counter for flashing
  }

  update() {
    this.flashCounter++;

    // Reset counter when it reaches the flash interval
    if (this.flashCounter >= this.flashInterval) {
      this.flashCounter = 0;
    }
  }

  display() {
    // Check if it's time to flash the circle
    if (this.flashCounter < this.flashInterval / 2) {
      fill(this.color);
    } else {
      fill(255); // White
    }

    // Check if the mouse is hovering over the circle
    if (dist(this.x, this.y, mouseX, mouseY) < this.size / 2) {
      fill(255, 255, 255, 200); // White with low opacity
    }

    ellipse(this.x, this.y, this.size, this.size);
  }
}

function getRandomColor() {
  let colors = ['rgb(255,228,212)', 'rgb(154,154,255)', 'darkmagenta','lavender','skyblue','darkviolet','rgb(14,248,248)','rgb(255,188,148)', 'rgb(255,196,72)'];
  return random(colors);
}
