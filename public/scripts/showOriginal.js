
let showButton = document.getElementById('show');
let transliteratedText = document.getElementById('resultText').innerText;
let originalText = document.getElementById('originalText').innerText;

let separatedText = transliteratedText.split(/[ |\n]/);
let separatedOriginal = originalText.split(/[ |\n]/);

function findWordIndex(array, index) {
      let sum = 0;
      let i = 0;
      while (sum < index) {
            sum += array[i].length + 1;
            if(sum < index) i++;
      }
      return (i);
}
showButton.onclick = () => {
      if(!window.getSelection().isCollapsed){
            let selection = window.getSelection();
            let start = selection.anchorOffset;
            let word = separatedOriginal[findWordIndex(separatedText, start + 1)];
            let rgxPunctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
            M.toast({html: word.replace(rgxPunctuation, "")});
      } else {
            M.toast({html: "Select some word"});
      }

};