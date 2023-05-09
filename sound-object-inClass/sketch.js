// sounds from:
// https://freesound.org/people/GowlerMusic/sounds/266566/
// https://freesound.org/people/cfork/sounds/8000/
// https://freesound.org/people/ccolbert70Eagles23/sounds/423526/


let bodies = [];
let numcreatures = 5;
let creatures = [];

function preload(){
    for(let i = 0; i < 3; i++){
        bodies.push( loadImage("bodies/body_"+i+".png"))
    }
}

function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");
    
    for(let i=0;i<numcreatures;i++){
        creatures.push(new Creature(random(width),random(height)));
    }

}

function draw(){
    background(120, 40, 240);
    console.log(creatures.length)
    for(let i=0;i<creatures.length;i++){
        creatures[i].update();
        creatures[i].display();

    }
    // push()
    //   translate(mouseX,mouseY)

    // pop()
    

}


class Creature{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xSpeed = random(-2, 2); 
        this.ySpeed = random(2, 2);
        this.number = floor(random(0,3))
    }
    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x>width||this.x<0){
            this.xSpeed*=-1
        }
        if(this.y>height||this.y<0){
            this.ySpeed*=-1
        }
    }
    display(){
        
        fill(255);
        push()
        translate(this.x,this.y)
        circle(0,0,10)
        this.drawBodyImage()
        pop()

        
    }
    drawBodyImage(){
        push();
        scale(0.1);
        let imageWidth=bodies[0].width
        let imageHeight=bodies[0].height
    
        image(bodies[this.number], -imageWidth/2, -imageHeight/2);

        pop(); 


    }
}

