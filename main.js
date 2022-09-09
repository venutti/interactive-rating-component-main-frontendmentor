const submitButton = document.querySelector("#front-rating .submit-button");
submitButton.addEventListener("click", function(e) {
    const userRate = getUserRate();
    if (userRate) {
        updateUserRate(userRate);
        flipRatingCard();
    }
    e.preventDefault();
});

function getUserRate() {
    const userRateButton = document.querySelector('#front-rating input[name="rating-stars"]:checked');
    const userRate = (userRateButton) ? +userRateButton.value : 0;
    return userRate;
}
function updateUserRate(userRate) {
    const userRateElement = document.querySelector("#back-rating .user-rate");
    userRateElement.textContent = userRate;
}
function flipRatingCard() {
    const frontRatingCard = document.querySelector("#front-rating");
    const backRatingCard = document.querySelector("#back-rating");
    frontRatingCard.classList.toggle("hide");
    backRatingCard.classList.toggle("hide");
}