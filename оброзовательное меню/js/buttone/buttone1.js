var modale1 = document.querySelector(".modal-e1");
var triggere1 = document.querySelector(".trigger-e1");
var closeButtone1 = document.querySelector(".close-button-e1");

function toggleModal() {
    modale1.classList.toggle("show-modal-e1");
}

function windowOnClick(event) {
    if (event.target === modale1) {
        toggleModal();
    }
}

triggere1.addEventListener("click", toggleModal);
closeButtone1.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);