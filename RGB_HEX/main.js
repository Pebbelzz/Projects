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
};


//converts RGB to HEX
function rgbToHex(r, g, b) {
  r = document.getElementById("r").value;
  g = document.getElementById("g").value;
  b = document.getElementById("b").value;
  
  var rHex = parseInt(r)
  var gHex = parseInt(g)
  var bHex = parseInt(b)
  
  var hexColor = ("#" + ((1 << 24) + (rHex << 16) + 
                (gHex << 8) + bHex).toString(16).slice(1));
  document.getElementById("HEXValueBox").innerHTML = hexColor;
}

  

   
