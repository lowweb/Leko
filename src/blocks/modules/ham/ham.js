document.getElementById("menu-btn").onclick = function() {
	document.getElementById("menu-btn").classList.toggle('ham--active');
	document.getElementsByClassName('menu__nav')[0].classList.toggle('menu__nav--opn');
};