console.log("Hi");
let links = document.querySelectorAll(".navigation__link");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector("#nav-toggle").checked = false;
  });
});
