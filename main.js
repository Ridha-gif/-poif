cheap="";
onway="";
leftWristx="";
leftWristy="";
rightWristx="";
rightWristy="";
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
    
}
function modelLoaded(){
    console.log("ModelLoaded!!");
}
function draw()
{
    image(video,0,0,600,450)
}
function preload(){
    cheap=loadSound('Cheap.mp3');
    onway=loadSound('onway.mp3');
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("leftwristx="+leftWristx+"leftwristy="+leftWristy);
    rightWristx=results[0].pose.rightWrist.x;
    rightWristy=results[0].pose.rightWrist.y;
    console.log("rightx="+rightWristx+"rightwristy="+rightWristy);

    }

}
