let ripples = [];
let drops = [];
let cl = [];
let r1 = [];
let r2=[];
let g1 = [];
let g2=[];
let b1 = [];
let b2=[];
let stage=0
let snowflow=[]
let foot=[]
let lightning=false
let lightcount=0
let flower=[]



function setup() {
    
  let cnv=createCanvas(1000,1000);
  cnv.parent("projectA");
  for (let i = -100; i <= width + 100; i++) {
    cl[i] = random(20, 45);
    r1[i] = random(10, 30);
    g1[i] = random(20, 30);
    b1[i] = random(0, 8);
  }
  for(let i=0;i<=height*3/4;i++){
    b2[i]=map(i,0,height*3/4,255,120)
  }
}





function draw() {
  text("You can change the weather by moving the mouse in the black place",width/2-200,height/2)
  text("Try to find the interaction by clicking",width/2-100,height/2+20)
  fill(0)
  rect(0,0,width,20)
  fill(255)
  text("rainy",width/8-10,12)
  rect(width/4-3,0,6,20)
  text("snowy",width*3/8-10,12)
  rect(width/2-3,0,6,20)
  text("sunny",width*5/8-10,12)
  rect(width/4*3-3,0,6,20)
  text("settings",width*7/8-15,12)
  fill(0)
  if(mouseX<width/4&&mouseX>0&&mouseY>0&&mouseY<20){
    stage=1
  }
  if(mouseX>width/4&&mouseX<width/2&&mouseY>0&&mouseY<20){
    stage=2
  }
  if(mouseX>width/2&&mouseX<width*3/4&&mouseY>0&&mouseY<20){
    stage=3
  }
  if(mouseX>width*3/4&&mouseX<width&&mouseY>0&&mouseY<20){
    stage=0
  }
  if(stage==1){
    weatherrain();
  }
  if(stage==2){
    weathersnow();
  }
  if(stage==3){
    weathersunny();
  }
  //console.log(stage)
 
}





function weatherrain(){
   fill(0);
  background(255);

  noStroke();
  for (let i = -100; i <= width + 100; i++) {
    fill(r1[i], g1[i], b1[i], 50);
    rect(i, 0, 20, (height * 3) / 4 - 40);
  }

  for (let i = -100; i <= width + 100; i++) {
    fill(cl[i], cl[i], cl[i], 20);
    rect(i, (3 * height) / 4 - 40, 100, height / 4 + 40);
  }
    fill(0)
  rect(0,0,width,20)
  fill(255)
  text("rainy",width/8-10,12)
  rect(width/4-3,0,6,20)
  text("snowy",width*3/8-10,12)
  rect(width/2-3,0,6,20)
  text("sunny",width*5/8-10,12)
  rect(width/4*3-3,0,6,20)
  text("settings",width*7/8-15,12)
  fill(0)
  // fill(random(56,85),random(55,90),random(54,89))
  // rect(0,3*height/4-50,width,height/4+50)
  // for(let i=0;i<=width;i+=10){
  //   for(let j=0;j<=height;j+=10){
  //     fill(0,random(21,119),255,20)
  //     circle(i,j,random(30,70))
  //   }
  // }
  if(mouseIsPressed==true){
    
    lightning=true
    lightcount=1
  }
  
  if(lightning==true){
    if(lightcount==10){
      lightcount=0
      lightning=false
    }
    if(lightcount%2!=0){
    fill(255,255,255,70)
    rect(0,0,width,height)
    }
    if(lightcount%2==0){
      fill(0,0,0,70)
      rect(0,0,width,height)
    }
    lightcount++
  }
  if (mouseIsPressed == true && mouseY > (height * 3) / 4 + 20) {
    ripples.push(new rain(mouseX, mouseY));
  }
  let ran = random(1, 5);
  if (ran > 2 && ran < 5) {
    ripples.push(new rain(random(width), random((3 * height) / 4, height)));
  }
  drops.push(new Drop(random(width), random(-20, 20)));

  drops.push(new Drop(random(width), random(-20, 20)));
  
  for (let i = 0; i < ripples.length; i++) {
    ripples[i].update();
    ripples[i].display();
    drops[i].update();
    drops[i].display();
  }
  fill(0);
  rect(80, 80, 30, (height * 3) / 4);
  rect(80, 80, 130, 30);
  fill(226, 210, 11, 30);
  triangle(190, 100, -10, (height * 3) / 4 + 80, 390, (height * 3) / 4 + 80);
  fill(2);
  triangle(190, 80, 120, 180, 260, 180);
  fill(0);
  rect(width - 80, 80, 30, (height * 3) / 4);
  rect(width - 80 - 130, 80, 130, 30);
  fill(226, 210, 11, 30);
  triangle(
    width - 190,
    100,
    width + 10,
    (height * 3) / 4 + 80,
    width - 390,
    (height * 3) / 4 + 80
  );
  arc(width-190,(height*3)/4+80,400,100,0,PI)
  arc(190,(height*3)/4+80,400,100,0,PI)
  fill(0);
  triangle(width - 190, 80, width - 120, 180, width - 260, 180);
  fill(0,0,0,50)
  ellipse(95,(height*3)/4+80,100,30)
  ellipse(width-65,(height*3)/4+80,100,30)
  drops.push(new Drop(random(width), random(-20, 20)));
  drops.push(new Drop(random(width), random(-20, 20)));
}





