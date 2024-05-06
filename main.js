console.clear();
const cursor = document.querySelector(".cursor");
const mask = document.querySelector(".mask");
const list = document.querySelector(".list");
const audio = document.getElementById("soundEffect");

const createElement = (element) => {
  document.createElement(element);
};

document.addEventListener("mousemove", (e) => {
  // everytime the mouse move we want to adjust style
  // 25 is used to center the cursor in the middle of the div
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 25) + "px; left: " + (e.pageX - 25) + "px;"
  );
  //pageY and pageX are (x,y) coordinate properties of the window
  //  we are concatenting the value of x and y and inserting it into the position absolute positiong propertes left and top
});

document.addEventListener("click", (e) => {
  // console.log('clicked');

  audio.currentTime = 0;
  audio.play();
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout( () => {
    cursor.classList.remove("expand");
  }, 100);
});

mask.style.clipPath = "circle(5px at 50% 50%)";

addEventListener("mousemove", (e) => {
  let timeout = 0;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    mask.style.clipPath = `circle( 45px at ${e.clientX}px ${e.clientY}px )`;
  });
});
