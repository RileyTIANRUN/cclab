let CHI=[];
let RAIL=[];
let smallCHI=[];
let stage=1
let isclicked=false;
let r1=0
let r2=0
let g1=0
let g2=0
let b1=0
let b2=0
function setup() {

  let cnv=createCanvas(1600, 800);
  cnv.parent("canvasContainerback");
  CHI.push(new largeGear(50,60,1, 0))
  CHI.push(new largeGear(280,60,-1, 39))
  CHI.push(new largeGear(510,60,1, 0))
  CHI.push(new largeGear(510,290,-1, 39))
  CHI.push(new largeGear(50,290,-1, 39))
  CHI.push(new largeGear(280,290,1, 0))
  CHI.push(new largeGear(510,520,1, 0))
  CHI.push(new largeGear(50,520,1, 0))
  CHI.push(new largeGear(280,520,-1, 39))
  CHI.push(new largeGear(510,750,-1, 39))
  CHI.push(new largeGear(50,750,-1, 39))
  CHI.push(new largeGear(280,750,1, 0))
  CHI.push(new largeGear(740,60,-1, 39))
  CHI.push(new largeGear(740,290,1, 0))
  CHI.push(new largeGear(740,520,-1,39))
  CHI.push(new largeGear(740,750,1, 0 ))
  CHI.push(new largeGear(970,60, 1, 0))
  CHI.push(new largeGear(970,290,-1,39))
  CHI.push(new largeGear(970,520, 1,0))
  CHI.push(new largeGear(970,750,-1,39 ))
  CHI.push(new largeGear(1200,60, -1, 39))
  CHI.push(new largeGear(1200,290,1,0))
  CHI.push(new largeGear(1200,520,-1,39))
  CHI.push(new largeGear(1200,750,1,0))
  CHI.push(new largeGear(1430,60, 1, 0))
  CHI.push(new largeGear(1430,290,-1,39))
  CHI.push(new largeGear(1430,520,1,0))
  CHI.push(new largeGear(1430,750,-1,39))
  CHI.push(new largeGear(1660,60, -1, 39))
  CHI.push(new largeGear(1660,290,1,0))
  CHI.push(new largeGear(1660,520,-1,39))
  CHI.push(new largeGear(1660,750,1,0))
  strokeWeight(5)
//   CHI.push(new largeGear(x1,y1,1, 0))
//   //CHI.push(new largeGear(x1+190,y1+130,-1, 58))
  
//   CHI.push(new largeGear(x1+336,y1+220,1, 0))
//   smallCHI.push(new smallGear(x1+168,y1+110,-1,130))
//   for(let i=0;i<40;i++){
//     RAIL.push(new rail(x1,y1,PI/6*i))
//   }
//   FAN.push(new fan(x1+1300,y1+1000,1))
//   POT.push(new pot(x1+1000,y1+1200))
}

