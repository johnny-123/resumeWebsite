const myCanvas = document.getElementById("myCanvas");
const canvasHeight = myCanvas.height;
const canvasWidth = myCanvas.width;
const ctx = myCanvas.getContext("2d");
let circle_x = 160;
let circle_y = 60;
let radius = 20;
let xSpeed = 20;
let ySpeed = 20;
let ground_x = 100;
let ground_y = 500;
let ground_height = 5;
let count = 0;

myCanvas.addEventListener("mousemove", (e) => {
  ground_x = e.clientX;
});
let myBricks = [];
class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    myBricks.push(this);
    this.visible = true; //優化
  }
  drawBrick() {
    ctx.fillStyle = "lightGreen";
    ctx.fillRect(this.x, this.y, 50, 50);
  }
  touchingBall(ballX, ballY) {
    return (
      ballX + radius >= this.x &&
      ballX - radius <= this.x + 50 &&
      ballY - radius <= this.y + 50 &&
      ballY + radius >= this.y
    );
  }
}

for (let i = 0; i < 10; i++) {
  let x, y;
  x = Math.floor(Math.random() * 950);
  y = Math.floor(Math.random() * 550);
  new Brick(x, y);
}

function draw() {
  myBricks.forEach((brick, index) => {
    if (brick.visible && brick.touchingBall(circle_x, circle_y)) {
      if (circle_y <= brick.y || circle_y >= brick.y + 50) {
        ySpeed *= -1;
      } else if (circle_x <= brick.x || circle_x >= brick.x + 50) {
        xSpeed *= -1;
      }
      //myBricks.splice(index, 1);優化
      // if (myBricks.length == 0) {
      //   clearInterval(myGame);
      //   alert("遊戲結束");
      // }
      count++;
      brick.visible = false; //優化
      if (count == 10) {
        clearInterval(myGame);
        alert("遊戲結束");
      }
    }
  });
  circle_x += xSpeed;
  circle_y += ySpeed;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  myBricks.forEach((brick) => {
    if (brick.visible) {
      brick.drawBrick();
    }
  });

  ctx.beginPath();
  ctx.arc(circle_x, circle_y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();

  ctx.fillStyle = "orange";
  ctx.fillRect(ground_x, ground_y, 200, ground_height);

  if (circle_x - radius < 0 || circle_x + radius > canvasWidth) {
    xSpeed *= -1;
  } else if (circle_y - radius < 0 || circle_y + radius > canvasHeight) {
    ySpeed *= -1;
  } else {
  }

  if (circle_y == ground_y - radius || circle_y == ground_y + radius) {
    if (ground_x <= circle_x + radius && circle_x - radius < ground_x + 200) {
      if (ySpeed > 0) {
        circle_y -= 40;
      } else {
        circle_y += 40;
      }
      ySpeed *= -1;
    }
  }
}

let myGame = setInterval(draw, 25);
