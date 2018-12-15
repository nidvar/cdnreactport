if(document.URL.indexOf("index.html") >= 0){
	    	document.querySelector('.homeb').classList.add('blink');
        document.querySelector('.aboutb').classList.remove('blink');
        document.querySelector('.workb').classList.remove('blink');
        document.querySelector('.contactb').classList.remove('blink');
	}
    if(document.URL.indexOf("about.html") >= 0){
        document.querySelector('.homeb').classList.remove('blink');
        document.querySelector('.aboutb').classList.add('blink');
        document.querySelector('.workb').classList.remove('blink');
        document.querySelector('.contactb').classList.remove('blink');
    }
    if(document.URL.indexOf("work.html") >= 0){
        document.querySelector('.homeb').classList.remove('blink');
        document.querySelector('.aboutb').classList.remove('blink');
        document.querySelector('.workb').classList.add('blink');
        document.querySelector('.contactb').classList.remove('blink');
    }
    if(document.URL.indexOf("contact.html") >= 0){
        document.querySelector('.homeb').classList.remove('blink');
        document.querySelector('.aboutb').classList.remove('blink');
        document.querySelector('.workb').classList.remove('blink');
        document.querySelector('.contactb').classList.add('blink');
    }
