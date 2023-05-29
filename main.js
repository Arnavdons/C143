function preload() {
	world_start = loadSound("world_start.wav");
	Game_over = loadSound("gameover.wav");
	mario_jump=loadSound("jump.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	coin_sound=loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("Game-Console");
	posenet=ml5.poseNet(video,modelloaded);
	posenet.on("pose",gotPoses);
	instializeInSetup(mario);
}

function draw() {
	game();
}

function modelloaded(){
console.log("Model is Loaded!");
}

function gotPoses(results){
if(results.length>0){
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;

}
}


