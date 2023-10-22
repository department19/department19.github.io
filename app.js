document.addEventListener("DOMContentLoaded", function() {
  //   Navbar Scrollspy
  const navBarArray = Array.from(document.querySelectorAll(`#navbar ul li a`));
  const section = document.querySelectorAll("section");

  const scrollSpyOption = {
    threshold: 0.8,
  };

  const scrollSpyAdd = new IntersectionObserver((component) => {
    component.forEach((part) => {
      // console.log(part.target);
      console.log(navBarArray);
      const currentSection = document.querySelector(`.nav-item a[href='#${part.target.id}']`);
      // console.log(currentSection);
      const notCurrentSection = navBarArray.filter((item) => item !== currentSection);
      console.log(notCurrentSection);
      if (part.isIntersecting) {
        notCurrentSection.forEach((element) => {
          element.classList.remove("active");
        });
        // console.log(currentSection);
        currentSection.classList.add("active");
      }
    });
  }, scrollSpyOption);

  section.forEach((element) => {
    scrollSpyAdd.observe(element);
  });

  // Animate on scroll

  const allElements = document.querySelectorAll("section > *, nav");

  const aosOption = {
    threshold: 1,
  };

  function prepAnimation() {
    allElements.forEach((element) => {
      element.classList.add("init-animate");
    });
  }

  prepAnimation();

  const scrollObserver = new IntersectionObserver((component) => {
    component.forEach((part) => {
      // console.log(part.target);
      if (part.isIntersecting) {
        part.target.classList.add("active");
      } else {
        part.target.classList.remove("active");
      }
    });
  }, aosOption);

  allElements.forEach((element) => {
    scrollObserver.observe(element);
  });
});
