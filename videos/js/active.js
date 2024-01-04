  var roltotal = document.getElementById("roltotal");
  var LinkVideo = roltotal.getElementsByClassName("LinkVideo");
  for (var i = 0; i < LinkVideo.length; i++) {
    LinkVideo[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
  }