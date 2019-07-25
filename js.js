$(window).on("load", function() {
// Get the modal

var modal = $("#myModal");
// Get the button that opens the modal
var btn = $("#myBtn");

// Get the <span> element that closes the modal
var span = $(".close")[0];

// When the user clicks the button, open the modal 
$(btn).click(function(){
  $(modal).css("display","block");
});
// When the user clicks on <span> (x), close the modal
$(span).click(function(){
  $(modal).css("display","none")
});

// When the user clicks anywhere outside of the modal, close it

$(window).click(function(){
  if (event.target == modal) {
    $(modal).css("display","none")
       }
});
  $("#SubBtn").click(function(){
      var Pin =$("#PW").val();
      var PinCode = '1234';
      switch(Pin === PinCode){ 
          case true:
              console.log("Worked");
              $(modal).css("display","none");

            break;
        case false:
            $("#WrongPin").css("color", "red").css("display","block");
           
            
            console.log("also worked");
        }
     

  });
});