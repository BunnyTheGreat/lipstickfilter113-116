function preload() {
lips = loadImage("https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77135/lip-clipart-md.png")
}

lips_x = 0;
lips_y = 0;

function takeSnapshot() {
    save('lipstickfilter.png');
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {

    if(results.length>0) {
        console.log(results); 
        lips_x = results[0].pose.nose.x;
        lips_y = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function draw() {
    image(video,0,0,300,300);

    image(lips,lips_x -15,lips_y +15,30,30);
}

function take_snapshot() {
    save('myFilterImage.png')
}