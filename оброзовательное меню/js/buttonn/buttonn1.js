var modaln1 = document.querySelector(".modal-n1");
var triggern1 = document.querySelector(".trigger-n1");
var closeButtonn1 = document.querySelector(".close-button-n1");

function toggleModal() {
    modaln1.classList.toggle("show-modal-n1");
}

function windowOnClick(event) {
    if (event.target === modaln1) {
        toggleModal();
    }
}

triggern1.addEventListener("click", toggleModal);
closeButtonn1.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);