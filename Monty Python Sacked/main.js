
function sacked(){
	var firstChoice = ['pokemons', 'llamas', 'otters', 'alpacas', 'squirrels', 'marmots', 'beavers', 'groundhogs'];
	var secondChoice = ['sacking', 'subtitles', 'wooden rabbit', 'coconuts', 'swallows'];
	var randomChoice1 = firstChoice[Math.floor(Math.random() * firstChoice.length)];
	var randomChoice2 = secondChoice[Math.floor(Math.random() * secondChoice.length)];
	document.getElementById("words").innerHTML = ("The " + randomChoice1 + " apologise for the fault in the " + randomChoice2 + ".  <br>Those responsisible have been sacked.") ;
}

