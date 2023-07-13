let i = 0;
let topBackground = document.querySelector("section.background-img");

let image_arr = [
  "./static/富士山2.jpg",
  "./static/日本櫻花.jpg",
  "./static/京都古城.jpg",
  "./static/大阪街頭.jpg",
];

// header.addEventListener("click", () => {
//   i++;
//   if (i == 4) {
//     i = 0;
//   }
//   topBackground.style.backgroundImage = `url(${image_arr[i]})`;
//   console.log(topBackground);
// });

setInterval(() => {
  i++;
  if (i == 4) {
    i = 0;
  }
  topBackground.style.backgroundImage = `url(${image_arr[i]})`;
}, 3000);
