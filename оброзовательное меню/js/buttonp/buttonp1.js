var modalp1 = document.querySelector(".modal-p1");
var triggerp1 = document.querySelector(".trigger-p1");
var closeButtonp1 = document.querySelector(".close-button-p1");

function toggleModal() {
    modalp1.classList.toggle("show-modal-p1");
}

function windowOnClick(event) {
    if (event.target === modalp1) {
        toggleModal();
    }
}

triggerp1.addEventListener("click", toggleModal);
closeButtonp1.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);