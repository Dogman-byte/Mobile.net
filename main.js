function preload(){
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("MobileNet", model_loaded);
}

function model_loaded(){
    console.log("model is loaded")
}
function draw()
{
    image(video,10,10,380,380);
    classifier.classify(video,got_results);
}
function got_results(error,result){
    if (error){
        console.error(error);
    }
    if (result){
        console.log(result);
        document.getElementById("Objectname").innerHTML=result[0].label;
        document.getElementById("Accuracy").innerHTML=result[0].confidence;
    }
}
