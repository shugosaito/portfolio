$(document).ready(function () {

  let mountain = document.getElementById("mountain");
  let road = document.getElementById("road");
  let txt = document.getElementById("txt");

  window.addEventListener("scroll", function () {
    var value = window.scrollY;
    mountain.style.top = value * 0.5 + "px";
    txt.style.top = value + "px";
  })

});