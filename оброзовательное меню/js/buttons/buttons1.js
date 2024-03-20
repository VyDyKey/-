var modals1 = document.querySelector(".modal-s1");
var triggers1 = document.querySelector(".trigger-s1");
var closeButtons1 = document.querySelector(".close-button-s1");

function toggleModal() {
    modals1.classList.toggle("show-modal-s1");
}

function windowOnClick(event) {
    if (event.target === modals1) {
        toggleModal();
    }
}

triggers1.addEventListener("click", toggleModal);
closeButtons1.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);