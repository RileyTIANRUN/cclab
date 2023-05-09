
let CHI=[];
let RAIL=[];
let smallCHI=[];
let FAN=[];
let POT=[];
let x1=300
let y1=1500
let flames=[]
let Drops1=[]
let Drops2=[]
let tem=10
let y=300
let Drops3=[]
let gases=[]
function setup() {
    let cnv= createCanvas(1000, 1500);
    cnv.parent("canvasContainer1")  
//   CHI.push(new largeGear(50,60,1, 0))
//   CHI.push(new largeGear(280,60,-1, 39))
//   CHI.push(new largeGear(510,60,1, 0))
//   CHI.push(new largeGear(510,290,-1, 39))
//   CHI.push(new largeGear(50,290,-1, 39))
//   CHI.push(new largeGear(280,290,1, 0))
//   //CHI.push(new chilun(510,520,1, 0))
//   CHI.push(new largeGear(50,520,1, 0))
//   CHI.push(new largeGear(280,520,-1, 39))
  
  CHI.push(new largeGear(x1,y1,1, 0))
  //CHI.push(new largeGear(x1+190,y1+130,-1, 58))
  
  CHI.push(new largeGear(x1+336,y1+220,1, 0))
  smallCHI.push(new smallGear(x1+168,y1+110,-1,130))
  for(let i=0;i<40;i++){
    RAIL.push(new rail(x1,y1,PI/6*i))
  }
  FAN.push(new fan(x1+1500,y1+600,1))
  POT.push(new pot(x1+1000,y1+1200))
}

function draw() {
    if(mouseX>0&&mouseX<550&&mouseY>250&&mouseY<450){
        y=mouseY
    }
    let color=map(y,250,450,100,0)
    let b=map(color,0,100,230,0)
    let r=map(color,0,100,0,230)
  background(r,60,b,40);
  scale(0.5)
  //console.log(CHI.length)
  let frame1=frameCount
  let frame2=frameCount
  let frame3=frameCount
  //let tempreture=document.getElementById("tempre")
  for(let i=0;i<CHI.length;i++){
  CHI[i].update();
  CHI[i].display();
  
  }
  for(let i=0;i<smallCHI.length;i++){
    smallCHI[i].update();
    smallCHI[i].display();
   }
  for(let i=0;i<RAIL.length;i++){
    RAIL[i].update()
    RAIL[i].display()
  }
  for(let i=0;i<FAN.length;i++){
    FAN[i].update()
    FAN[i].display()
  }
  for(let i=0;i<POT.length;i++){
    POT[i].update()
    POT[i].display()
  }
  if(frame2>500&&(frame2-5)%30==0){
    Drops1.push(new Drop1(x1+482,y1+350))
  }
  for(let i=0;i<Drops1.length;i++){
    Drops1[i].update()
    Drops1[i].display()
  }
  if(frame1>600&&(frame1-5)%30==0){
    Drops2.push(new Drop2(x1+975,y1+915))
  }
  for(let i=0;i<Drops2.length;i++){
    Drops2[i].update()
    Drops2[i].display()
  }
  for(let i=0;i<gases.length;i++){
    gases[i].update()
    gases[i].display()
  }
  drawthermometer(frame3);
  drawice(frame3)
//   for(let i=0;i<Drops3.length;i++){
//     Drops3[i].update()
//     Drops3[i].display()
//   }
  drawgas();

  for(let i=0;i<Drops3.length;i++){
    Drops3[i].update()
    Drops3[i].display()
  }

  //circle(x1,y1,20)
//   quad(x1+1000,y1-1300,x1+1010,y1-1280,500,400,510,380)
  noStroke()
  fill(100)
  rect(520,300,10,230,50,0,50,0)
  rect(520,300,700,10,50,0,50,0)
  rect(1210,280,10,30,0,0,50,0)
  rect(505,520,25,10,0,0,50,0)
  triangle(1215,290,1190,260,1240,260)
  quad(x1-200,y1+300,x1+1000,y1+900,x1+950,y1+930,x1-250,y1+330)
}

