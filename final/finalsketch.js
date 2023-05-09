
let drops=[]
let tem=10
let y=0

function setup() {
    let cnv=createCanvas(1000,1000)
    cnv.parent(canvasContainer2)
}

function draw() {
  background(255);
  drawthermometer();

   for(let i=0;i<drops.length;i++){
    drops[i].update();
    drops[i].display();
  }


}

function drawthermometer(){
  let tem=getElementById("tempre")
  push()
  translate(500,500)
  fill(255)
  text(-100,0,tem)
  rect(-50,0,100,400,20)
  rect(-10,20,20,360,40)
  for(let i=40;i<=360;i+=15){
    line(30,i,20,i)
    line(-30,i,-20,i)
  }
  if(mouseY>height/2+30&&mouseY<height/2+350&&mouseX>width/2-50&&mouseX<width/2+50){
    tem=mouseY-height/2
    y=mouseY
  }
  fill("#F44336")
  rect(-10,tem,20,380-tem,20)
  fill(0)
  rect(-100,tem,110,3)
  circle(0,0,10)
  
  if(frameCount%100==0){
    drops.push(new Drop(410,y))
  }
  pop()
}
class Drop{
  constructor(x,y){
    this.x=x
    this.y=y
    this.sc=0
    this.ysp=0.1
    this.yac=0.5 
  }
  display(){
    push()
    translate(this.x,this.y)
    
    scale(this.sc)
    stroke("#F44336")
    fill("#F44336")
    triangle(17,36,-17,36,0,66)
    beginShape()
    arc(0,66,50,80,5*PI/3,4*PI/3)
    vertex(17,36)
    vertex(0,0)
    vertex(-17,36)
    endShape(CLOSE)
    pop()
  }
  update(){
    if(this.sc<=0.51){
      this.sc+=0.01
    }
 
    if(this.sc>=0.5){
    this.y+=this.ysp
    this.ysp+=this.yac
    }
    if(drops.length>10){
      drops.splice(0,1)
    }
  }
}
