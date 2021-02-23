class Sling{
    constructor(x,y,body){
    const opts = {
    pointB: {
    x:x ,
    y:y 
    
    },
    bodyA:body,
    stiffness:0.05,
    length: 60  
    
    }
    this.image1 = loadImage('sling1.png');
    this.image2 = loadImage('sling2.png');
    this.image3 = loadImage('sling3.png');
    this.sling = Matter.Constraint.create(opts);
    World.add(world,this.sling);
    }
    move(){
        this.sling.bodyA = null;
    }
    show(){
    push();
    image(this.image1,230,390);
    image(this.image2,200,390);
        if (this.sling.bodyA){
    stroke(48,22,8);
    let posB= this.sling.pointB;    
    let posA=this.sling.bodyA.position 
    strokeWeight(15);
    line(posA.x -20,posA.y,posB.x -10,posB.y );
    line(posA.x -20 ,posA.y ,posB.x + 30,posB.y - 3);
    
    
    
        }
    pop();
    }
    attack(body){
    this.sling.bodyA = body;
    }
    
    }