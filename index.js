import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// Create the scroll-triggered animation
gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    end: "bottom 100px",
    markers: true,
    scrub: true,
  },
  x: 500,
  rotation: 360,
  duration: 3,
});
