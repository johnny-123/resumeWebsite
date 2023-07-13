const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//getContext() method會回傳一個canvas的drawing context
//drawing context可以用來在canvas畫圖
const unit = 20;
const row = canvas.height / unit;
const column = canvas.width / unit;

let snake = [];
function creatSnake() {
  snake[0] = {
    x: 80,
    y: 0,
  };
  snake[1] = {
    x: 60,
    y: 0,
  };
  snake[2] = {
    x: 40,
    y: 0,
  };
  snake[3] = {
    x: 20,
    y: 0,
  };
}

class Fruit {
  constructor() {
    this.x = Math.floor(Math.random() * row) * unit;
    this.y = Math.floor(Math.random() * column) * unit;
  }
  drawFruit() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, unit, unit);
  }
  pickALocation() {
    let overlapping = false;
    let new_x;
    let new_y;
    function checkOverlap(new_x, new_y) {
      for (let i = 0; i < snake.length; i++) {
        if (snake[i].x == new_x && snake[i].y == new_y) {
          overlapping = true;
          return;
        } else {
          overlapping = false;
        }
      }
    }
    do {
      new_x = Math.floor(Math.random() * row) * unit;
      new_y = Math.floor(Math.random() * column) * unit;
      checkOverlap(new_x, new_y);
    } while (overlapping);
    this.x = new_x;
    this.y = new_y;
  }
}

creatSnake();
let myFruit = new Fruit();

let direction = "Right";
window.addEventListener("keydown", changeDirection);
let score = 0;
let highScore;

loadHighestScore();
document.getElementById("myScore").innerHTML = "遊戲分數:" + score;

document.getElementById("myScore2").innerHTML = "最高分數:" + highScore;

function changeDirection(e) {
  if (direction != "Buttom" && e.key == "ArrowUp") {
    direction = "Top";
  } else if (direction != "Top" && e.key == "ArrowDown") {
    direction = "Buttom";
  } else if (direction != "Right" && e.key == "ArrowLeft") {
    direction = "Left";
  } else if (direction != "Left" && e.key == "ArrowRight") {
    direction = "Right";
  } else {
  }
  //防止連續按鍵
  window.removeEventListener("keydown", changeDirection);
}

function draw() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(myGame);
      window.alert("遊戲結束");
      return;
    }
  }
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  myFruit.drawFruit();

  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.fillStyle = "lightgreen";
    } else {
      ctx.fillStyle = "lightblue";
    }
    ctx.strokeStyle = "white";
    //x,y,width,height
    ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
  }

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  if (direction == "Top") {
    snakeY -= unit;
  } else if (direction == "Buttom") {
    snakeY += unit;
  } else if (direction == "Left") {
    snakeX -= unit;
  } else if (direction == "Right") {
    snakeX += unit;
  } else {
  }

  if (snakeX < 0) {
    snakeX = (row - 1) * unit;
  }
  if (snakeY < 0) {
    snakeY = (column - 1) * unit;
  }
  if (snakeX >= canvas.width) {
    snakeX = 0;
  }
  if (snakeY >= canvas.height) {
    snakeY = 0;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };
  snake.unshift(newHead);

  if (snake[0].x == myFruit.x && snake[0].y == myFruit.y) {
    myFruit.pickALocation();
    score++;
    document.getElementById("myScore").innerHTML = "遊戲分數:" + score;
    setHighestScore(score);
    document.getElementById("myScore2").innerHTML = "最高分數:" + highScore;
  } else {
    snake.pop();
  }

  window.addEventListener("keydown", changeDirection);
}

let myGame = window.setInterval(draw, 100);

function loadHighestScore() {
  if (localStorage.getItem("highestScore") == null) {
    highScore = 0;
  } else {
    highScore = Number(localStorage.getItem("highestScore"));
  }
}

function setHighestScore(score) {
  if (score > highScore) {
    localStorage.setItem("highestScore", score);
    highScore = score;
  }
}
