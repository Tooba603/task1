function changefontsize() {
  var myInputs = document.querySelectorAll("textarea");
  for (var i = 0; i < myInputs.length; i++) {
    var myInput = myInputs[i];
    myInput.addEventListener("paste", changefontsize);

    if (isOverflown(myInput)) {
      while (isOverflown(myInput)) {
        currentfontsize--;
        myInput.style.fontSize = currentfontsize + "px";
        //   myInput.addEventListener("keydown", (e) => {
        //     if(e.key === 'Backspace'){
        //       console.log(currentfontsize,"back is pressed");
        //       if(currentfontsize < 13){
        //         currentfontsize++;
        //       myInput.style.fontSize = currentfontsize + 'px';
        //       // while(isOverflown(myInput)){
        //       // currentfontsize++;
        //       // myInput.style.fontSize = currentfontsize + 'px';
        //       // }
        //       }

        //   }

        //   });
      }

      myInput.addEventListener("keydown", preventEnter);
    } else {
      currentfontsize = 13;
      myInput.style.fontSize = currentfontsize + "px";
      while (isOverflown(myInput)) {
        currentfontsize--;
        myInput.style.fontSize = currentfontsize + "px";
      }
    }
  }
}

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight;
}

function preventEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Enter is pressed");
  }
}
