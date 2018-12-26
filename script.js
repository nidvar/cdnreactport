var homeNav = document.getElementById('home');
var aboutNav = document.getElementById('about');
var portfolioNav = document.getElementById('portfolio');
var contactNav = document.getElementById('contact');



var homeSection = document.querySelector('.homeSection');
var aboutSection = document.querySelector('.aboutSection');
var portfolioSection = document.querySelector('.portfolioSection');
var contactSection = document.querySelector('.contactSection');

function clickAbout(){
	aboutSection.classList.remove('hide');
	homeSection.classList.add('hide');
	portfolioSection.classList.add('hide');
	contactSection.classList.add('hide');
}
function clickHome(){
	aboutSection.classList.add('hide');
	homeSection.classList.remove('hide');
	portfolioSection.classList.add('hide');
	contactSection.classList.add('hide');
}
function clickPortfolio(){
	aboutSection.classList.add('hide');
	homeSection.classList.add('hide');
	portfolioSection.classList.remove('hide');
	contactSection.classList.add('hide');
}
function clickContact(){
	aboutSection.classList.add('hide');
	homeSection.classList.add('hide');
	portfolioSection.classList.add('hide');
	contactSection.classList.remove('hide');
}

aboutNav.addEventListener('click', clickAbout);
homeNav.addEventListener('click', clickHome);
contactNav.addEventListener('click', clickContact);
portfolioNav.addEventListener('click', clickPortfolio);
