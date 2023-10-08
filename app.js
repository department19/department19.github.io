document.addEventListener("DOMContentLoaded", function() {
  //   Navbar functionality
  const navBar = document.getElementById("navbar");

  function togglenavbar() {
    navBar.classList.toggle("nav-active");
  }


  // initial animation
  const allElements = document.querySelectorAll("section > *");

  function prepAnimation() {
    allElements.forEach((element) => {
      element.classList.add("init-animation");
    });
    // allElements.classList.add("init-animation");
  }

  prepAnimation();
});
