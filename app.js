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
      element.classList.add("init-animate");
    });
  }

  prepAnimation();

  function triggerAnimation() {
    console.log("trigger");
    allElements.forEach(element => {
      let triggerThreshold = 150;
      let windowHeight = window.innerHeight;
      // let elementTop = element.getBoundingClientRect();
      // console.log(elementTop);
      
      if (elementTop < windowHeight - triggerThreshold) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", function() {
    triggerAnimation();
  });

  const scrollObserver = new IntersectionObserver ((component) => {
    console.log(component);
    component.forEach((part) => {
      if (part.isIntersecting) {
        part.target.classList.add("active");
        // part.target.classList.remove("init-animate");
      } else {
        part.target.classList.remove("active");
        // part.target.classList.add("init-animate");
      }
    });
  });

  allElements.forEach(element => {
    scrollObserver.observe(element);
  });

});
