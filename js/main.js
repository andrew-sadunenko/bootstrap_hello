function greet(p, name) {
	p.innerHTML = "Hello, " + name.value + "!";
};

function writeHHMM(p) {
	var n = new Date();
	var hh = "HH: " + n.getHours();
	var mm = " MM: " + n.getMinutes();

	p.innerHTML = hh + mm;
};

var myForm = document.getElementById("mainForm");
myForm.addEventListener("submit", function(){greet(document.getElementById("greetText"), document.getElementById("username"))}, false);
myForm.addEventListener("submit", function(){writeHHMM(document.getElementById("HHMMText"))}, false);