function closeMenu () {
  if (document.querySelector('.hd').classList.contains('hd--opn')) {
    document.getElementsByClassName('hd')[0].classList.remove('hd--opn');
    document.getElementById("menu-btn").classList.remove('ham--active');
 };
}

document.getElementById("contacts").onclick = function() {
  event.preventDefault();
  document.getElementById('scrl-contacts').scrollIntoView({block: 'start',behavior: 'smooth' });
  closeMenu ();
};

document.getElementById("service").onclick = function() {
  event.preventDefault();
  document.getElementById('scrl-service').scrollIntoView({block: 'start',behavior: 'smooth' });
  closeMenu ();
};

document.getElementById("aboutus").onclick = function() {
  event.preventDefault();
  document.getElementById('scrl-about').scrollIntoView({block: 'start',behavior: 'smooth' });
  closeMenu ();
};

document.getElementById("mainpage").onclick = function() {
  closeMenu ();
};

