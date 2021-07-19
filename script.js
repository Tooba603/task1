function changefontsize() {

  var myInputs = document.querySelectorAll("textarea");
  for(var i = 0; i< myInputs.length; i++){
    var myInput = myInputs[i];
    if(isOverflown(myInput)) {
      while (isOverflown(myInput)){
        currentfontsize--;
        myInput.style.fontSize = currentfontsize + 'px';
      }
    }
    else {
      currentfontsize = 13;
      myInput.style.fontSize = currentfontsize + 'px';
      while (isOverflown(myInput)){
      currentfontsize--;
      myInput.style.fontSize = currentfontsize + 'px';
      }
    }
  }
}

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight;
}
