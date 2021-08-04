document.querySelector(".again").addEventListener('click', function() {
    guess();
})

function guess() {
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    let guess = Number(document.querySelector('.guess').value);
    
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!';
    }

}
