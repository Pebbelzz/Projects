
//auto-changes value from slider
function showRedVal(redValue){
  document.getElementById("redSlideValue").innerHTML = redValue;
  document.getElementById("rSpanValue").innerHTML = redValue + ",";
}


function showGreenVal(greenValue){
  document.getElementById("greenSlideValue").innerHTML = greenValue;
  document.getElementById("gSpanValue").innerHTML = greenValue + ",";
}


function showBlueVal(blueValue){
  document.getElementById("blueSlideValue").innerHTML = blueValue;
  document.getElementById("bSpanValue").innerHTML = blueValue;
}

//grabs rgb values on input and converts them to HEX color code
//also changes background as sliders are moved
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
//changes background color to HEX value
  document.body.style.backgroundColor = hexColor;
}







  

   
