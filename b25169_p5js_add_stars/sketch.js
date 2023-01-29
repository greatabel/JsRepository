// 1.29
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function setup() {
    // put setup code here
    createCanvas(720, 400);
    // angleMode(DEGREES);


}


function draw() {
    background(221, 160, 221);
    strokeWeight(0);



    //呆毛
    fill(208, 32, 144);
    beginShape();
    vertex(280, 100);
    vertex(240, 120);
    vertex(270, 130);
    endShape(CLOSE);

    //腿
    fill(255, 245, 238);
    beginShape();
    vertex(340, 200);
    vertex(230, 320);
    vertex(265, 325);
    vertex(350, 220);
    endShape(CLOSE);

    beginShape();
    vertex(320, 210);
    vertex(310, 340);
    vertex(340, 335);
    vertex(350, 210);
    endShape(CLOSE);

    //裙子
    fill(139, 80, 80);
    beginShape();
    vertex(270, 250);
    vertex(250, 275);
    vertex(280, 280);
    vertex(280, 283);
    vertex(320, 288);
    vertex(335, 280);
    vertex(355, 290);
    vertex(380, 280);
    vertex(365, 255);
    endShape(CLOSE);

    //衣服
    fill(54, 54, 54);
    triangle(330, 120, 270, 250, 365, 255);



    //头发
    fill(90, 10, 90);
    ellipse(300, 150, 110, 110);

    fill(255, 245, 238);
    ellipse(300, 150, 80, 85);

    fill(90, 10, 90);
    beginShape();
    vertex(270, 110);
    vertex(290, 140);
    vertex(315, 135);
    vertex(310, 100);
    endShape(CLOSE);

    beginShape();
    vertex(300, 120);
    vertex(340, 140);
    vertex(330, 110);
    vertex(300, 100);
    endShape(CLOSE);

    beginShape();
    vertex(280, 110);
    vertex(280, 140);
    vertex(260, 120);
    endShape(CLOSE);

    beginShape();
    vertex(260, 115);
    vertex(240, 190);
    vertex(260, 210);
    vertex(270, 120);
    endShape(CLOSE);

    beginShape();
    vertex(246, 140);
    vertex(235, 190);
    vertex(260, 160);
    endShape(CLOSE);

    beginShape();
    vertex(354, 140);
    vertex(360, 190);
    vertex(350, 175);
    vertex(348, 185);
    vertex(330, 160);
    endShape(CLOSE);

    beginShape();
    vertex(260, 190);
    vertex(270, 210);
    vertex(275, 180);
    endShape(CLOSE);


    //挑染
    fill(208, 32, 144);
    beginShape();
    vertex(265, 140);
    vertex(255, 200);
    vertex(260, 210);
    vertex(270, 120);
    endShape(CLOSE);


    fill(139, 10, 80);
    beginShape();
    vertex(270, 180);
    vertex(345, 170);
    vertex(350, 200);
    vertex(285, 220);
    vertex(280, 215);
    vertex(285, 200);
    vertex(275, 190);
    endShape(CLOSE);

    fill(90, 10, 90);
    beginShape();
    vertex(340, 130);
    vertex(310, 190);
    vertex(335, 190);
    vertex(350, 130);
    endShape(CLOSE);

    //挑染
    fill(208, 32, 144);
    beginShape();
    vertex(347, 140);
    vertex(330, 190);
    vertex(335, 190);
    vertex(350, 130);
    endShape(CLOSE);

    beginShape();
    vertex(280, 125);
    vertex(290, 140);
    vertex(295, 139);
    endShape(CLOSE);

    fill(54, 54, 54);
    ellipse(317, 150, 5, 18);
    ellipse(285, 150, 5, 18);

    //红晕
    fill(255, 195, 103);
    beginShape();
    vertex(280, 160);
    vertex(275, 168);
    vertex(276, 168);
    vertex(281, 160);
    endShape(CLOSE);
    beginShape();
    vertex(278, 160);
    vertex(273, 168);
    vertex(274, 168);
    vertex(279, 160);
    endShape(CLOSE);
    beginShape();
    vertex(276, 160);
    vertex(271, 168);
    vertex(272, 168);
    vertex(277, 160);
    endShape(CLOSE);
    beginShape();
    vertex(282, 160);
    vertex(277, 168);
    vertex(278, 168);
    vertex(283, 160);
    endShape(CLOSE);
    beginShape();
    vertex(284, 160);
    vertex(279, 168);
    vertex(280, 168);
    vertex(285, 160);
    endShape(CLOSE);
    beginShape();
    vertex(324, 160);
    vertex(319, 168);
    vertex(320, 168);
    vertex(325, 160);
    endShape(CLOSE);
    beginShape();
    vertex(322, 160);
    vertex(317, 168);
    vertex(318, 168);
    vertex(323, 160);
    endShape(CLOSE);
    beginShape();
    vertex(320, 160);
    vertex(315, 168);
    vertex(316, 168);
    vertex(321, 160);
    endShape(CLOSE);
    beginShape();
    vertex(318, 160);
    vertex(313, 168);
    vertex(314, 168);
    vertex(319, 160);
    endShape(CLOSE);
    beginShape();
    vertex(316, 160);
    vertex(311, 168);
    vertex(312, 168);
    vertex(317, 160);
    endShape(CLOSE);

    //手
    fill(255, 245, 238);
    ellipse(278, 205, 8, 20);
    ellipse(345, 203, 8, 20);
    ellipse(285, 215, 30, 30);
    ellipse(335, 210, 35, 30);
    //袖子
    fill(219, 112, 147);
    ellipse(280, 220, 35, 35);
    ellipse(340, 215, 35, 35);

    //光环
    stroke(255, 250, 165);
    strokeWeight(3);
    noFill();
    ellipse(300, 100, 80, 40);

        //1.29
// background(102);
  push();
  translate(width * 0.2, height * 0.2);
  rotate(frameCount / 200.0);
  star(0, 0, 30, 50, 5);
  pop();

  // push();
  // translate(width * 0.5, height * 0.5);
  // rotate(frameCount / 50.0);
  // star(0, 0, 80, 100, 40);
  // pop();

  push();
  translate(width * 0.8, height * 0.2);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 50, 5);
  pop();

}