const submitButton = document.getElementById('submit-btn');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thankyou-card');
const ratings = document.querySelectorAll('label[class=rating][for]');
const cardForm = document.getElementById('card-form');
const card = document.querySelector('.card');

cardForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedRating = document.querySelector('input[type=radio]:checked').value;
    if(selectedRating !== null) {
        const userSelection = document.getElementById('selection-message__number');
        userSelection.innerHTML = selectedRating;

        let flipAnimationDuration = 1800;
        Promise.resolve(
            setTimeout(() => {
                card.classList.add("flip-animation");
                ratingCard.classList.add("visibility-hidden");
            }, 0)
        ).then(
            setTimeout(() => {
                ratingCard.remove();
                thankYouCard.classList.remove("display-none");
                thankYouCard.classList.add("fade-in-top")
            }, flipAnimationDuration)
        )
        }
    }
)