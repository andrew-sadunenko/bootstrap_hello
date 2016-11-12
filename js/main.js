function greet(p, name) {
	console.log("greet");

	if (!document.getElementById("dtCheckBox").checked) {
		removeOnSubmitEvents();	
	};

	p.innerHTML = "Hello, " + name.value + "!";
};

function writeHHMM(p) {
	console.log("HHMM");
	var n = new Date();
	var hh = n.getHours();
	var mm = n.getMinutes();

	p.innerHTML = hh + ":" + mm;
};

function writeYYYY(p) {
	console.log("YYYY");
	var n = new Date();
	var yyyy = n.getFullYear();

	p.innerHTML = yyyy;
};

var mySubmitEvents = new Array();
var myForm = document.getElementById("mainForm");

myForm.addEventListener("submit", mySubmitEvents[mySubmitEvents.length] = function() {
	greet(document.getElementById("greetText"), document.getElementById("username"))
});

myForm.addEventListener("submit", mySubmitEvents[mySubmitEvents.length] = function() {
	writeHHMM(document.getElementById("HHMMText"))
});

myForm.addEventListener("submit", mySubmitEvents[mySubmitEvents.length] = function() {
	writeYYYY(document.getElementById("YYYYText"))
});

function removeOnSubmitEvents() {
	mySubmitEvents.forEach(function(element, index, mySubmitEvents) { 
		myForm.removeEventListener("submit", element)
	});
};