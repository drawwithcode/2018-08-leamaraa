var value = 0;
let particles = [];
var pallino = 0;
var myFont;

function preload(){
  myFont = loadFont("./assets/Bagnard.otf");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  setShakeThreshold(6);
  frameRate(10);
}

function draw() {
  background(0);
  textFont('Bagnard');
  textSize(18);
  textAlign(CENTER);
  text("Shake the situation!",windowWidth/2,60);
    if(deviceShaken())
    {pallino=100} else
    {pallino=0};
}

function deviceShaken() {
  let p = new Particle();
  particles.push(p);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {

  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    var ciao = 1; //modificato! numero piccolo, stanno
    this.vx = random(-ciao, ciao);
    this.vy = random(-ciao, ciao);
    this.alpha = (255);
  }

  update() {
    this.x += this.vx*4;
    this.y += this.vy*4;
    this.alpha -= 4;
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 35)
  }
}

function mousePressed() {
  // store in a variable the current state
  // by calling “fullscreen” without arguments
  // you get either true or false
  var fs = fullscreen();
  // then enter or exit the full screen mode
  fullscreen(!fs);
}

function windowResized() {
  // resize canvas when switching into/from full screen
  resizeCanvas(windowWidth, windowHeight);
}
