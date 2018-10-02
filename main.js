var left = 0,
	vert = 0,
	item = document.getElementById('item')

window.onkeydown = function move(){
	if (event.keyCode == 37 && left > 0){
		left = left - 50;
		item.style.left = left + 'px';
		item.style.transform = 'rotate(0deg)';
		console.log(left + 'px')
	} else if(event.keyCode == 39 && left < 300){
		left = left + 50;
		item.style.left = left + 'px';
		item.style.transform = 'rotate(180deg)';
		console.log(left + 'px')
	} else if(event.keyCode == 40 && vert < 300){
			vert = vert + 50;
			item.style.top = vert + 'px';
			item.style.transform = 'rotate(-90deg)';
			console.log(vert + 'px')
	} else if (event.keyCode == 38 && vert > 0){
		vert = vert - 50;
		item.style.top = vert + 'px';
		item.style.transform = 'rotate(90deg)';
		console.log(vert + 'px')
	}
}
