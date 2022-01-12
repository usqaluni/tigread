document.addEventListener('DOMContentLoaded', function() {
    let fontSizeSmallerButton = document.getElementById('fontSizeSmaller');
    let fontSizeBiggerButton = document.getElementById('fontSizeBigger');
    let fontSize = document.getElementById('fontSize');
    let text = document.getElementById('resultText');

    let size = 20;
    text.style.fontSize = `${size}pt`;

    fontSizeSmallerButton.onclick = () => {
        if(size > 8) {
            size--;
        } else {
            size = 8;
        }
        text.style.fontSize = `${size}pt`;
        fontSize.innerText = size;
    }

    fontSizeBiggerButton.onclick = () => {
        if(size < 70) {
            size++;
        } else {
            size = 70;
        }
        text.style.fontSize = `${size}pt`;
        fontSize.innerText = size;
    }
});