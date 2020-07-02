$(document).ready(function () {
  runSlider("#testimonial-slider");
  runSlider("#testimonial-slider2");
  textFill();
  $(window).on("resize", function () {
    textFill();
  });
  $(".navigation__link").on("click", function () {
    $("#nav-toggle").prop("checked", false);
  });
});

function textFill() {
  console.log("hi");
  $(".description").textfill({
    minFontPixels: 8,
    maxFontPixels: 60,
    changeLineHeight: false,
    debug: true,
  });
}
function runSlider(id) {
  $(id).owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [992, 2],
    itemsTablet: [600, 2], //itemsTablet: [768, 2],
    itemsMobile: [500, 1], //itemsMobile: [600, 1]
    pagination: true,
    autoPlay: true,
  });
}
