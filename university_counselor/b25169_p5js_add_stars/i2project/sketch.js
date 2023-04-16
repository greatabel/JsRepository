let x, y;
let angle = 0;
let radius = 200;
let shapeSize = 20;
let shapeX, shapeY;

let polygonSides = 5;

let snowflakes = []; // Array to store snowflake objects

function setup() {
  createCanvas(1000, 1000);
  x = width / 2;
  y = height / 2;
    // Create a random number of snowflakes each time the program starts
  for (let i = 0; i < random(50, 100); i++) {
    snowflakes.push(new Snowflake());
  }
}

function draw() {
  background(255, 255, 255);
  noStroke();

  // Draw butterfly shapes in a rotating pattern
  for (let i = 0; i < 360; i += 45) {
    let xpos = x + radius * cos(radians(angle + i));
    let ypos = y + radius * sin(radians(angle + i));
    let r = random(100, 200);
    let g = random(100, 200);
    let b = random(200, 255);
    fill(r, g, b, 150);
    butterfly(xpos, ypos, 150, 150);


    let r1 = random(0, 100);
    let g1 = random(100, 200);
    let b1 = random(200, 255);
    let size = random(150, 350);
    fill(r1, g1, b1, 150);
    ellipse(xpos, ypos, size, size);

  }

  // Draw smaller circles in a rotating pattern
  for (let i = 0; i < 360; i += 45) {
    let xpos = x + radius * cos(radians(angle + i));
    let ypos = y + radius * sin(radians(angle + i));
    let size = random(10, 30);
    let r2 = random(255);
    let g2 = random(255);
    let b2 = random(255);
    fill(r2, g2, b2);
    ellipse(xpos, ypos, size*5, size*5);

    rect(xpos, ypos, size*2, size*2);
  }


  // Draw moving flowers
  for (let i = 0; i < 360; i += 45) {
    let xpos = x + radius * cos(radians(angle + i));
    let ypos = y + radius * sin(radians(angle + i));
    let size = random(50, 120);
    let r3 = random(255);
    let g3 = random(255);
    let b3 = random(255);
    fill(r3, g3, b3);

    flower(xpos, ypos, size);



  }


  // Draw raindrops
  let rainCount = 50;
  for (let i = 0; i < rainCount; i++) {
    let xpos = random(0, width);
    let ypos = random(-height, 0);
    let length = random(10, 30);
    stroke(0, 0, 255);
    strokeWeight(2);
    line(xpos, ypos, xpos, ypos + length);
  }

  
  // Update angle for rotation
  angle += 1;

    // Update and display all the snowflakes
  for (flake of snowflakes) {
    flake.update();
    flake.display();
  }

}

// Function to draw a butterfly shape
function butterfly(x, y, w, h) {
  push();
  translate(x, y);
  rotate(radians(angle));
  rect(-w/2, -h/2, w/2, h/2);
  rect(0, -h/4, w/2, h/2);
  pop();
}

// Function to draw a flower
function flower(x, y, size) {
  push();
  translate(x, y);
  rotate(radians(angle));
}



// Snowflake class
class Snowflake {
  constructor() {
    this.x = random(0, width);
    this.y = random(-100, 0);
    this.size = random(2, 10);
    this.speed = random(1, 3);
  }

  // Move the snowflake downwards
  update() {
    this.y += this.speed;
    
    // If the snowflake reaches the bottom, send it back to the top
    if (this.y > height) {
      this.y = random(-100, 0);
      this.x = random(0, width);
    }
  }

