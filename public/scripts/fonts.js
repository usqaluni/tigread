document.addEventListener('DOMContentLoaded', function() {
    let text = document.getElementById('resultText');
    let fontNames = document.getElementsByClassName("fontNames");

    let fontStyle = "";

    for(let i = 1; i < fontNames.length; i++) { //first [0] is default that`s why starting at 1
        fontStyle += `
            @font-face {
            font-family: "${fontNames[i].innerHTML}";
            src: url(../fonts/${fontNames[i].getAttribute('id')});
        }\n
        `;
    }

    let style = document.createElement('style');
    style.innerHTML = fontStyle;
    text.after(style);

    for(let i = 0; i < fontNames.length; i++) {
        fontNames[i].onclick = () => {
            if(fontNames[i].innerHTML == "Default") {
                text.style.fontFamily = "initial";
            } else {
                text.style.fontFamily = fontNames[i].innerHTML
            }
        }
    }

});