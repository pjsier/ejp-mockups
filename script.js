var filterButton = document.getElementById("triggerFilter");
var resetButton = document.getElementById("triggerReset");

filterButton.addEventListener("click", function() {
  document.querySelector(".filter-posts div").style.display = "inherit";
});

resetButton.addEventListener("click", function() {
  document.querySelectorAll(".filter-posts div").forEach(function(p) {
    p.style.display = "none";
  });
});