  // Display the snowflake
  display() {
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

// let x, y;
// let angle = 0;
// let radius = 200;
// let shapeSize = 20;
// let shapeX, shapeY;

// function setup() {
//   createCanvas(1000, 1000);
//   x = width / 2;
//   y = height / 2;
// }

// function draw() {
//   background(255, 255, 255);
//   noStroke();

//   // Draw circles in a rotating pattern
//   for (let i = 0; i < 360; i += 15) {
//     let xpos = x + radius * cos(radians(angle + i));
//     let ypos = y + radius * sin(radians(angle + i));
//     let size = random(150, 350);
//     let r = random(0, 100);
//     let g = random(100, 200);
//     let b = random(200, 255);
//     fill(r, g, b, 150);
//     ellipse(xpos, ypos, size, size);
//   }

//   // Draw smaller circles in a rotating pattern
//   for (let i = 0; i < 360; i += 45) {
//     let xpos = x + radius * cos(radians(angle + i));
//     let ypos = y + radius * sin(radians(angle + i));
//     let size = random(10, 30);
//     let r = random(255);
//     let g = random(255);
//     let b = random(255);
//     fill(r, g, b);
//     ellipse(xpos, ypos, size*5, size*5);
//   }

//   // Draw a moving shape
//   shapeX = x + radius * cos(radians(angle));
//   shapeY = y + radius * sin(radians(angle));
//   shapeX += sin(radians(angle)) * 5;
//   shapeY += cos(radians(angle)) * 5;
//   let shapeR = random(255);
//   let shapeG = random(255);
//   let shapeB = random(255);
//   fill(shapeR, shapeG, shapeB);
//   rect(shapeX, shapeY, shapeSize, shapeSize);

//   // Draw a rotated square in the center
//   push();
//   translate(x, y);
//   rotate(radians(angle));
//   fill(255, 0, 0);
//   rect(-shapeSize/2, -shapeSize/2, shapeSize*4, shapeSize*4);
//   pop();

//   // Update angle for rotation
//   angle += 1;
// }


// ----------------------- my way ---
// let x, y;
// let angle = 0;
// let radius = 200;
// let shapeSize = 20;
// let shapeX, shapeY;

// function setup() {
//   createCanvas(1000, 1000);
//   x = width / 2;
//   y = height / 2;
// }

// function draw() {
//   background(255);
//   noStroke();


//   for (let i = 0; i < 360; i += 15) {
//     let xpos = x + radius * cos(radians(angle + i));
//     let ypos = y + radius * sin(radians(angle + i));
//     // let r = random(255);
//     // let g = random(255);
//     // let b = random(255);
//     // fill(0, g, b);
//     ellipse(xpos, ypos, 350, 350);

//   }

//   for (let i = 0; i < 360; i += 45) {
//     let xpos = x + radius * cos(radians(angle + i));
//     let ypos = y + radius * sin(radians(angle + i));
//     let size = random(10, 30);
//     let r = random(255);
//     let g = random(255);
//     let b = random(255);
//     fill(r, g, b);
//     ellipse(xpos, ypos, size*5, size*5);


//   shapeX = x + radius * cos(radians(angle));
//   shapeY = y + radius * sin(radians(angle));
//   shapeX += sin(radians(angle)) * 5;
//   shapeY += cos(radians(angle)) * 5;

//   let shapeR = random(255);
//   let shapeG = random(255);
//   let shapeB = random(255);
//   fill(shapeR, shapeG, shapeB);


//   }

//   angle += 2;


// }


// ------------ ------------ ------------------------ 3d version 
// var rotation = 0;

// function setup() {
//   createCanvas(1000, 1000, WEBGL);
// }



// // twitter 旋转版本 + 3D + 多体 + Phenakistoscope
// var angle = 0;
// var spinning = true;
// var numImages = 3;
// var imageArray = [];
// var imageIndex = 0;

// function preload() {
//   for (var i = 0; i < numImages; i++) {
//     imageArray[i] = loadImage( i + ".png");
//   }
// }

// // function setup() {
// //   createCanvas(400, 400, WEBGL);
// // }

// function draw() {
//   background(200);



//   rotateX(rotation);
//   rotateY(rotation * 1.3);
//   rotateZ(rotation * 0.7);

//   noStroke();
//   fill(255, 0, 0);
//   torus(150, 30);

//   fill(255, 255, 0);
//   box(50);

//   fill(0, 0, 255);
//   sphere(30);

//   rotation += 0.01;

//   if (spinning) {
//     angle += 0.03;
//   }
//   translate(0, 0, -200);
//   rotateY(angle);
//   texture(imageArray[imageIndex]);
//   plane(200, 200);
//   if (frameCount % 10 == 0) {
//     imageIndex++;
//     if (imageIndex >= numImages) {
//       imageIndex = 0;
//     }
//   }
// }

// function mousePressed() {
//   spinning = !spinning;
// }




// ------------ ------------ ------------------------
// function setup() {
//   createCanvas(400, 400);
//   frameRate(60);
// }
// var t = 0;
// var n = 6;
// var size = 100;
// var rot = 0;

// function draw() {
//   background(255, 255, 255);
  
//   push();
//   translate(width/2, height/2);
//   rotate(rot);
//   for (var i = 0; i < n; i++) {
//     push();
//     rotate(TWO_PI / n * i);
//     var s = sin(t + TWO_PI / n * i);
//     fill(color(255 * s, 0, 0));
//     ellipse(0, 0, size * s, size * s);
//     fill(color(0, 255 * s, 0));
//     ellipse(0, 0, size * (1 - s), size * (1 - s));
//     pop();
//   }
//   pop();
//   t += 0.05;
//   rot += 0.05;
// }

//--------

// function setup() {
//   createCanvas(400, 400);
// }

// var x = 200;
// var y = 200;
// var size = 100;
// var angle = 0;
// var t = 0;
// var n = 8;
// var rot = 0;

// function draw() {
//   background(255, 255, 255);
  
//   push();
//   translate(x, y);
//   rotate(angle);
//   for (var i = 0; i < n; i++) {
//     push();
//     rotate(TWO_PI / n * i);
//     var s = sin(t + TWO_PI / n * i);
//     fill(color(255 * s, 0, 0));
//     ellipse(0, size * s, 50, 50);
//     pop();
//   }
//   pop();
//   angle += 0.01;
//   t += 0.01;
// }

// --- 宣传立方体方案

// function setup() {
//   createCanvas(400, 400, WEBGL);
//   frameRate(60);
// }

// var x1 = 0;
// var y1 = 0;
// var z1 = 0;
// var x2 = 100;
// var y2 = 100;
// var z2 = 100;
// var speed1 = 0.05;
// var speed2 = 0.1;
// var size = 50;
// var t = 0;
// var n = 6;
// var rot = 0;

// function draw() {
//   background(255, 255, 255);
  
//   push();
//   translate(x1, y1, z1);
//   fill(255, 0, 0);
//   box(size);
//   pop();
  
//   push();
//   translate(x2, y2, z2);
//   fill(0, 255, 0);
//   sphere(size);
//   pop();
  
//   x1 += speed1;
//   y1 += speed1;
//   z1 += speed1;
//   x2 += speed2;
//   y2 += speed2;
//   z2 += speed2;
  
//   push();
//   translate(0, 0, 100);
//   rotateY(rot);
//   for (var i = 0; i < n; i++) {
//     push();
//     rotateY(TWO_PI / n * i);
//     var s = sin(t + TWO_PI / n * i);
//     fill(color(255 * s, 0, 0));
//     box(50 * s, 50 * s, 50 * s);
//     pop();
//   }
//   pop();
//   t += 0.01;
//   rot += 0.01;
  
//   // Collision Detection
//   if (abs(x1 - x2) < size && abs(y1 - y2) < size && abs(z1 - z2) < size) {
//     speed1 *= -1;
//     speed2 *= -1;
//   }
// }




// --- 方案立方体 篮球方案 
// function setup() {
//   createCanvas(1000, 1000, WEBGL);
// }


// var x1 = 0;
// var y1 = 0;
// var z1 = 0;
// var x2 = 100;
// var y2 = 100;
// var z2 = 100;
// var speed1 = 0.05;
// var speed2 = 0.1;
// var size = 50;
// var angle = 0;
// var r = 100;
// var h = 100;
// var color1;
// var color2;


// function draw() {
//   background(255, 255, 255);
  
//   color1 = color(255, 0, 0);
//   color2 = color(0, 255, 0);
  
//   push();
//   translate(x1, y1, z1);
//   fill(color1);
//   box(size);
//   pop();
  
//   push();
//   translate(x2 + r * cos(angle), y2 + r * sin(angle), z2 + h * sin(angle));
//   fill(color2);
//   sphere(size);
//   pop();
  
//   angle += speed1;
//   z1 += speed1;
//   z2 += speed2;
  
//   if (x1 + size >= x2 + r * cos(angle) && x1 <= x2 + r * cos(angle) + size && 
//       y1 + size >= y2 + r * sin(angle) && y1 <= y2 + r * sin(angle) + size && 
//       z1 + size >= z2 + h * sin(angle) && z1 <= z2 + h * sin(angle) + size) {
//     speed1 = -speed1;
//     speed2 = -speed2;
//     color1 = color(random(255), random(255), random(255));
//     color2 = color(random(255), random(255), random(255));
//   }
// }

// ---------------------


// function setup() {
//   createCanvas(400, 400, WEBGL);
// }

// var x1 = 0;
// var y1 = 0;
// var z1 = 0;
// var x2 = 100;
// var y2 = 100;
// var z2 = 100;
// var speed1 = 2;
// var speed2 = 4;
// var size = 50;


// function draw() {
//   background(255, 255, 255);
//   noStroke();
//   fill(255, 0, 0);
//   box(size);
//   translate(x1, y1, z1);
//   fill(0, 255, 0);
//   box(size);
//   translate(x2, y2, z2);
  
//   x1 += speed1;
//   y1 += speed1;
//   z1 += speed1;
//   x2 -= speed2;
//   y2 -= speed2;
//   z2 -= speed2;
  
//   if (x1 + size >= x2 && x1 <= x2 + size && y1 + size >= y2 && y1 <= y2 + size && z1 + size >= z2 && z1 <= z2 + size) {
//     speed1 = -speed1;
//     speed2 = -speed2;
//     fill(random(255), random(255), random(255));
//   }
// }



// 立方体旋转和碰撞
// var angle = 0;
// var boxes = [];
// var numOfBoxes = 20;

// function setup() {
//   createCanvas(400, 400, WEBGL);
//   for (var i = 0; i < numOfBoxes; i++) {
//     boxes[i] = new Box();
//   }
// }


// function draw() {
//   background(255, 255, 255);
//   rotateX(angle);
//   rotateY(angle * 1.3);
//   rotateZ(angle * 0.7);
  
//   for (var i = 0; i < boxes.length; i++) {
//     boxes[i].display();
//     boxes[i].update();
//   }
  
//   angle += 0.05;
// }



// class Box {
//   constructor() {
//     this.x = random(-200, 200);
//     this.y = random(-200, 200);
//     this.z = random(-200, 200);
//     this.speed = random(1, 4);
//     this.size = random(20, 50);
//   }
  
//   display() {
//     push();
//     translate(this.x, this.y, this.z);
//     box(this.size);
//     pop();
//   }
  
//   update() {
//     this.x = this.x + sin(angle) * this.speed;
//     this.y = this.y + cos(angle) * this.speed;
//     this.z = this.z + sin(angle) * this.speed;
    
//     if (this.x + this.size >= width/2 || this.x <= -width/2) {
//       this.speed = -this.speed;
//     }
//     if (this.y + this.size >= height/2 || this.y <= -height/2) {
//       this.speed = -this.speed;
//     }
//     if (this.z + this.size >= width/2 || this.z <= -width/2) {
//       this.speed = -this.speed;
//     }
//   }
// }
