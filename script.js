if(document.URL.indexOf("index.html") >= 0){
	document.querySelector('.homeb').classList.add('blink');
	document.querySelector('.aboutb').classList.remove('blink');
	alert('hi');
	}
if(document.URL.indexOf("about.html") >= 0){
	document.querySelector('.homeb').classList.remove('blink');
	document.querySelector('.aboutb').classList.add('blink');
	}
