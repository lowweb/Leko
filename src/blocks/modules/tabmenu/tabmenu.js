var tabitem = document.querySelectorAll(".tabmenu__item");

for (var i = 0; i < tabitem.length; i++) {
    tabitem[i].addEventListener('click', function(event) {
        clickTab (this);
    });
}

function clickTab (el) {
    var items = document.querySelectorAll(".tabmenu__item");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("tabmenu__item--active");
    }
    el.classList.add("tabmenu__item--active")
};