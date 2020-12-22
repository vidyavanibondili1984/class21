var movingRect,fixedRect
var gObject1,gObject2,gObject3,gObject4
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 90, 50);
  movingRect.shapeColor="red";
  movingRect.debug=true;
  fixedRect=createSprite(200,200,50,90);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;

  gObject1=createSprite(200,100,50,50);
  gObject1.shapeColor="red";
  gObject2=createSprite(300,100,50,50);
  gObject2.shapeColor="red";
  gObject3=createSprite(400,100,50,50);
  gObject3.shapeColor="red";
  gObject4=createSprite(500,100,50,50);
  gObject4.shapeColor="red";

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if(isTouching(movingRect,gObject1))
 {
  movingRect.shapeColor="green";
  gObject1.shapeColor="green";

 }
 else{
  movingRect.shapeColor="red";
  gObject1.shapeColor="red";
 }
  drawSprites();
}
function isTouching(obj1,obj2)
{
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2&&
    obj2.x-obj1.x<obj1.width/2+obj2.width/2 &&
    obj1.y-obj2.y<obj1.width/2+obj2.width/2&&
    obj2.y-obj1.y<obj1.width/2+obj2.width/2)
  {
    return true;
  }
  else{
   return false;
  }
}