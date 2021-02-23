const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1;
var world, boy;
mangoes = [];
mangoes2 = [];

function preload() {
	boy = loadImage("boy.png");
	tree = loadImage("imgbin-animation-tree-others-5tCFTHUeMsJAfP90d1WNH71xm-removebg-preview.png")
back = loadImage('395e5325b9ddcbdd28c3915bdf64b713.jpg')
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	for (let i = 0; i < 6; i++) {
		mango1 = new mango(980 + (50 * i), 100 + (22 * i), 30);
		mangoes.push(mango1);

	}

	for (let i = 0; i < 9; i++) {
		mango1 = new mango(880 + (50 * i), 200 - (9 * i), 30);
		mangoes2.push(mango1);



	}


	rock = new Rock(200, 200, 50);
	sling = new Sling(230, 420, rock.body);
	groundObject = new ground(width / 2, 600, width, 20);

	Engine.run(engine);

}

function draw() {

	background(230);
	groundObject.display();
	//Add code for displaying text here!
	push()
	imageMode(CENTER);
	image(back,600,300,1300,600)
	pop();
	image(boy, 200, 370, 200, 300);
	image(tree, 800, 10, 630, 600);
	
	rock.show();
	sling.show();

	mangoes.forEach(mango => {
		mango.display();
		 mango.hit(rock.body);
	})
	mangoes2.forEach(mango => {
		mango.display();
		mango.hit(rock.body);
	
	})
	
	
	textFont("inconsolata");
	fill(255)
	
	text('Press the space key to shoot the stone!!!', 200, 200, 400,400)
}

function mouseDragged() {
	Body.setPosition(rock.body, {
		x: mouseX,
		y: mouseY
	})
}

function mouseReleased() {

	sling.move();

	// setTimeout(() => {
	//    World.remove(world,bird.body)
	// bird = new Bird(200,200);
	// 

	// },1000)


}

function keyPressed() {
	if (keyCode === 32) {
		Body.setPosition(rock.body, {
			x: 230,
			y:  420
		})
		sling.attack(rock.body);
		rock.body.velocity.x = 0;

		sling.sling.stiffness = 0.5;
		console.log(rock.body.velocity.x);

	}
}