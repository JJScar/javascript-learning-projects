const hexCharacterList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colourName = document.querySelector('.colour');
const numberOfHexColourCharacter = 6;

btn.addEventListener('click', function () {
    // Generate a random number between 0-3
    let hexValue = '#';

    for (let i = 0; i < numberOfHexColourCharacter; i++) {
        hexValue += hexCharacterList[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexValue;
    colourName.textContent = hexValue;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hexCharacterList.length);
}