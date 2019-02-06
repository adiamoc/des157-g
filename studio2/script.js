'use strict';

console.log('preparing...');

onmousemove = function(e){
	var x = e.clientX+(1366 - Math.max(document.documentElement.clientWidth, window.innerWidth || 0))/2;
	var y = e.clientY+(768 - Math.max(document.documentElement.clientHeight, window.innerHeight || 0))/2;
	if (x<570 && x>460 && y>200 && y<380) {
		// quearySelector()
	} else {
		
	}
}

// console.log("width:", w, h)
//460-570 200-380
