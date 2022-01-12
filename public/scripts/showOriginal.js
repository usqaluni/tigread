
let showButton = document.getElementById('show');
let transliteratedText = document.getElementById('resultText');
let originalText = document.getElementById('originalText');


showButton.onclick = () => {
      let selection = window.getSelection();
      let start = selection.anchorOffset;
      M.toast({html: start});
};