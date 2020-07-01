let links = document.querySelectorAll(".navigation__link");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector("#nav-toggle").checked = false;
  });
});

$(document).ready(function () {
  runSlider("#testimonial-slider");
  runSlider("#testimonial-slider2");
});

function runSlider(id) {
  $(id).owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [992, 2],
    itemsTablet: [768, 2],
    itemsMobile: [600, 1],
    pagination: true,
    autoPlay: true,
  });
}
