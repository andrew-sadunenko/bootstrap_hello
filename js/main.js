function greet(event) {
	var name = document.getElementById("username");
	var p = document.getElementById("greetText");

	console.log("greet");

	p.innerHTML = "Hello, " + name.value + "!";

	if (!document.getElementById("dtCheckBox").checked){
		event.stopImmediatePropagation();
	}
};

function writeHHMM(event) {
	var p = document.getElementById("HHMMText");
	var n = new Date();
	var hh = n.getHours();
	var mm = n.getMinutes();

	console.log("HHMM");

	p.innerHTML = hh + ":" + mm;
};

function writeYYYY(event) {
	var p = document.getElementById("YYYYText");
	var n = new Date();
	var yyyy = n.getFullYear();
	
	console.log("YYYY");

	p.innerHTML = yyyy;
};

var myForm = document.getElementById("mainForm");

myForm.addEventListener("submit", greet);
myForm.addEventListener("submit", writeHHMM);
myForm.addEventListener("submit", writeYYYY);