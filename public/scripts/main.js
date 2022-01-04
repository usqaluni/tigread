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

if(pages.length > 1){  //else page remains without pagination
    let currentPage = 0;
    textContainer.innerText = pages[currentPage];
    currentPage++;

    let pageBack = document.createElement('a');
    pageBack.innerHTML = "<i class=\"material-icons\">chevron_right</i> forward";
    pageBack.setAttribute("id", "back");
    textContainer.after(pageBack);
    pageBack.onclick = function () {
        if(currentPage > 0){
            textContainer.innerText = pages[currentPage--];
        } else {
            textContainer.innerText = pages[0]
            pages.setAttribute("class", "disabled");
        }
    }

    let pageForward = document.createElement('a');
    pageForward.innerHTML = "<i class=\"material-icons\">chevron_left</i> back";
    pageForward.setAttribute("id", "forward");
    textContainer.after(pageForward);
    pageForward.onclick = function () {
        if(currentPage < pages.length - 1){
            textContainer.innerText = pages[currentPage++];
        } else {
            textContainer.innerText = pages[pages.length - 1];
            pageForward.setAttribute("class", "disabled");
        }
    }
}







