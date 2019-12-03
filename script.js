document.addEventListener('DOMContentLoaded', function() {

window.addEventListener('scroll', myFunctionForSticky);
//window.onscroll = function() {myFunctionForSticky()};

  // var navbar = document.getElementById("navbar");
  var navbar = document.getElementsByClassName("navbar");
  var sticky = navbar[0].offsetTop;

  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      console.log("window.pageYOffset >= sticky");
      navbar[0].classList.add("sticky")
    } else {
      console.log("Not window.pageYOffset >= sticky");
      navbar[0].classList.remove("sticky");
    }
    // if (window.pageYOffset >= sticky) {
    //   navbar.classList.add("sticky");
    // } else {
    //   navbar.classList.remove("sticky");
    // }
  }

  function myFunctionForResponsive() {
    navbar[0].classList.toggle('responsive');
  } 
})