function draw() {

  
  
  rectMode(CENTER)
  if(stage==1){
    background(0);
  for(let i=0;i<100;i++){
    fill(255,255,255,10)
    circle(mouseX,mouseY,4*(i*i*0.01))
  }
  isclicked=false
 }

  if(stage==2){
    background(0);
    for(let i=0;i<100;i++){
    fill(255,255,255,20)
    circle(mouseX,mouseY,4*(i*i*0.02))
    }
    isclicked=false
  }
  
  if(stage==3){
    background(0);
    for(let i=0;i<100;i++){
    fill(255,255,255,10)
    rect(mouseX,mouseY,4*i,4*i)
    }
    isclicked=false
  }
  if(stage==4){
    background(0);
    stroke(255)
    isclicked=false
  }
  if(stage==5){
    if(isclicked==true){
        r1=random(255)
        r2=255-r1
        g1=random(255)
        g2=255-g1
        b1=random(255)
        b2=255-b1
    }
    background(r1,g1,b1)
    stroke(r2,g2,b2)
    isclicked=false

  }
  if(stage==6){
    if(isclicked==true){
        r1=random(255)
        r2=255-r1
        g1=random(255)
        g2=255-g1
        b1=random(255)
        b2=255-b1
    }
    background(r1,g1,b1)
    stroke(r2,g2,b2)
    isclicked=false
  }
  if(stage==7){
    if(isclicked==true){
        r1=random(255)
        r2=255-r1
        g1=random(255)
        g2=255-g1
        b1=random(255)
        b2=255-b1
    }
    background(r1,g1,b1)
    stroke(r2,g2,b2)
    isclicked=false
  }
  if(stage==8){
    if(isclicked==true){
        r1=random(255)
        r2=255-r1
        g1=random(255)
        g2=255-g1
        b1=random(255)
        b2=255-b1
    }
    background(r1,g1,b1)
    stroke(r2,g2,b2)
    isclicked=false
  }

  //console.log(CHI.length)
  for(let i=0;i<CHI.length;i++){
  CHI[i].update();
  CHI[i].display();
  
  }
  for(let i=0;i<smallCHI.length;i++){
    smallCHI[i].update();
    smallCHI[i].display();
   }

//   for(let i=0;i<RAIL.length;i++){
//     RAIL[i].update()
//     RAIL[i].display()
//   }
//   for(let i=0;i<FAN.length;i++){
//     FAN[i].update()
//     FAN[i].display()
//   }
//   for(let i=0;i<POT.length;i++){
//     POT[i].update()
//     POT[i].display()
//   }
  //circle(x1,y1,20)
  //quad(x1-200,y1+300,x1+1000,y1+900,x1+950,y1+930,x1-250,y1+330)
}

// class rail{
//   constructor(x,y,startAngle){
//     this.x1=x;
//     this.x=x;
//     this.y=y;
//     this.xsp=0;
//     this.ysp=0;
//     this.dg=startAngle
//     this.dgsp=radians(1)
//     this.stage=1
//     this.turn=true
//     this.move=false
//   }
//   display(){
//     push()
//     translate(this.x,this.y)
//     rotate(this.dg)
//     rect(140,0,20,40)
//     quad(190,60,190,-20,160,0,160,40)
//     // fill(0)
//     // circle(0,0,20)
//     //circle(140,0,20)
//     pop()
//   }
//   update(){
//     // if(this.dg)
//     if(this.dg>2*PI){
//       this.dg-=2*PI
//       this.moreover=true
//     }
//     // if(this.dg>=(5.4-PI)&&this.dg<=5.5){
//     //   this.stage=1
//     // }
//     if(this.dg<5.4&&this.turn==true&&this.move==false&&this.stage==1){
//       this.dg+=this.dgsp
      
//     }
//     if(this.dg>=5.4&&this.stage==1){
//       this.turn=false
//       this.move=true
//       this.stage=2
//     }
//     if(this.x>=this.x1+338&&this.stage==2){
//        this.move=false
//        this.turn=true
//        this.stage=3
//      }
//    if(this.stage==2&&this.move==true&&this.turn==false){
//      this.x+=1.9
//      this.y+=1.243
      
//    }
//    if(this.move==false&&this.turn==true&&this.stage==3){
//      this.dg+=this.dgsp
//    }
//    if(this.turn==true&&this.moreover==true&&this.dg>5.3-PI){
//      this.stage=4;
//      this.turn=false;
//      this.move=true;
//      this.moreover=false;
//    }
//   if(this.stage==4&&this.move==true&&this.turn==false){
//     this.x-=1.9 
//     this.y-=1.243
//   }
//   if(this.stage==4&&this.x<=this.x1){
//     this.stage=1;
//     this.move=false;
//     this.turn=true;
//     this.x=this.x1
    
//   }
// //     if(this.x){
       
// //        }
//   }
// }
function mouseClicked(){
    stage++;
    isclicked=true
    if(stage>8){
        stage=1
        stroke(0)
        background(0)
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
    fill(255)
    circle(0,0,40)
    fill(0)
    rect(-15,-2,30,4)
    push()
    
    for(let i=1;i<=12;i++){
      let dg= 60 * (i%2)
      rotate(radians(dg))
      
      
      
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
    noFill()
    circle(0,0,40)
    rect(0,0,30,4)
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

