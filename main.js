Status="";
object_name="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(490,380)
    video.hide();

}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    object_name=document.getElementById("input_box").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status=true;
}

function draw(){
    image(video,0,0,480,380);
}
