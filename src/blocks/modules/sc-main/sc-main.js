//якоря
document.getElementById("btn-scroll").onclick = function() {
	document.getElementById('scrl-about').scrollIntoView({block: 'start',behavior: 'smooth' });
};

function initVideo () {
	if (window.matchMedia("(min-width: 767px)").matches) {
	videoCont.style.backgroundColor = '#00171F';
	document.getElementById('backVideo').load();
	document.getElementById('backVideo').play();
	}
};

initVideo();






