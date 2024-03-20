var modalr1 = document.querySelector(".modal-r1");
var triggerr1 = document.querySelector(".trigger-r1");
var closeButtonr1 = document.querySelector(".close-button-r1");

function toggleModal() {
    modalr1.classList.toggle("show-modal-r1");
}

function windowOnClick(event) {
    if (event.target === modalr1) {
        toggleModal();
    }
}

triggerr1.addEventListener("click", toggleModal);
closeButtonr1.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);