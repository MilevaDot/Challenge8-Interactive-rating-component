const submitButton = document.getElementById('submit-button');
const circleNumbers = document.querySelectorAll('.number')
const principalCard = document.querySelector('.principal');
const thankYouCard = document.querySelector('.thank-you');
const cardRating = document.querySelector('.card-rating');
let selectedNumber;

submitButton.addEventListener('click', thankYou);

circleNumbers.forEach(circleNumber => {
    circleNumber.addEventListener('click', function() {
        circleNumbers.forEach(number => number.classList.remove('title-background'));
        this.classList.add('title-background')
        selectedNumber = this;
    });
});

function thankYou () {
    if ( selectedNumber ) {
        const number = selectedNumber.innerText;
        principalCard.classList.add('inactive');
        thankYouCard.classList.remove('inactive');
        cardRating.innerText = `You selected ${number} out of 5`
    }
}