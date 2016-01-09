
//auto-changes value from slider
function showRedVal(redValue){
  document.getElementById("redSlideValue").innerHTML = redValue;
  document.getElementById("rSpanValue").innerHTML = redValue + ",";
  var rHex = parseInt(redValue);
  var rHex = rHex.toString(16).toUpperCase();
  if(rHex.length > 1){
  document.getElementById("redHexSpan").innerHTML = "#" + rHex;
  }
  else{
    document.getElementById("redHexSpan").innerHTML = "#0" + rHex;
  }
}


function showGreenVal(greenValue){
  document.getElementById("greenSlideValue").innerHTML = greenValue;
  document.getElementById("gSpanValue").innerHTML = greenValue + ",";
  var gHex = parseInt(greenValue);
  var gHex = gHex.toString(16).toUpperCase();
  if(gHex.length > 1){
    document.getElementById("greenHexSpan").innerHTML = gHex;
  }
  else{
    document.getElementById("greenHexSpan").innerHTML = "0" + gHex;
  }
}


function showBlueVal(blueValue){
  document.getElementById("blueSlideValue").innerHTML = blueValue;
  document.getElementById("bSpanValue").innerHTML = blueValue + ",";
  var bHex = parseInt(blueValue);
  var bHex = bHex.toString(16).toUpperCase();

  if(bHex.length > 1){
    document.getElementById("blueHexSpan").innerHTML = bHex;
  }
  else{
    document.getElementById("blueHexSpan").innerHTML = "0" + bHex;
  }
}

/*
// first function not currently using

//gets the values from the sliders 
function rgbValue(r, g, b){
  r = document.getElementById("r").value;
  g = document.getElementById("g").value;
  b = document.getElementById("b").value;   
   //checks to make sure function is grabbing values from sliders
  console.log(r +" "+ g +" "+ b);  
  //places rgb values into string and writes to DOM
  var rgbString = "rgb (" + r + ", " + g + ", " + b + ")";
  
  console.log(rgbString);
};



//converts RGB to HEX
function rgbToHex(r, g, b) {
  r = document.getElementById("r").value;
  g = document.getElementById("g").value;
  b = document.getElementById("b").value;

//change rgb values to integers
  var rHex = parseInt(r)
  var gHex = parseInt(g)
  var bHex = parseInt(b)

//puts Hex vars into HEX format eg #00FF00
  var hexColor = ("#" + ((1 << 24) + (rHex << 16) + 
                (gHex << 8) + bHex).toString(16).slice(1).toUpperCase());
  document.getElementById("HEXValueBox").innerHTML = hexColor;
}
*/
  

   
