const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;
const canvasSize = 400;

let snake = [{ x: 160, y: 200 }];
let food = {
  x: Math.floor(Math.random() * (canvasSize / box)) * box,
  y: Math.floor(Math.random() * (canvasSize / box)) * box
};
let dx = box;
let dy = 0;
let gameInterval;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
  const key = event.keyCode;

  if (key === LEFT && dx === 0) { dx = -box; dy = 0; }
  else if (key === UP && dy === 0) { dx = 0; dy = -box; }
  else if (key === RIGHT && dx === 0) { dx = box; dy = 0; }
  else if (key === DOWN && dy === 0) { dx = 0; dy = box; }
}

function draw() {
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === snake.length - 1 ? "#ffffff" : "#00ff00";
    ctx.beginPath();
    ctx.arc(snake[i].x + box / 2, snake[i].y + box / 2, box / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw food
  ctx.fillStyle = "#ff4444";
  ctx.beginPath();
  ctx.arc(food.x + box / 2, food.y + box / 2, box / 2, 0, Math.PI * 2);
  ctx.fill();

  // Move snake
  const head = {
    x: snake[snake.length - 1].x + dx,
    y: snake[snake.length - 1].y + dy
  };

  // Collision
  if (
    head.x < 0 || head.y < 0 || head.x >= canvasSize || head.y >= canvasSize ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    clearInterval(gameInterval);
    alert("Game Over!");
    return;
  }

  snake.push(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    food = {
      x: Math.floor(Math.random() * (canvasSize / box)) * box,
      y: Math.floor(Math.random() * (canvasSize / box)) * box
    };
  } else {
    snake.shift();
  }
}

gameInterval = setInterval(draw, 150);
