const coloursList = ["green", "red", "rgba(133,122,200)", "#f1f5f8"];
const btn = document.getElementById('btn');
const colourName = document.querySelector('.colour');

btn.addEventListener('click', function () {
    // Generate a random number between 0-3
    const randomColourNumber = getRandomNumber();
    document.body.style.backgroundColor = coloursList[randomColourNumber];
    colourName.textContent = coloursList[randomColourNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * coloursList.length);
}