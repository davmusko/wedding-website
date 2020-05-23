console.log("Hi");
let links = document.querySelectorAll(".navigation__link");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector("#nav-toggle").checked = false;
  });
});

//carousel
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
      items: 3,
      itemsDesktop: [1000, 3],
      itemsDesktopSmall: [979, 2],
      itemsTablet: [768, 2],
      itemsMobile: [650, 1],
      pagination: true,
      autoPlay: true,
    });
  });