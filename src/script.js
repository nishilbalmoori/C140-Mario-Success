let parentDir = "recources/sounds/"
let mario_sounds_dir = ["gameover.wav","jump.wav","coin.wav","kick.wav","mariodie.wav","world_start.wav"];
let mario_sounds = [];
let video;
let nose_coords;

function preload(){
	for(let i =0;i<mario_sounds_dir.length;i++){
		mario_sounds.push(loadSound(parentDir+mario_sounds_dir[i]));
	}
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('gameConsole');

	poseNet = ml5.poseNet(video,console.log("IT WORKS!! FINALLY!!\nNow back to my divorce papers."));
	poseNet.on('pose',getPoses);
}

function getPoses(r){
	if(r.length > 0){
		console.log("ooooo${r} results!\nAlr back to my divorce papers.");
		nose_coords = [r[0].pose.nose.x,r[0].pose.nose.y];
	}else{
		console.log("NOOO!! IT FAILED!!\nthank god cuase I would have to split the profits with my wife divorcing wife.");
	}

}

function draw() {
	game()
}
function startGame(){
	document.getElementById("status").innerHTML =  "Game is Loaded";
	GameStatus = "start";
}