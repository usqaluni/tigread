
let showButton = document.getElementById('show');
let transliteratedText = document.getElementById('resultText').innerText;
let originalText = document.getElementById('originalText').innerText;

let separatedText = transliteratedText.split(' ');
let separatedOriginal = originalText.split(' ');

function findWordIndex(array, index) {
      let sum = 0;
      let i = 0;
      while (sum < index) {
            sum += array[i].length + 1;
            i++;
      }
      return (i);
}

showButton.onclick = () => {
      if(!window.getSelection().isCollapsed){
            let selection = window.getSelection();
            let start = selection.anchorOffset;
            M.toast({html: separatedOriginal[findWordIndex(separatedText, start)]});
      } else {
            M.toast({html: "Select some word"});
      }

};