function drawice(frame3){
    push()
    translate(x1+1000,y1-1470)
    rotate(17*PI/9)
    fill(100)
    rect(-200,90,320,20)

    fill(102,255,255)
    stroke(204,255,255)
    rect(-160,30,60,60,10)
    //rect(-150,40,40,40,10)
    rect(-100,30,60,60,10)
    rect(-40,30,60,60,10)
    rect(20,30,60,60,10)
    rect(-130,-30,60,60,10)
    rect(-70,-30,60,60,10)
    rect(-10,-30,60,60,10)
    if(frame3>1000){
    fill("red")
    arc(-130,110,100,20,0,PI)
    }
    pop()
}

function drawgas(){
    let frame4=frameCount
    if(frame4>0&&frame4%100==0){
        for(let i=0;i<10;i++){
        gases.push(new Gases(x1+1000+random(-30,30),y1+1100+random(-30,30)))
        }
    }
}
class Gases{
    constructor(x,y){
        this.x=x
        this.y=y 
        this.xsp=0
        this.ysp=-3
        this.tran=90
        this.d=0
        this.dia=30
    }
    display(){
        push()
        translate(this.x,this.y)
        fill(244,67,54,this.tran)
        noStroke()
        circle(0,0,this.dia)

        pop()
    }
    update(){
        this.y+=this.ysp
        this.d-=this.ysp
        this.x+=this.xsp
        this.dia+=0.05
        if(this.d%30==0){
            this.tran--
            
        }
        if(this.tran<10){
            gases.splice(0,1)
        }
    }
}
function drawthermometer(frame3){
    //let tempreture=document.getElementById("tempre")
    if(mouseX>0&&mouseX<550&&mouseY>250&&mouseY<450){
        y=mouseY
    }
    tempreture=map(y,250,450,100,0)
    push()
    translate(500,500)
    //rect(-300,0,20,400)

    for(let i=0;i<400;i++){
        let r=map(i,0,400,255,0)
        let b=map(i,0,400,0,255)
        fill(r,0,b)
        noStroke()
        rect(-300,i,20,1)
    }
    stroke(0)
    fill(0,200,200)
    rect(-50,0,100,400,20)
    rect(-10,20,20,360,40)
    for(let i=40;i<=360;i+=15){
      line(30,i,20,i)
      line(-30,i,-20,i)
    }
    tem=380-3.6*tempreture
    fill("#F44336")
    rect(-10,tem,20,380-tem,20)
    fill(0)
    rect(-500,tem,510,3)
    // circle(0,0,10)
    textSize(100)

    text("Right now is "+floor(tempreture)+"°C",-500,-300)
    
    if(frame3%40==0){
      Drops3.push(new Drop3(410,tem+500,tem))
    }
    pop()
}

class rail{
  constructor(x,y,startAngle){
    this.x1=x;
    this.x=x;
    this.y=y;
    this.xsp=0;
    this.ysp=0;
    this.dg=startAngle
    this.dgsp=radians(1)
    this.stage=1
    this.turn=true
    this.move=false
  }
  display(){
    push()
    translate(this.x,this.y)
    rotate(this.dg)
    rect(140,0,20,40)
    quad(190,60,190,-20,160,0,160,40)
    // fill(0)
    // circle(0,0,20)
    //circle(140,0,20)
    pop()
  }
  update(){
    // if(this.dg)
    if(this.dg>2*PI){
      this.dg-=2*PI
      this.moreover=true
    }
    // if(this.dg>=(5.4-PI)&&this.dg<=5.5){
    //   this.stage=1
    // }
    if(this.dg<5.4&&this.turn==true&&this.move==false&&this.stage==1){
      this.dg+=this.dgsp
      
    }
    if(this.dg>=5.4&&this.stage==1){
      this.turn=false
      this.move=true
      this.stage=2
    }
    if(this.x>=this.x1+338&&this.stage==2){
       this.move=false
       this.turn=true
       this.stage=3
     }
   if(this.stage==2&&this.move==true&&this.turn==false){
     this.x+=1.9
     this.y+=1.243
      
   }
   if(this.move==false&&this.turn==true&&this.stage==3){
     this.dg+=this.dgsp
   }
   if(this.turn==true&&this.moreover==true&&this.dg>5.3-PI){
     this.stage=4;
     this.turn=false;
     this.move=true;
     this.moreover=false;
   }
  if(this.stage==4&&this.move==true&&this.turn==false){
    this.x-=1.9 
    this.y-=1.243
  }
  if(this.stage==4&&this.x<=this.x1){
    this.stage=1;
    this.move=false;
    this.turn=true;
    this.x=this.x1
    
  }
//     if(this.x){
       
//        }
  }
}

