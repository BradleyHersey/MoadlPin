$(window).on("load", function() {
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// password function 
// function Wrong() {
//     var x = document.getElementById("WrongPin");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
  $("#SubBtn").click(function(){
      var Pin =$("#PW").val();
      var PinCode = '1234';
      switch(Pin === PinCode){ 
          case true:
              console.log("Worked");
              modal.style.display = "none";

            break;
        case false:
            console.log("also worked");
        }
     

  });
});