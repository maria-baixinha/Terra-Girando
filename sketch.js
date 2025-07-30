function setup() {
  createCanvas(1920, 1080, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background((0,100,0)); //cor de fundo
  rotateY(millis()/1400); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(350, 350); //esfera 3D
  
  
}
