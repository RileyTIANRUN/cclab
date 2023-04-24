let h=400;
let l=1;

function setup() {

  let cnv=createCanvas(800, 800);
  cnv.parent(canvasContainer1);
}

function draw() {
  background(186,219,255);
  noStroke();
  fill(108,236,142)
  rect(0,300,width,500);
  fill(102,51,0);
  ellipse(400,600,300,100);
  drawCreature(width/2, h);
 if(h<450&&l==1){
   h+=1;
   l=1
 }
  else if(h>450&&l==1){
    l=-1
  }
  else if(l=-1){
    h--
  if(h<400){
    l=1;
  }
  }
}

function drawCreature(x, y) {
  push();
  translate(x, y);
  drawbody(0,50);
  drawhead(0,0);
  
  // YOUR CODE GOES HERE
  // introduce additional functions
  // for parts of your creature that
  // are repeated, and call them from
  // here

  pop();
}

function drawhead(){
  push();
  translate();
  stroke(250,156,241);
  strokeWeight(5);
  fill(255,174,248);
  //ellipse(0,0,100,110)
  
  push();
  rotate(0.15);
  arc(0,-55,20,50,PI*(1-1/3),PI*(1-2/3))
  pop();
  push();
  rotate(0.5)
  arc(10,-55,20,50,PI*(1-1/3),PI*(1-2/3))//ears
  pop();
  
  
  noStroke();
  circle(0,0,90);
  circle(5,-47,10);
  stroke(250,156,241);
  strokeWeight(5)
  
  beginShape();
  arc(0,0,100,110,3.1*PI/2,1.2*PI/2);
  arc(-8,10,90,90,PI/2,PI*1.1);
  arc(-36,-30,100,60,PI/2,3*PI/2);
  arc(-36,-10,200,100,3*PI/2,3.5*PI/2)
  endShape(CLOSE);//head
  
  
  ellipse(-70,-30,30,40)
  noStroke();
  fill(238,149,229);
  circle(-76,-31,8);
  circle(-66,-29,8);//nose
  
  stroke(250,156,241);
  strokeWeight(5);
  fill(255);
  circle(-20,-40,20);
  circle(8,-33,20);
  
  noStroke();
  fill(0);
  circle(-24,-40,7)
  circle(4,-33,7)//eyes
  
  push();
  rotate(0.2)
  stroke(250,156,241);
  strokeWeight(5);
  fill(0);
  arc(-10,15,50,50,PI*(2),PI*(1));
  fill(255,174,248);
  arc(-10,14,50,15,PI*(2),PI*(1));
  pop();
  
  fill(255,154,246);
  ellipse(28,0,26)
  
  
  pop();
}

function drawbody(x,y){
  push()
  translate(x,y);
  stroke(255,0,0);
  strokeWeight(5)
  fill(255,100,100);
  quad(-40,-10,40,-10,60,80,-60,80)
  //circle(0,0,5);
  stroke(255,174,248)
  line(-45,20,-80,30)
  line(45,20,80,30)
  line(-70,25,-80,20)
  line(-65,25,-73,40)
  line(70,25,80,20)
  line(65,25,73,40)
  line(30,80,30,100)
  line(-30,80,-30,100)
  line(50,60,70,50)
  stroke(0)
  fill(0)
  ellipse(-40,100,30,5)
  ellipse(20,100,30,5)
  pop()
  
}