function setup(){
    canvas = createCanvas(550, 150);
    video.size(550, 500);

    posenet = ml5.posenet(video, modelLoaded);
    posenet.on('poses', gotPoses);
}

function modelLoaded(){
    console.log('Posenet Is Initialized');
}

function gotPoses(results){
     if(results.length > 0);
     {
        console.log(results);
     }
}