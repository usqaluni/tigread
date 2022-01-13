document.addEventListener('DOMContentLoaded', function() {
    let nightButton = document.getElementById('night');
    let text = document.getElementById('resultText');
    let navbar = document.getElementById('navbar');
    let footer = document.getElementById('footer');

    let showButton = document.getElementById('showButton');

    let isNight = false;

    nightButton.onclick = () => {
        if(isNight) {
            isNight = false;
            text.style.color = "black";
            text.style.transition = "all 1s";
            document.body.style.backgroundColor = "white";
            document.body.style.transition = "all 1s";
            navbar.classList.remove("black");
            navbar.classList.add("orange");
            footer.classList.remove("black");
            footer.classList.add("orange");
            showButton.classList.remove("black");
            showButton.classList.add("orange");
        } else {
            isNight = true;
            text.style.color = "white";
            text.style.transition = "all 1s";
            document.body.style.backgroundColor = "black";
            document.body.style.transition = "all 1s";
            navbar.classList.remove("orange");
            navbar.classList.add("black");
            footer.classList.remove("orange");
            footer.classList.add("black");
            showButton.classList.remove("orange");
            showButton.classList.add("black");
        }
    }
});