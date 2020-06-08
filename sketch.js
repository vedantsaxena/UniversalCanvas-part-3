  //create the variables for the arrays, painting, canvas and database
  var drawing = [];
  var currentPath = [];
  var drawActive = false;
  var canvas;
  var database;


  function setup() {
    //create the canvas
  canvas = createCanvas(800,600);

  //create the datbase
  database = firebase.database();

  //calling the function to draw when the mouse is pressed over the canvas
  canvas.mousePressed(startDrawing);
  canvas.mouseReleased(mouseStop);
  }

  function draw() {
    background("lightgrey");
    
    // the coordinates of the mouse stored in a variable through the painting variable and the coords variable to the currentPath array
    if (drawActive === true){
      var posStorage = {
        x:mouseX,
        y:mouseY
      }
      currentPath.push(posStorage);
    }
    
    //the basis for the drawing's lines
    strokeWeight(5);
    noFill();
    stroke(0,150,150);

  // creating the lines by using for loops , the mouse coords (through the variable in the array) and by using the vertex(),beginShape() and endShape commands
    for (var i = 0;i<drawing.length;i++){
      var path = drawing[i];
      beginShape();
    for (var j =0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
      endShape();
    }
    
  }

  //the function to start the drawing
  function startDrawing(){
    drawActive = true;
    currentPath = [];
    drawing.push(currentPath);
  }

  //the function to stop drawing
  function mouseStop(){
    drawActive = false;
  }
