'use strict';

console.log('preparing...');

// init variables
var falvourChoice, toppingChoice, teaChoice;

document.querySelector('#reset').addEventListener('click', resetForm);
document.querySelector('#submit').addEventListener('click', processForm);

var flavourButton = document.querySelectorAll('#flavour input[type="radio"]');
var toppingButton = document.querySelectorAll('#topping input[type="radio"]');
var teaButton = document.querySelectorAll('#tea input[type="radio"]');

for (var i=0; i<flavourButton.length; i++){
	flavourButton[i].addEventListener('click', whichFalvour);
}
for (var i=0; i<toppingButton.length; i++){
	toppingButton[i].addEventListener('click', whichTopping);
}
for (var i=0; i<teaButton.length; i++){
	teaButton[i].addEventListener('click', whichTea);
}

function whichFalvour(){
	falvourChoice = this.getAttribute('value');
}
function whichTopping(){
	toppingChoice = this.getAttribute('value');
}
function whichTea(){
	teaChoice = this.getAttribute('value');
}

function processForm(evt) { // get user inputs

	var userName = document.querySelector('#myname').value;
	if (!userName) {userName = 'Chen'}
	document.getElementById('tag').innerHTML = userName;
	document.getElementById('nametag').classList.remove('hide');
	document.getElementById('question').classList.add('hide');

	document.getElementById('milkteaimg').classList.remove('hide');

	for (var i=0; i<flavourButton.length; i++){
		document.getElementById(flavourButton[i].getAttribute('value')+'img').classList.add('hide');
	}
	for (var i=0; i<toppingButton.length; i++){
		document.getElementById(toppingButton[i].getAttribute('value')+'img').classList.add('hide');
	}
	for (var i=0; i<teaButton.length; i++){
		document.getElementById(teaButton[i].getAttribute('value')+'img').classList.add('hide');
	}

	document.getElementById(falvourChoice+'img').classList.remove('hide');
	document.getElementById(toppingChoice+'img').classList.remove('hide');
	document.getElementById(teaChoice+'img').classList.remove('hide');
	evt.preventDefault();
 	return false;
}

function resetForm() { // reset everything
	document.getElementById('question').classList.remove('hide');
	document.getElementById('nametag').classList.add('hide');
	document.getElementById('milkteaimg').classList.add('hide');
	document.getElementById(falvourChoice+'img').classList.add('hide');
	document.getElementById(toppingChoice+'img').classList.add('hide');
	document.getElementById(teaChoice+'img').classList.add('hide');
}