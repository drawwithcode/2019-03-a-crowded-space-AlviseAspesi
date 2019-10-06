function preload() {
  // put preload code here
}

//define the bacteria's aspect
var bacteria;

//define variable "greenBacteria" and "redBacteria"
var greenBacteria = [];
var redBacteria = [];

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
  for (var i = 0; i < random(1000, 4000); i++) {
    greenBacteria[i] = new goodBacteria();
  }

  //setup how many redbacteria will display and match the redBacteria to the badBacteria
  for (var i = 0; i < random(10, 50); i++) {
    redBacteria[i] = new badBacteria();
  }
}

function mousePressed() {

}


function draw() {
  background(color("#49BD61"));

  //draw the greenBacteria
  for (var i = 0; i < greenBacteria.length; i++) {
    greenBacteria[i].move();
    greenBacteria[i].display();
  }

  //draw the redBacteria
  for (var i = 0; i < redBacteria.length; i++) {
    redBacteria[i].move();
    redBacteria[i].display();
  }
}

//create the goodBacteria, the green ones
function goodBacteria() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    var index = floor(random() * colorList1.length);
    var colorS = colorList1[index];
    stroke(color(colorS));
    fill(color(0, 128, 0, 75));
    bacteria: {
      rect(this.x, this.y, 25, 10, 5);
      rect(this.x + 24, this.y, 25, 10, 5);
    }
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

  this.display = function() {
      var index = floor(random() * colorList2.length);
      var colorS = colorList2[index];
      stroke(color(colorS));
      fill(color(255, 0, 0, 75));
      bacteria: {
        rect(this.x, this.y, 20, 4, 5);
        rect(this.x + 20, this.y, 20, 4, 5);
      }
    }

  this.clicked = function() {

  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
