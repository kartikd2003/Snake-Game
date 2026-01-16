# Snake Game

A simple Snake game built with HTML5 Canvas, JavaScript and CSS.

## Demo

Open `index.html` in a browser to play.

## Features

- Classic snake gameplay
- Canvas rendering
- Score tracking
- Keyboard controls (arrow keys / WASD)

## How to run

Option 1 — Open locally:
1. Clone/download the repository
2. Open `index.html` in your browser

Option 2 — Use a simple local server (recommended for some browsers):
```bash
# Python 3
python -m http.server 8000

# then open http://localhost:8000 in your browser
```

## Controls

- Arrow keys or WASD to move the snake.
- The snake grows when it eats food.
- Game over when the snake collides with itself or (depending on implementation) the walls.

## Project structure

- `index.html` — main HTML file with the canvas
- `css/style.css` — styles
- `js/script.js` — game logic and rendering

## Customization

- Change canvas size in `index.html` (`width` and `height`) and update any grid/scale logic in `js/script.js`.
- Tweak game speed, initial snake length, or food behavior in `js/script.js`.

## Contributing

Contributions are welcome. To contribute:
1. Fork the repo
2. Create a branch for your feature/fix
3. Open a pull request with a clear description of changes