function weathersnow(){
  background(0)
  for(let i=0;i<=3*height/4;i++){
    fill(100,100,b2[i])
    rect(0,i,width,1)
  }
  fill(255)
  rect(0,height*3/4-40,width,height/4+40)
  fill(0)
  rect(0,0,width,20)
  fill(255)
  text("rainy",width/8-10,12)
  rect(width/4-3,0,6,20)
  text("snowy",width*3/8-10,12)
  rect(width/2-3,0,6,20)
  text("sunny",width*5/8-10,12)
  rect(width/4*3-3,0,6,20)
  text("settings",width*7/8-15,12)
  fill(0)
  noStroke()
  fill(10);
  rect(80, 80, 30, (height * 3) / 4);
  rect(80, 80, 130, 30);
  fill(226, 210, 11, 30);
  triangle(190, 100, -10, (height * 3) / 4 + 80, 390, (height * 3) / 4 + 80);
  fill(10);
  triangle(190, 80, 120, 180, 260, 180);
  fill(10);
  rect(width - 80, 80, 30, (height * 3) / 4);
  rect(width - 80 - 130, 80, 130, 30);
  fill(226, 210, 11, 30);
  triangle(
    width - 190,
    100,
    width + 10,
    (height * 3) / 4 + 80,
    width - 390,
    (height * 3) / 4 + 80
  );
  arc(width-190,(height*3)/4+80,400,100,0,PI)
  arc(190,(height*3)/4+80,400,100,0,PI)
  fill(10);
  triangle(width - 190, 80, width - 120, 180, width - 260, 180);
  fill(0,0,0,50)
  ellipse(95,(height*3)/4+80,100,30)
  ellipse(width-65,(height*3)/4+80,100,30)
  if (mouseIsPressed == true && mouseY > (height * 3) / 4 - 20) {
    foot.push(new footprint(mouseX, mouseY));
  }
  for(let i=0;i<foot.length;i++){
    foot[i].display()
    foot[i].update()
  }
  snowflow.push(new Snow(random(width),random(-50,-20),random(0.05,0.2)))
  for(let i=0;i<snowflow.length;i++){
    snowflow[i].display()
    snowflow[i].update()
  }
}





let angle=0
let clouds=[]
function weathersunny(){
  background(135,198,254)
  fill(0)
  rect(0,0,width,20)
  fill(255)
  text("rainy",width/8-10,12)
  rect(width/4-3,0,6,20)
  text("snowy",width*3/8-10,12)
  rect(width/2-3,0,6,20)
  text("sunny",width*5/8-10,12)
  rect(width/4*3-3,0,6,20)
  text("settings",width*7/8-15,12)
  fill(0)
  let k=random(0,100)
  if(k<1){
    clouds.push(new cloud(random(width),random(0,100)))
  }
  
  push()
  translate(width-20,20)
  rotate(angle)
  strokeWeight(10)
  fill(250,250,20)
  stroke(226,196,88)
  for(let i=0;i<=18;i++){
    push()
    rotate(2*PI/18*i)
    triangle(0,-130,-20,-90,20,-90)
    pop()
  }
  stroke(255,120,120)
  fill(235,22,22)
  circle(0,0,200)
  pop()
  angle+=0.05
  noStroke()
  fill(80,255,80)
  rect(0,height*3/4-40,width,height/4+40)
  if(angle>=2*PI){
    angle-=2*PI
  }
  for(let i=0;i<clouds.length;i++){
    clouds[i].update()
    clouds[i].display()
  }

  fill(0,0,0,50)
  ellipse(-50,(height*3)/4+80,400,30)
  ellipse(width-220,(height*3)/4+80,400,30)
   if (mouseIsPressed == true && mouseY > (height * 3) / 4 -20) {
    flower.push(new Flower(mouseX, mouseY));
  }
  for(let i=0;i<flower.length;i++){
    flower[i].display()
    flower[i].update()
  }
  
  noStroke()
  fill(100);
  rect(80, 80, 30, (height * 3) / 4);
  rect(80, 80, 130, 30);
  fill(100);
  triangle(190, 80, 120, 180, 260, 180);
  fill(100);
  rect(width - 80, 80, 30, (height * 3) / 4);
  rect(width - 80 - 130, 80, 130, 30);
  fill(100);
  triangle(width - 190, 80, width - 120, 180, width - 260, 180);
  
 
}




class cloud{
  constructor(x,y){
    this.x=x
    this.y=y
    this.tran=100
  }
  display(){
    push()
    translate(this.x,this.y)
    noStroke()
    fill(255,255,255)
    ellipse(0,0,100,50)
    circle(0,0,70)
    fill(0,0,0,50)
    ellipse(0,height*3/4,100,20)
    pop()
  }
  update(){
    if(mouseIsPressed&&mouseY<height*3/4){
      this.x+=2.5
    }
    else{
      this.x+=0.5
    }
    this.y+=random(-1,1)
    if(this.x>width+120){
      this.x=-120
    }
    if(clouds.length>20){
      clouds.splice(0,1)
    }
  }
}

