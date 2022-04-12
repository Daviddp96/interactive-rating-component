const submitButton = document.getElementById('submit-btn');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thankyou-card');
const ratings = document.querySelectorAll('label[class=rating][for]');
const cardForm = document.getElementById('card-form');

cardForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedRating = document.querySelector('input[type=radio]:checked').value;
    if(selectedRating !== null) {
        const userSelection = document.getElementById('selection-message__number');
        userSelection.innerHTML = selectedRating;
        ratingCard.classList.add('hidden');
        thankYouCard.classList.remove('hidden');
    }
})