function preload() {
  // put preload code here
}

//define variable "greenBacteria" and "redBacteria"
var gB = [];
var rB = [];

//define stroke color for bacteria
var colorList1 = ["green", "lime"];
var colorList2 = ["red", "yellow"];

//define variable to play audio
var audio;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //setup the audio in background
  //audio = createAudio("assets/sound.mp3");
  //audio.autoplay(true);
  //audio.loop();

  //setup how many greenbacteria will display and match the greenBacteria to the goodBacteria
  for (var i = 0; i < random(2000, 4000); i++) {
    gB[i] = new goodBacteria();
  }

  //setup how many redbacteria will display and match the redBacteria to the badBacteria
  for (var j = 0; j < random(10, 100); j++) {
    rB[j] = new badBacteria();
  }
}

function draw() {
  background("#49BD61");

  //draw the greenBacteria
  for (var i = 0; i < gB.length; i++) {
    gB[i].move();
    gB[i].display();
  }

  //draw the redBacteria
  for (var i = 0; i < rB.length; i++) {
    rB[i].move();
    rB[i].display();
  }
}

function mousePressed() {
  for (var i = 0; i < rB.length; i++) {
    rB[i].click();
  }
}

//create the goodBacteria, the green ones
function goodBacteria() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.r = random(5, 10);

  this.display = function() {
    var index = floor(random() * colorList1.length);
    var colorS = colorList1[index];
    stroke(color(colorS));
    fill(color(0, 128, 0, 75));
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

//create the badBacteria, the red ones
function badBacteria() {
  this.x = random(0, width),
  this.y = random(0, height),
  this.r = random(5, 10);

  this.display = function() {
    var index = floor(random() * colorList2.length);
    var colorS = colorList2[index];
    stroke(color(colorS));
    fill(color(255, 0, 0, 75));
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.click = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.r) {
      this.r = 0;
      rB.push(new badBacteria());
    }
  }

}
