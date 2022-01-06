document.addEventListener('DOMContentLoaded', function() {
    let fontSizeSmallerButton = document.getElementById('fontSizeSmaller');
    let fontSizeBiggerButton = document.getElementById('fontSizeBigger');
    let fontSize = document.getElementById('fontSize');
    let text = document.getElementById('resultText');

    let size = 14;
    text.style.fontSize = `${size}pt`;

    fontSizeSmallerButton.onclick = () => {
        size--;
        text.style.fontSize = `${size}pt`;
        fontSize.innerText = size;
    }

    fontSizeBiggerButton.onclick = () => {
        size++;
        text.style.fontSize = `${size}pt`;
        fontSize.innerText = size;
    }
});