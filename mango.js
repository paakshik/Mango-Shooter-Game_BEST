class mango{
	constructor(x,y,r)
	{
		var bool = true;
		var options={
			isStatic:bool,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
 hit(bodyies){
	let score = 0;
var area = dist(this.body.position.x + 100,this.body.position.y + 100,bodyies.position.x + 100,bodyies.position.y + 100)
if (area <= (this.r+this.r)){
	Body.setStatic(this.body,false);
	
	//find score
	score = score + 1;

	console.log(score)
	}
} 

// Matter.Events.on(engine, 'collisionStart', function(event) {
// 	let a = event.source.pairs.list[0].bodyA;
// 	let b = event.source.pairs.list[0].bodyB;
  
// 	// check bodies, do whatever...
// 	Body.setStatic(bodyies,true)	

// Body.setStatic(a,false);
// Body.setStatic(b,false);

//   });
//}
}

