var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var launchModal = document.querySelector('.button2')
var exitModal = document.querySelector('.close-button')

launchModal.addEventListener('click', openModal);

function openModal() {
    backdrop.style.display = 'block';
        modal.style.display = 'block';
}

backdrop.addEventListener('click', closeModal);

exitModal.addEventListener('click', closeModal);

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

