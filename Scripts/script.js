var dropdownBtns = document.querySelectorAll(".dropdown-btn");

for (var i = 0; i < dropdownBtns.length; i++) {
  dropdownBtns[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
