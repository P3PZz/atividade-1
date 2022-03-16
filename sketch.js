var bloco 








function setup() {
  createCanvas(400,400);
  bloco = createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
if(keyDown('D')){
  bloco.x += 3
}
if(keyDown('A')){
  bloco.x -= 3
}
if(keyDown('W')){
  bloco.y -= 3
}
if(keyDown('S')){
  bloco.y += 3
}

drawSprites()

}




