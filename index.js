import {
  animate,
  scroll,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

animate(
  ".box",
  { scale: [0.4, 1], opacity: [0, 1] },
  { ease: "circInOut", duration: 1 }
);

animate(
  ".feel",
  { scale: [0.4, 1], opacity: [0, 1] },

  { ease: "circInOut", duration: 1, delay: 0.5 }
);

animate(
  ".btn1",
  { y: [100, 0], opacity: [0, 1] },

  { ease: "circInOut", duration: 1, delay: 0.8 }
);

animate(
  ".btn2",
  { y: [100, 0], opacity: [0, 1] },

  { ease: "circInOut", duration: 1, delay: 1 }
);
