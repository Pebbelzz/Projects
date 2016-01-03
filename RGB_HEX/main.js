//gets the values from the sliders 

function rgbValue(r, g, b){
   r = document.getElementById("r").value;
   g = document.getElementById("g").value;
   b = document.getElementById("b").value;
   
   //checks to make sure function is grabbing values from sliders
  console.log(r +" "+ g +" "+ b);
  
  //places rgb values beside sliders
  document.getElementById("redSlideValue").innerHTML = r;
  document.getElementById("blueSlideValue").innerHTML = b;
  document.getElementById("greenSlideValue").innerHTML = g;
  
  //places rgb values into string and writes to DOM
  var rgbString = "rgb (" + r + ", " + g + ", " + b + ")";
  document.getElementById("rgbValueBox").innerHTML = rgbString;
  console.log(rgbString);
  
  //converts individual RGB to HEX 
  function getRString(){
    if (r<10){
      var rString = "0" + r.toString();
    }
    else {
      var rString = r.toString();
    }
  }
  
  function getGString(){
    if (g<10){
      var gString = "0" + g.toString();
    }
    else{
      var gString = g.toString();
    }
  }
  
  function getBString(){
    if (b<10){
      var bString = "0" + b.toString();
    }
    else{
      var bString = b.toString();
    }
  }
  
  console.log(rString + gString + bString);
  
  //var rHex = r + g + b.toString(16);
  //console.log(rHex);
}