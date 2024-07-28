function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let img, beigePantone, mintPantone, redPantone, lightGreenPantone,hoverImage, hoverX, hoverY, btnSave, isCollected;
let collection = []

function preload() {
  beigePantone = loadImage("beige.jpg")
 
  mintPantone = loadImage("mint.jpg")  
  
  lightGreenPantone = loadImage("light_green.jpg")
  
  redPantone = loadImage("red.jpg") 
  
  img = loadImage('main.jpg')
}

function setup() {
  createCanvas(850, 600);
  btnSave = createButton("Collect Your Pallete!");
  btnSave.mouseClicked(saveCollection);
  btnSave.style("display", "none");
  
}

function draw() {
  clear();
  background(600);

  let pix = img.get(mouseX, mouseY);

  image(img,0,0);
  // using functions
  let hx = rgbToHex(pix[0],pix[1],pix[2])
  if(!isCollected){
    if(hx === '#906c4a'){
      hoverImage= beigePantone;
      hoverX = mouseX;
      hoverY = mouseY;
    } else if(hx === '#7d9fab'){
      hoverImage= lightGreenPantone;
      hoverX = mouseX;
      hoverY = mouseY;
    } else if(hx === '#98a88b'){
       hoverImage= mintPantone;
      hoverX = mouseX;
      hoverY = mouseY;
    } else if(hx === '#7c3a2c'){
       hoverImage= redPantone;
      hoverX = mouseX;
      hoverY = mouseY;
    }
  if(hoverImage && isMouseOverImage(hoverX, hoverY, hoverImage)){
    image(hoverImage, hoverX, hoverY);
  }
  }
  
  if(collection){
    collection.forEach((c,i) => {
      if(isCollected){
        return image(c, 20 + i * 140, 80)
      }
    return image(c, 20 + i * 140, 360);
    })
  }
  
  if(collection.length === 4 && !isCollected){
    btnSave.size(200,200);
    btnSave.position(650,330);
    btnSave.style("font-size", "38px");
    btnSave.style("border","none")
    btnSave.style("cursor", "pointer");
    btnSave.style("background", "#ffffff");
    btnSave.style("text-align", "left");
    btnSave.style("display", "block");
  } else {
    btnSave.style("display", "none");
  }
  if(isCollected){
    text('Collected!', 200, 430);
    textSize(42);
  }
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}


function mousePressed(){
  
  if(isMouseOverImage(hoverX, hoverY, hoverImage)){
    const index = collection.indexOf(hoverImage);
    if(index > -1){
      collection.splice(index, 1);
    } else {
      collection.push(hoverImage);
    }
  }
  let pix = img.get(mouseX, mouseY);
  let hx = rgbToHex(pix[0],pix[1],pix[2])
  console.log('hx', hx)
}

function isMouseOverImage(x, y, img) {
  return mouseX > x && mouseX < x + img.width && mouseY > y && mouseY < y + img.height;
}

function saveCollection() {
  isCollected = true
}