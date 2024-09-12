function setup() {
    createCanvas(600, 600)
    background("#673AB7");
  }
  
  function draw(){
    
    stroke("red");
    fill("#FFEB3B");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) 
    rect(mouseX, mouseY, 20, 35);
    
  
  }