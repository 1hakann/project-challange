let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score;

document.querySelector(".check").addEventListener('click', function() {
    guess();
})

function guess() {
    

    document.querySelector('.number').textContent = secretNumber; 
    let guess = Number(document.querySelector('.guess').value);
    
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!';
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent =  '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }

}
