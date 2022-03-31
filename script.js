const submitButton = document.getElementById('submit-btn');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thankyou-card');
const ratings = document.querySelectorAll('label[class=rating][for]');
const cardForm = document.getElementById('card-form');

cardForm.addEventListener("submit", function (e) {
    e.preventDefault();
})