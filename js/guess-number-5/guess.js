let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
} 

document.querySelector(".check").addEventListener('click', function() {
    guess();
})

document.querySelector(".again").addEventListener('click', function() {
    again();
})

function guess() {
    
    document.querySelector('.number').textContent = '?'; 
    let guess = Number(document.querySelector('.guess').value);
    
     // When there is no input
    if (!guess) {
        displayMessage('⛔️ No number');
    
    // When player wins
    } else if(guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
       //css manipulating 
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
    
    // When guess is wrong
    else if (guess !== secretNumber) {
        if(score > 1)  {
            // document.querySelector('.message').textContent =  guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    } 

}

function again() {
    score = 20;
    secretNumber =Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}
