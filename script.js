var selectTopic = document.querySelector("select[name='topics']");
var filterButton = document.getElementById("triggerFilter");
var resetButton = document.getElementById("triggerReset");
var locButton = document.getElementById("locationButton");
var geoError = document.getElementById("geoError");
var loadingSpan = document.getElementById("loadingSpan");

function togglePosts(displayStyle, queryVal) {
  if (geoError) {
    geoError.style.display = "none";
  }
  var queryString = ".filter-posts div";
  if (queryVal) {
    queryString = "[data-topic='" + queryVal + "']";
  }
  document.querySelectorAll(queryString).forEach(function(p) {
    p.style.display = displayStyle;
  });
}

filterButton.addEventListener("click", function() {
  togglePosts("none");
  if (selectTopic.value) {
    togglePosts("inherit", selectTopic.value);
  }
  else {
    togglePosts("inherit");
  }
});

resetButton.addEventListener("click", function() {
  togglePosts("none");
});

if (locButton) {
  locButton.addEventListener("click", function() {
    if (navigator.geolocation) {
      loadingSpan.style.display = "inline-block";
      navigator.geolocation.getCurrentPosition(function(l) {
        console.log(l.coords);
        if (selectTopic.value) {
          togglePosts("inherit", selectTopic.value);
        }
        else {
          togglePosts("inherit");
        }
        loadingSpan.style.display = "none";
      });
    }
    else {
      geoError.style.display = "inherit";
    }
  });
}