class Flower{
  constructor(x,y){
    this.x=x
    this.y=y
    this.r=random(20,255)
    this.g=random(20,255)
    this.b=random(20,255)
    this.scale=(this.y-20)/(height-20)
  }
  display(){
    push()
    translate(this.x,this.y)
    scale(this.scale)
    stroke(17,132,49)
    strokeWeight(3)
    noFill()
    arc(0,-20,10,40,PI/2,3*PI/2)
    push()
    rotate(-1)
    ellipse(5,-20,7,20)
    pop()
    push()
    rotate(1)
    ellipse(-8,-15,7,20)
    pop()
    
    push()
    fill(this.r,this.g,this.b)
    stroke(this.r-20,this.g-20,this.b-20)
    translate(0,-40)
    
    for(let i=0;i<=24;i++){
      rotate(2*PI/24*i)
      ellipse(0,-10,10,30)
    }
    
    
    
    pop()
    
    
    fill(255,255,110)
    circle(0,-40,10)
    fill(0,0,0,50)
    noStroke()
    ellipse(0,0,20,5)
    pop()
  }
  update(){
    if(flower.length>20){
      flower.splice(0,1)
    }
  }
  
}



class footprint{
  constructor(x,y){
    this.x=x
    this.y=y
    this.tran=100
    this.transp=1
    this.angle=random(-1,1)
    this.scale=(this.y-50)/(height-50)
  }
  display(){
    push()
    translate(this.x,this.y)
    //rotate(this.angle)
    scale(this.scale)
    noStroke()
    fill(40,40,40,this.tran)
    ellipse(0,0,40,20)
    ellipse(50,30,40,20)

    pop()
  }
  update(){
    this.tran-=this.transp
    if(foot.length>30){
      foot.splice(0,1)
    }
  }
}
class Snow{
  constructor(x,y,s){
    this.x=x
    this.y=y
    this.scale=s
    this.ysp=random(2,5)
  }
  display(){
   
    push()
    fill(255)
    noStroke()
    translate(this.x,this.y)
    scale(this.scale)
    rect(-5,-52,10,104)
    triangle(0,-60,-10,-50,10,-50)
    triangle(0,60,-10,50,10,50)
    quad(-30,-40,-20,-48,0,-30,0,-20)
    quad(30,-40,20,-48,0,-30,0,-20)
    quad(-30,40,-20,48,0,30,0,20)
    quad(30,40,20,48,0,30,0,20)
    push()
    rotate(PI/3)
    rect(-5,-52,10,104)
    triangle(0,-60,-10,-50,10,-50)
    triangle(0,60,-10,50,10,50)
    quad(-30,-40,-20,-48,0,-30,0,-20)
    quad(30,-40,20,-48,0,-30,0,-20)
    quad(-30,40,-20,48,0,30,0,20)
    quad(30,40,20,48,0,30,0,20)
    pop()
    push()
    rotate(PI*2/3)
    rect(-5,-52,10,104)
    triangle(0,-60,-10,-50,10,-50)
    triangle(0,60,-10,50,10,50)
    quad(-30,-40,-20,-48,0,-30,0,-20)
    quad(30,-40,20,-48,0,-30,0,-20)
    quad(-30,40,-20,48,0,30,0,20)
    quad(30,40,20,48,0,30,0,20)
    pop()
    pop()
  }
  update(){
    if(snowflow.length>=250){
      snowflow.splice(0,1)
    }
    if(mouseIsPressed==true){
      this.y+=this.ysp-1.9
    }
    else{
    this.y+=this.ysp
    }
  }
}
class rain {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tran = 100;
    this.transp = 1.8;
    this.a = 0;
    this.asp = 6;
    this.b = 0;
    this.bsp = 2;
    this.scale=(this.y-height/2)/(height/2)
  }
  update() {
    this.a += this.asp;
    this.b += this.bsp;
    this.tran -= this.transp;
    if (ripples.length > 150) {
      ripples.splice(0, 30);
    }
  }
  display() {
    noStroke();
    push()
    translate(this.x,this.y)
    scale(this.scale)
    fill(255, 255, 255, this.tran);
    ellipse(0,0, this.a, this.b);
    pop()
  }
}
class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xsp = 0.1;
    this.ysp = 25;
  }
  update() {
    this.x += random(-1, 1) * this.xsp;
    this.y += random(0, 2) * this.ysp;
    if (drops.length > 300) {
      drops.splice(0, 30);
    }
  }
  display() {
    noStroke();
    fill(255, 255, 255, 80);
    quad(
      this.x,
      this.y,
      this.x - 6,
      this.y + 70,
      this.x - 5,
      this.y + 70,
      this.x + 1,
      this.y
    );
    // rect(this.x,this.y,1.5,70)
  }
}
// class lightning {
//   constructor() {
    
//   }
//   display(){
//     fill(255)
//     rect(0,0,width,height)
//   }
// }
