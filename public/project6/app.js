const start = document.querySelector("#start");
const game_audio = document.querySelector(".game-audio");
const close_audio = document.querySelector(".close-audio");
let start_time, end_time, spend_second;

start.addEventListener("click", () => {
  // console.log("重新開始function外");
  start.innerHTML = "重新開始";
  start_time = new Date().getTime();
  document.getElementById("end").innerHTML = "";
  allGame();
});

close_audio.addEventListener("click", () => {
  aiduoController();
});

function aiduoController() {
  if (close_audio.innerHTML == "開啟音效") {
    close_audio.innerHTML = "關閉音效";
    game_audio.play();
  } else {
    close_audio.innerHTML = "開啟音效";
    game_audio.pause();
  }
}

function allGame() {
  const myCanvas = document.getElementById("myCanvas");
  const canvasHeight = myCanvas.height;
  const canvasWidth = myCanvas.width;
  const ctx = myCanvas.getContext("2d");
  let circle_x = 160;
  let circle_y = 60;
  let radius = 20;
  let xSpeed = 10;
  let ySpeed = 10;
  let ground_x = 100;
  let ground_y = 500;
  let ground_height = 5;
  let bricks_count = 10;
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
      ctx.strokeStyle = "white";
      ctx.fillRect(this.x, this.y, 100, 50);
      ctx.strokeRect(this.x, this.y, 100, 50);
    }
    touchingBall(ballX, ballY) {
      return (
        ballX + radius >= this.x &&
        ballX - radius <= this.x + 100 &&
        ballY - radius <= this.y + 50 &&
        ballY + radius >= this.y
      );
    }
  }

  for (let i = 0; i < bricks_count; i++) {
    let overlapping = false;
    let new_x;
    let new_y;
    // console.log(myBricks.length);
    function checkOverlap(new_x, new_y) {
      for (let i = 0; i < myBricks.length; i++) {
        if (myBricks[i].x == new_x && myBricks[i].y == new_y) {
          overlapping = true;
          return;
        } else {
          overlapping = false;
        }
      }
    }
    do {
      new_x = Math.floor(Math.random() * 10) * 100;
      new_y = Math.floor(Math.random() * 8) * 50;
      checkOverlap(new_x, new_y);
    } while (overlapping);
    new Brick(new_x, new_y);
  }

  function draw() {
    end_time = new Date().getTime();
    document.getElementById("spend-second").innerHTML =
      "總共花了" + ((end_time - start_time) / 1000).toFixed(3) + "秒";
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
        if (count == bricks_count) {
          clearInterval(myGame);
          end_time = new Date().getTime();
          spend_second = (end_time - start_time) / 1000;
          document.getElementById("spend-second").innerHTML =
            "總共花了" + spend_second.toFixed(3) + "秒";
          document.getElementById("end").innerHTML = "遊戲結束!";
          // game_audio.pause();
          // game_audio.load();
          // window.alert("遊戲結束");
        }
      }
    });
    circle_x += xSpeed;
    circle_y += ySpeed;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    // ctx.drawImage(img, 0, 0);

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
      circle_y += ySpeed;
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

  let myGame = setInterval(draw, 15);
  start.addEventListener("click", () => {
    clearInterval(myGame);
    // console.log("重新開始function內");
  });
}
