var modald1 = document.querySelector(".modal-d1");
var triggerd1 = document.querySelector(".trigger-d1");
var closeButtond1 = document.querySelector(".close-button-d1");

function toggleModal() {
    modald1.classList.toggle("show-modal-d1");
}

function windowOnClick(event) {
    if (event.target === modald1) {
        toggleModal();
    }
}

triggerd1.addEventListener("click", toggleModal);
closeButtond1.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);