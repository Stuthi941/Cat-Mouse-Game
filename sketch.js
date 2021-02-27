var cat, cat1,cat1IMG,cat2,cat2IMG,cat3,cat3IMG,cat4,cat4IMG;
var garden,gardenIMG
var mouse, mouse1,mouse1IMG,mouse2,mouse2IMG,mouse3,mouse3IMG,mouse4,mouse4IMG

function preload() {
gardenIMG=loadImage("images/garden.png");
cat1IMG=loadAnimation("images/cat1.png")
cat2IMG=loadAnimation("images/cat2.png","images/cat3.png")
cat3IMG=loadAnimation("images/cat4.png")
mouse1IMG=loadAnimation("images/mouse1.png");
mouse2IMG=loadAnimation("images/mouse2.png","images/mouse3.png")
mouse3IMG=loadAnimation("images/mouse4.png")

}

function setup(){
createCanvas(1000,800);
cat = createSprite(870,600);
cat.addAnimation("tomsleeping",cat1IMG);
cat.scale=0.2

mouse = createSprite(200,600);
mouse.addAnimation("jerryStanding",mouse1IMG);
mouse.scale=0.15;

}

function draw() {

    background(gardenIMG);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("catLastImage",cat3IMG);
    cat.x=300;
    cat.scale=0.2;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage",mouse3IMG);
    mouse.scale=0.15;
    mouse.changeAnimation("mouseLastImage");

}

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("catRunning",cat2IMG);
    cat.changeAnimation("catRunning");
    
    mouse.addAnimation("mouseTeasing",mouse2IMG);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing");
}
  //For moving and changing animation write code here


}
