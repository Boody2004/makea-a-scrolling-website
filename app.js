let sw = document.querySelector(".sw");

let star = document.getElementById("star");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");

window.onscroll = function () {
  let value = scrollY;

  star.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.3 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";

  sw.style.fontSize = value + "px";

  if (scrollY >= 67) {
    sw.style.fontSize = 67 + "px";
    sw.style.position = "fixed";

    if (scrollY >= 478) {
      sw.style.display = "none";
    } else {
      sw.style.display = "block";
    }
    if (scrollY >= 225) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281, #10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
};
