'use strict';

console.log('preparing...');

var selected = -1;
var xoffset = 20, yoffset = 20;
var flag = 0;

h1_text();

// create background text
function h1_text() {
	var h1_ele = document.querySelector("h1");
	for (var i = 0; i <= 100; i++) {
		h1_ele.innerHTML += 'Chen Ma\'s Backpack.	';
	}
}

// hover over color change and selection
onmousemove = function(e){
	var x = e.clientX + (1366 - Math.max(document.documentElement.clientWidth, window.innerWidth || 0))/2;
	var y = e.clientY + (768 - Math.max(document.documentElement.clientHeight, window.innerHeight || 0))/2;
	document.getElementById('mac').classList.add('mac');
	document.getElementById('mac').classList.remove('mac_red');
	document.getElementById('phone').classList.add('phone');
	document.getElementById('phone').classList.remove('phone_red');
	document.getElementById('earphone').classList.add('earphone');
	document.getElementById('earphone').classList.remove('earphone_red');
	if ((x<600+xoffset && x>580-xoffset && y<620+yoffset && y>440-yoffset) 
	|| (x<700+xoffset && x>630-xoffset && y<630+yoffset && y>480-yoffset)){ //2 earphone
		document.getElementById('earphone').classList.add('earphone_red');
		document.getElementById('earphone').classList.remove('earphone');
		selected = 2;
	} else if (x<580+xoffset && x>460-xoffset && y>200-yoffset && y<380+yoffset) { //0 phone
		document.getElementById('phone').classList.add('phone_red');
		document.getElementById('phone').classList.remove('phone');
		selected = 0;
	} else if (x<840+xoffset && x>580-xoffset && y<430+yoffset && y>170-yoffset){ //1 mac
		document.getElementById('mac').classList.add('mac_red');
		document.getElementById('mac').classList.remove('mac');
		selected = 1;
	} else {
		selected = -1;
	}
	// console.log(selected);
}

// display text message
onclick = function(e) {
	if (flag == 0 && selected != -1) {
		document.getElementById('nametag').classList.add('hide');
		document.getElementById('bag').className = 'close';
		document.getElementById('mac').classList.add('hide');
		document.getElementById('phone').classList.add('hide');
		document.getElementById('earphone').classList.add('hide');
		document.getElementById('cover').classList.add('hide');
		if (selected == 1) {
			document.getElementById('mac_p').classList.remove('hide');
		} else if (selected == 0) {
			document.getElementById('phone_p').classList.remove('hide');
		} else {
			document.getElementById('earphone_p').classList.remove('hide');
		}
	} else {
		document.getElementById('nametag').classList.remove('hide');
		document.getElementById('bag').className = 'open';
		document.getElementById('mac').classList.remove('hide');
		document.getElementById('phone').classList.remove('hide');
		document.getElementById('earphone').classList.remove('hide');
		document.getElementById('cover').classList.remove('hide');
		document.getElementById('mac_p').classList.add('hide');
		document.getElementById('phone_p').classList.add('hide');
		document.getElementById('earphone_p').classList.add('hide');

	}
	flag ^= 1;
}