class smallGear{
  constructor(x,y,sp,startingAngle){
    this.x=x;
    this.y=y;
    this.dg=startingAngle;
    this.dgsp=sp*radians(2);
    
  }
  display(){
    push()
    translate(this.x,this.y)
    rotate(this.dg)
    fill(50)
    circle(0,0,40)
    fill(255)
    rect(-15,-2,30,4)
    push()
    
    for(let i=1;i<=12;i++){
      let dg= 60 * (i%2)
      rotate(radians(dg))
      fill("gray")
      noStroke()
      beginShape()
      vertex(0,20)
      vertex(-36,49)
      vertex(-74,53)
      vertex(-83,37)
      
      
      vertex(-60,12)
      vertex(-60,-12)
      
      
      
      
      //vertex()
      endShape(CLOSE)
      strokeWeight(10)
      //stroke(0)
      //circle(-100,0,10)
      //line(-60,0,0,0)
      line(-60,-12,-60,12)
      line(-60,-12,-83,-37)
      line(-60,12,-83,37)
      line(-83,37,-74,53)
      //line(-83,30,-60,30)
      //line(-125,-12,-120,30)
      //line(-100,0,0,0)
      
      //circle(-120,30,10)
      //line(-120,30,0,0)
      //line(-60,30,-56,44)
      
      
    }
    
    pop()
    pop()
    
  }
  update(){
    this.dg+=this.dgsp
    
  }
  
}


class fan{
  constructor(x,y,sp){
    this.x=x;
    this.y=y;
    this.dg=0;
    this.dgsp=sp*radians(3);
    this.ap=[]
    this.bp=[]
  }
  display(){
    push();
    translate(this.x,this.y)
    rotate(this.dg)
    fill(150)
    circle(0,0,40)
    //rect(-15,-2,30,4)
    push()
    for(let i=1;i<=24;i++){
      let dg= 30 * (i%2)
      rotate(radians(dg))
      
      fill("gray")
      beginShape()
      vertex(0,0)
      vertex(-100,0)
      vertex(-123,20)
      vertex(0,0)
      endShape(CLOSE)
      //circle(-100,0,10)
      line(-100,0,0,0)
      line(-123,20,0,0)
      line(-100,0,-123,20)
      // line(-100,-12,-100,12)
      // line(-100,-12,-123,-20)
      // line(-100,12,-123,20)
      // line(-123,20,-120,30)
      //line(-125,-12,-120,30)
      //line(-100,0,0,0)
      
      //circle(-120,30,10)
      //line(-120,30,0,0)
      line(-120,30,-116,44)
      
      
    }
    pop()
    circle(0,0,40)
    pop();
  }
  update(){
    this.dg+=this.dgsp
  }
}

