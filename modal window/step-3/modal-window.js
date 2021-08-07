let modal = document.querySelector('.modal');
let btnCloseModal = document.querySelector('.close-modal');
let btnOpenModal = document.querySelector('.open-modal');
let overlay = document.querySelector('.overlay');

document.addEventListener('keydown', function(e) {
   if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
   } 
});

function question1() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

