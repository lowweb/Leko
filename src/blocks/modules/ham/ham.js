document.getElementById("menu-btn").onclick = function() {
	document.getElementById("menu-btn").classList.toggle('ham--active');
	document.getElementsByClassName('hd')[0].classList.toggle('hd--opn');
};