class largeGear{
  constructor(x,y,sp, startingAngle){
    this.x=x;
    this.y=y;
    this.dg=startingAngle;
    this.dgsp=sp*radians(1);
    this.ap=[]
    this.bp=[]
  }
  display(){
    push();
    translate(this.x,this.y)
    rotate(this.dg)
    stroke(0)
    fill(50)
    circle(0,0,40)
    fill(255)
    rect(-15,-2,30,4)
    push()
    for(let i=1;i<=24;i++){
      let dg= 30 * (i%2)
      rotate(radians(dg))
      
      
      
      //circle(-100,0,10)
      line(-100,-12,-100,12)
      line(-100,-12,-123,-20)
      line(-100,12,-123,20)
      line(-123,20,-120,30)
      //line(-125,-12,-120,30)
      //line(-100,0,0,0)
      
      //circle(-120,30,10)
      //line(-120,30,0,0)
      line(-120,30,-116,44)
      
      
    }
    pop()
    pop();
  }
  update(){
    this.dg+=this.dgsp
  }
}


class pot{
  constructor(x,y){
    this.x=x
    this.y=y
  }
  display(){
    push()
    translate(this.x,this.y)
    fill("gray")
    beginShape()
    arc(0,0,150,45,4*PI/5,PI/5)
    arc(0,100,200,200,PI*2/3,4*PI/3-0.03) 
    arc(0,100,200,200,PI*5/3+0.03,  PI/3) 
    arc(0,190,120,22,9*PI/5+0.5,6*PI/5-0.5)
    // arc(0,50,300,400,5*PI/3,PI/3)
     endShape(CLOSE)
    noStroke()
    ellipse(0,100,200,200)
    fill("#BA740B")
    quad(-10,190,0,200,-90,220,-100,210)
    quad(-8,184,0,190,-50,250,-60,240)
    quad(8,184,0,190,50,250,60,240)
    quad(10,190,0,200,90,220,100,210)
    fill("red")
    ellipse(0,0,100,30)
    push()
    translate(0,190)
    drawflames()
    pop()
    pop()
    
  }
  update(){
    
  }
}
function drawflames(){
  push()
  translate(-70,-100)
  scale(0.35)
  if(random(1,9)<4){
  for(let i=50;i<350;i+=12){
    flames[i]=random(100,250)
  }}
  fill(255,0,0,90)
  noStroke();
  vertex(100,350)
  vertex(50,300)

  for(let i=50;i<350;i+=6){
    vertex(i,flames[i]-70)
  }
  vertex(350,300)
  vertex(300,350)
  endShape(CLOSE)
  beginShape()
  fill(127,0,0,50)
  noStroke();
  vertex(100,350)
  vertex(50,300)
  for(let i=50;i<350;i+=6){
    vertex(i,flames[i])
  }
  vertex(350,300)
  vertex(300,350)
  endShape(CLOSE)
  
  beginShape()
  fill(255,255,0,90)
  noStroke();
  vertex(100,350)
  vertex(50,300)
  for(let i=50;i<350;i+=6){
    vertex(i,flames[i]+70)
  }
  vertex(350,300)
  vertex(300,350)
  endShape(CLOSE)
  pop()
}


class Drop1{
  constructor(x,y){
    this.x=x
    this.y=y
    this.sc=0
    this.ysp=0.1
    this.yac=0.5 
    this.d=0
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
      this.sc+=0.03
    }
 
    if(this.sc>=0.5){
    this.y+=this.ysp
    this.d+=this.ysp
    this.ysp+=this.yac
    }
    if(this.d>250){
      Drops1.splice(0,1)
    }
  }
}
class Drop2{
    constructor(x,y){
      this.x=x
      this.y=y
      this.sc=0
      this.ysp=0.1
      this.yac=0.5 
      this.d=0
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
        this.sc+=0.03
      }
   
      if(this.sc>=0.5){
      this.y+=this.ysp
      this.d+=this.ysp
      this.ysp+=this.yac
      }
      if(this.d>250){
        Drops2.splice(0,1)
      }
    }
  }
  class Drop3{
    constructor(x,y,tem){
      this.x=x
      this.y=y
      this.sc=0
      this.ysp=0.1
      this.yac=0.5 
      this.d=0
      this.tem=tem
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
      this.d+=this.ysp
      this.ysp+=this.yac
      }
      if(this.d>800-this.tem){
        Drops3.splice(0,1)
      }
    }
  }