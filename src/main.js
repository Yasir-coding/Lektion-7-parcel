import imageUrl from "./media/baboon.jpg"
import anime from "animejs";

const img = document.createElement("img");
document.body.append(img);

img.src = imageUrl;

anime({
  targets: img,
  translateX: "300px",
  direction: "alternate",
  easing: 'easeInOutSine',
  duration: 3000,
  loop: true
})