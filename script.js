document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('scroll', myFunctionForSticky);

  var navbar = document.getElementById("navbar");

  var sticky = navbar.offsetTop;

  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      console.log("window.pageYOffset >= sticky");
    } else {
      console.log("Not window.pageYOffset >= sticky");
    }
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function myFunctionForResponsive() {
    navbar.classList.toggle('responsive');
  } 
})
