var modaldi1 = document.querySelector(".modal-di1");
var triggerdi1 = document.querySelector(".trigger-di1");
var closeButtondi1 = document.querySelector(".close-button-di1");

function toggleModal() {
    modaldi1.classList.toggle("show-modal-di1");
}

function windowOnClick(event) {
    if (event.target === modaldi1) {
        toggleModal();
    }
}

triggerdi1.addEventListener("click", toggleModal);
closeButtondi1.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);