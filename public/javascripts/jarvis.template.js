// state variables
var transcript = '';
var listening = false;

var canSpeak = false;
var canListen = false;

// speech synthesis
if ('speechSynthesis' in window) {
	console.log('J.A.R.V.I.S. can speak');

	// object for speech synthesis interface
	var synthesis = window.speechSynthesis;

	// IMPLEMENTATION
}

// speech recognition
if ('webkitSpeechRecognition' in window) {
	console.log('J.A.R.V.I.S. can listen');

	// object for speech recognition interface
	var recognition = new webkitSpeechRecognition();
	var canListen = true; 
	recognition.continuous = false; 
	recognition.interimResults = true; 
	recognition.lang = 'en-US'; 
	recognition.onstart = function() { 
		console.log('Listening..');
		$('.button').text(Listening...');
		
	} 
	recognition.onresult = function () { 
		
	} 
	recognition.onerror = function () { 
		cinsole.log('ERROR'); 
	} 
	recognition.onend = function (event) { 
	}
	// IMPLEMENTATION
}

// listen to the command
// Hint: recognition.start()
function listenCommand () {
	// IMPLEMENTATION
}

// make the browser speak
function speak (text) {
	// IMPLEMENTATION
}

// callback for success
function processInfo (response) {
	// IMPLEMENTATION
}

// open or close the door
// Hint: Modify CSS values for .door
function operateDoor (entities) {
	// IMPLEMENTATION
}

// change the room temperature
// Hint: Modify text value for #temp
function changeTemp (entities) {
	// IMPLEMENTATION
}
