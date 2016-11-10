document.forms["mainForm"].onsubmit = function() {
	greet(document.getElementById("greetText"), document.getElementById("username"));
};

function greet(p, name) {
	p.innerHTML = "Hello, " + name.value + "!";
};