var itemMenuContr = document.querySelectorAll(".contract-menu__cap a");
console.log (itemMenuContr);


for (var i = 0; i < itemMenuContr.length; i++) {
    itemMenuContr[i].addEventListener('click', function(event) {
        event.preventDefault();
        clickMenuContr (this);
    });
}

function clickMenuContr (el) {
    var items = document.querySelectorAll(".contract-menu__item");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("contract-menu__item--active");
    }
    el.parentElement.parentElement.classList.add("contract-menu__item--active")
};