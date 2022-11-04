moustacheX = 0
moustacheY = 0

function preload() {
    moustache = loadImage('https://i.postimg.cc/KYmmjQGY/moustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, moustacheX-25, moustacheY+5, 50, 30);
}

function take_snapshot() {
    save('MyFilterImage.png');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        moustacheX = results[0].pose.nose.x;
        moustacheY = results[0].pose.nose.y;
        console.log('Nose X = '+moustacheX);
        console.log('Nose Y = '+moustacheY);
    }
}