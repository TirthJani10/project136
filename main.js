Status = "";
input_text = "";
function preload() {

}
function setup() {
    canvas = createCanvas(480, 480);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(480,480);
    video.hide();
}
function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}
function draw() {
    image(video,0,0,480,480);

}