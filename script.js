let cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (dets) => {
  // console.log("Mving");
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

let cursorblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (dets) => {
  // console.log("Mving");
  cursorblur.style.left = dets.x - 250 + "px";
  cursorblur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers :true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
