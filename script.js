if(document.URL.indexOf("https://nidvar.github.io/index.html") >= 0){
	document.querySelector('.homeb').classList.add('blink');
	document.querySelector('.aboutb').classList.remove('blink');
	}
if(document.URL.indexOf("https://nidvar.github.io/about.html") >= 0){
	document.querySelector('.homeb').classList.remove('blink');
	document.querySelector('.aboutb').classList.add('blink');
	}
