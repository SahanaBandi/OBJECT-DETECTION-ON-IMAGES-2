Status="";
image="";
function preload()
{
   img=loadImage("Chair.jpeg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.position(215,300);
    objectDetector=ml5.objectDetector('coco.ssd',modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting Object";
}

function draw()
{
    image(img,0,0,640,420);
}

function modelLoaded()
{
    console.log("Model is loaded. Yayy!");
    Status = true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
}