document.addEventListener("DOMContentLoaded", function() {
  //   Navbar Scrollspy
  const navBarArray = Array.from(document.querySelectorAll(`#navbar ul li a`)); // need to use Array.form to change from nodelist to array
  const sections = Array.from(document.querySelectorAll("section"));
  const creditsSection = document.querySelector("#credits");
  const filteredSections = sections.filter((item) => item !== creditsSection);

  const scrollSpyOption = {
    threshold: 0.8,
  };

  const scrollSpy = new IntersectionObserver((component) => {
    component.forEach((part) => {
      const currentSection = document.querySelector(`.nav-item a[href='#${part.target.id}']`);
      const notCurrentSection = navBarArray.filter((item) => item !== currentSection);
      if (part.isIntersecting) {
        notCurrentSection.forEach((element) => {
          element.classList.remove("active");
        });
        currentSection.classList.add("active");
      }
    });
  }, scrollSpyOption);

  filteredSections.forEach((element) => {
    scrollSpy.observe(element);
  });

  // Animate on scroll

  const allElements = document.querySelectorAll("section > *, nav");

  const aosOption = {
    threshold: 0.1,
  };

  function prepAnimation() {
    allElements.forEach((element) => {
      element.classList.add("init-animate");
    });
  }

  prepAnimation();

  const scrollObserver = new IntersectionObserver((component) => {
    component.forEach((element) => {
      if (element.isIntersecting) {
        element.target.classList.add("active");
      } else {
        element.target.classList.remove("active");
      }
    });
  }, aosOption);

  allElements.forEach((element) => {
    scrollObserver.observe(element);
  });

  // Force links to open in new tab

  const allAnchors = Array.from(document.querySelectorAll("a"));

  function setTargetBlank() {
    let filteredAnchors;
    allAnchors.forEach((element) => {
      filteredAnchors = allAnchors.filter((item) => !navBarArray.includes(item));
    });
    filteredAnchors.forEach((element) => {
      element.setAttribute("target", "_blank");
    });
  }

  setTargetBlank();
});
