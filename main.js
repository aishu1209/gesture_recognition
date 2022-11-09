noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(125,125);
    canvas = createCanvas(550,550);
    canvas.position(800,125);
    Posenet = ml5.poseNet(video,modelLoaded);
    Posenet.on('pose',gotPoses);

    
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX + "and noseY = "+ noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX = " + leftWristX + "and rightWristX = "+ rightWristX + " difference = " + difference);

}
}

function modelLoaded(){
    console.log("Posenet is initialized");

}

function draw(){
    background("#B4BBB7");
    fill('#EE78DA');
    stroke('#EE78DA');
    square(noseX, noseY, difference);
    document.getElementById('square_sides').innerHTML = "Width and Height of the square will be = " + difference + "px.";

}

