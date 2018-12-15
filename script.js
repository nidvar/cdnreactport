if(document.URL.indexOf("index.html") >= 0){
	    	document.querySelector('.home').classList.add('blink');
        document.querySelector('.about').classList.remove('blink');
        document.querySelector('.work').classList.remove('blink');
        document.querySelector('.contact').classList.remove('blink');
	}
    if(document.URL.indexOf("about.html") >= 0){
        document.querySelector('.home').classList.remove('blink');
        document.querySelector('.about').classList.add('blink');
        document.querySelector('.work').classList.remove('blink');
        document.querySelector('.contact').classList.remove('blink');
    }
    if(document.URL.indexOf("work.html") >= 0){
        document.querySelector('.home').classList.remove('blink');
        document.querySelector('.about').classList.remove('blink');
        document.querySelector('.work').classList.add('blink');
        document.querySelector('.contact').classList.remove('blink');
    }
    if(document.URL.indexOf("contact.html") >= 0){
        document.querySelector('.home').classList.remove('blink');
        document.querySelector('.about').classList.remove('blink');
        document.querySelector('.work').classList.remove('blink');
        document.querySelector('.contact').classList.add('blink');
    }
