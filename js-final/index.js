var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
var grid = 16;
var count = 0;
var numberHold = "";
var snake = {
  x: 160,
  y: 160,

  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,

  // keep track of all grids the snake body occupies
  cells: [],

  // length of the snake. grows when eating an apple
  maxCells: 4
};
// var apple = {
//   x: 320,
//   y: 320,
//   number: 0 // Initial number on the apple

// };
var apples = [
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 0},
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 1},
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 2},
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 3},
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 4},
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 5},
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 6},
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 7},
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 8},
  {x: getRandomInt(0, 25) * grid, y: getRandomInt(1, 25) * grid, number: 9},
  // add more apples as needed
];
function submitPhoneNumber(event) {
  event.preventDefault(); // Prevent the default form submission

  var submittedPhoneNumber = document.getElementById('phoneNumber').value;
  alert('Submitted Phone Number: ' + submittedPhoneNumber);
}
function getRandomAppleInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function appleNumber(){
  apple.number = getRandomAppleInclusive(0, 9);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'red';
}
var text = getRandomAppleInclusive(0, 9);
context.fillStyle = 'white';
context.font = '20px Arial';
// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// game loop
function loop() {
  requestAnimationFrame(loop);

  if (numberHold.length >= 10){
    alert("You submitted the phone number " + numberHold + ". Hope it was right!");
    console.log("You submitted " + numberHold +" !");
    numberHold = '';
    document.getElementById('phone').value = '';
  }

  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;


  // check if snake hit wall
  if (snake.x < 0 || snake.x >= canvas.width || snake.y < 0 || snake.y >= canvas.height){
    // if hit wall, reset the game
    console.log("WALL COLLISION");
    snake.x = 160;
    snake.y = 160;
    snake.cells = [];
    snake.maxCells = 4;
    snake.dx = grid;
    snake.dy = 0;
    // reset phone number form
    numberHold = "";
    document.getElementById('phone').value = "";
    // apple.x = getRandomInt(0, 25) * grid;
    // apple.y = getRandomInt(1, 25) * grid;
    apples.forEach(function(apple, appleIndex) {
      apples.splice(appleIndex, 1);
      // add new apple at random position

      apples.push({
        x: getRandomInt(0, 25) * grid,
        y: getRandomInt(1, 25) * grid,
        number: apple.number
      });
    });

  }


  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // draw apple
  apples.forEach(function(apple) {
    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid-1, grid-1);
    context.fillStyle = 'white';
    context.fillText(apple.number, apple.x, apple.y, grid-1, grid-1);
  });

  // var text = 'Hello, World!';
  // context.fillStyle = 'white';
  // context.font = '20px Arial';
  // context.fillText(text, x + 10, y + 30);

  // draw snake one cell at a time
  context.fillStyle = "#C8D96F"; // mindaro
  snake.cells.forEach(function(cell, index) {

    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid-1, grid-1);

    // snake ate apple
    apples.forEach(function(apple, appleIndex) {
      if (cell.x === apple.x && cell.y === apple.y) {
        snake.maxCells++;
        if (numberHold.length < 10){ // makes sure that the form can only hold a valid 10-digits phone number
          numberHold += apple.number.toString(); // saves the number eaten by snake
          // text = getRandomAppleInclusive(0,9); // if apple is eaten, change the number on the apple to a different number
          document.getElementById('phone').value = numberHold.toString(); // put the previous input into the form
        }
        if (numberHold.length >= 10){
          alert("You submitted the phone number " + numberHold + ". Hope it was right!");
          console.log("You submitted " + numberHold +" !");
          numberHold = '';
          document.getElementById('phone').value = '';
        }
        console.log("OUT OF IF " + numberHold);
        // canvas is 400x400 which is 25x25 grids
        // remove eaten apple from array
        apples.splice(appleIndex, 1);
        // add new apple at random position
        apples.push({
          x: getRandomInt(0, 25) * grid,
          y: getRandomInt(1, 25) * grid,
          number: apple.number
        });
      }
    });
    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {

      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        console.log("SELF COLLISION");
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        // reset phone number form
        numberHold = ""; 
        document.getElementById('phone').value = "";

        // apple.x = getRandomInt(0, 25) * grid;
        // apple.y = getRandomInt(1, 25) * grid;
        apples.forEach(function(apple, appleIndex) {
          apples.splice(appleIndex, 1);
          // add new apple at random position

          apples.push({
            x: getRandomInt(0, 25) * grid,
            y: getRandomInt(1, 25) * grid,
            number: apple.number
          });
        });
      }
    }
  });
}

// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
  // prevent snake from backtracking on itself by checking that it's
  // not already moving on the same axis (pressing left while moving
  // left won't do anything, and pressing right while moving left
  // shouldn't let you collide with your own body)

  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

// start the game
requestAnimationFrame(loop);

// // format phone number input
// document.getElementById('phone').addEventListener('input', function (event) {
//     let input = event.target;
//     let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters

//     if (value.length > 0) {
//         value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
//     }

//     input.value = value;
// });