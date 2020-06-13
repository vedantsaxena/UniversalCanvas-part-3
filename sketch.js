  //create the variables for the array, painting, canvas, database, save button and the drawing sprite and its image
  var drawPath = [];
  var drawActive = false;
  var canvas;
  var database;
  var drawMat;
  var saveButton;
  var drawin;
  var clearButton;
  var fot = 1;
  

  function setup() {

  //create the canvas
  canvas = createCanvas(800,600);

  //create the database
  database = firebase.database();

  //loading the image for the sprite through a variable
  drawin = loadImage("images/sq.jpg");

  // creating the sprite for the drawing
  drawMat = createSprite(400,300,10,10);
  
  //creating the save button
  saveButton = createButton("save");
  saveButton.position(900,560);

  //creating the clear button
  clearButton = createButton("clear");
  clearButton.position(250,560);

  }

  function draw() {
    background(255);

    // storing the coordinates of the sprite in an array
    var position = [drawMat.x,drawMat.y];

    // storing the coordinates array in the drawPath array
    drawPath.push(position);
    
    // the coordinates of the sprites linked with that of the mouse
    if (drawActive === true){
      drawMat.x = mouseX;
      drawMat.y = mouseY
     
    }
    
    //the basis for the drawing's lines
    strokeWeight(5);
    noFill();
    stroke(0,150,150);

  // creating the lines by using for loops and the mouse coords (through the variable in the array) 
    for (var i = 0;i<drawPath.length;i++){
      image(drawin,drawPath[i][0],drawPath[i][1],10,10);
  }

  //the saving part when the button is pressed
  saveButton.mousePressed(()=>{
    database.ref("Drawer/drawingName").set({
      personName:"Vedant",
      drawing:"Drawing1"
    });
     database.ref("/").update();
  });

  //clearing the canvas
  clearButton.mousePressed(()=>{
     database.ref("Drawer/drawingName").set({
      personName:"",
      drawing:""
    });
    //drawPath = false;
    fot = 0;
  });
  if(fot === 0){
    var clIm = createSprite(600,300,1000,800);
    clIm.shapeColor = "white";
  }

  drawSprites();
}

  //the function to start the drawing
  function mouseDragged(){
    drawActive = true;
    database.ref("Drawer/position").set({
      x : drawMat.x,
      y : drawMat.y
      
    });
    
    
  }

  //the function to stop drawing
  function mouseReleased(){
    drawActive = false;
  }

  
   
    
  
