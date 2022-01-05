function paginate(text, symbolsPerPage) {

    let array = [...text];
    let pages = [];

    while (array.length > symbolsPerPage) {
        let cutIndex = array.indexOf(" ", symbolsPerPage); //every page is little bit bigger than symbolsPerPage, we can`t cut words
        let onePageArray = array.splice(0, cutIndex);
        let onePage = onePageArray.join('');
        pages.push(onePage);
    }
    if(array.length != 0){
        pages.push(array.join(''));
    }
    return pages;
}

let textContainer = document.getElementById("resulttext");
let text = textContainer.innerText;
let pages = paginate(text, 1750);
let currentPage = 1;

if(pages.length == 1) {
    document.getElementById("pagination").style.display = "none";
} else {
    let backButton = document.getElementById("pageBack");
    let forwardButton = document.getElementById("pageForward");
    let pageNumber = document.getElementById("pageNumber");

    textContainer.innerText = pages[currentPage-1];
    pageNumber.value = currentPage;

    backButton.onclick = function () {
        if(currentPage <= 1) {
            currentPage = 1;
            textContainer.innerText = pages[currentPage - 1];
        } else {
            currentPage--;
            textContainer.innerText = pages[currentPage - 1];
        }
        pageNumber.value = currentPage;
    }

    forwardButton.onclick = function () {
        if(currentPage >= pages.length) {
            currentPage = pages.length;
            textContainer.innerText = pages[currentPage - 1];
        } else {
            currentPage++;
            textContainer.innerText = pages[currentPage - 1];
        }
        pageNumber.value = currentPage;
    }

    pageNumber.oninput = function () {
        if(pageNumber.value) currentPage = pageNumber.value;

        if(currentPage < 1) {
            currentPage = 1;
            pageNumber.value = currentPage;
        } else if(currentPage > pages.length) {
            currentPage = pages.length;
            pageNumber.value = currentPage;
        }

        textContainer.innerText = pages[currentPage - 1];
    }

}