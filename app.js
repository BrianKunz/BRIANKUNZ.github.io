document.addEventListener("DOMContentLoaded", function () {
  // Toggle project info visibility when GitHub icon is clicked
  var icons = document.querySelectorAll(".icon");
  icons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      var projectInfo =
        this.closest(".portfolio-item").querySelector(".project-info");
      projectInfo.classList.toggle("show-info");
    });
  });

  // Add your other event listeners here...
  var buttons = document.querySelectorAll(".control");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });

  document.querySelector(".theme-btn").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
