LeftWristX=0;
LeftWristY=0;
RightWristX=0;
RightWristY=0;
scoreRightWrist=0;
scoreLeftWrist=0;
song1="";
song2="";
song1Status="";
song2Status="";
function preload()
{
song1=loadSound('music.mp3');
song2=loadSound('The Score - Glory.mp3');
}

function setup()
{
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("modelLoaded");
}

function draw()
{image(video,0,0,600,500);
stroke('#800000');
fill('#800000');
song1Status=song1.isPlaying();
song2Status=song2.isPlaying();
if(scoreLeftWrist>0.2)
{
circle(LeftWristX,LeftWristY,20);
song1.stop();
if(song2Status==false)
{
song2.play();
document.getElementById("song").innerHTML="song=music ";
}
}
if(scoreRightWrist>0.2)
{
circle(RightWristX,RightWristY,20);
song2.stop();
if(song1Status==false)
{
song1.play();
document.getElementById("song").innerHTML="song=Glory";
}
}




}

function gotPoses(results)
{
if(results.length>0)
{console.log(results);
    scoreRightWrist=results[0].pose.keypoints[10].score;
    scoreLeftWrist=results[0].pose.keypoints[9].score;
LeftWristX=results[0].pose.leftWrist.x;
LeftWristY=results[0].pose.leftWrist.y;
console.log("LeftWristX= "+LeftWristX+"LeftWristY "+LeftWristY);
RightWristX=results[0].pose.rightWrist.x;
RightWristY=results[0].pose.rightWrist.y;
console.log("RightWristX= "+RightWristX+"RightWristY "+RightWristY);
}


}

function play()
{
song1();
song1-setVolume(1);
song2();
song2-setVolume(1);

}






















