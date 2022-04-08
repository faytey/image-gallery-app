const boxes = document.querySelectorAll('.box');
function toggleOpen() {
    this.classList.toggle('open');
};


function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    };
}

boxes.forEach(box => box.addEventListener("click", toggleOpen));
boxes.forEach(box => box.addEventListener("transitionend", toggleActive));
