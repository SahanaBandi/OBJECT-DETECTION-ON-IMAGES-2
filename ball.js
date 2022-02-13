Status="";
image="";
objects=[];
function preload()
{
   img=loadImage("Ball.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.position(215,300);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting Object";
}

function draw()
{
    image(img,0,0,640,420);
    if(Status != "")
    {
      for(i=0; i<objects.length;i++)
      {
          document.getElementById("status").innerHTML="Stauts : Detected Objects";
          document.getElementById("detect").innerHTML="There is one object in this picture We have identified it as a ball";
          fill(" #17adb5");
          percent=floor(objects[i].confidence*100);
          text(objects[i].label+""+percent+"%"+objects[i].x,objects[i].y);
          noFill();
          stroke("#05ff22");
          rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
      }
    }
}

function modelLoaded()
{
    console.log("Model is loadede. Yayy!");
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
        objects=results;
    }
}