const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear");

const row = 16;
const column = 16;

function createGridDivs(row, column) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      const div = document.createElement("div");
      div.classList.add("square");
      container.appendChild(div);
    }
  }
}

createGridDivs(row, column);
const divSquares = document.querySelectorAll(".square");

function drawingHandler() {
  //initially disble the draw mode
  let drawFlag = false;

  divSquares.forEach((divSquare) => {
    divSquare.addEventListener("click", (e) => {
      //toggle draw mode only when an element is clicked
      drawFlag = !drawFlag;

      if (drawFlag) {
        //add selectedSquare class to the element which changes its color
        e.target.classList.add("selectedSquare");
      }
    });

    divSquare.addEventListener("mouseenter", (e) => {
      if (drawFlag) {
        //add selectedSquare class when the element is selected
        e.target.classList.add("selectedSquare");
      }
    });
  });
}

function clearSketch() {
  divSquares.forEach((divSquare) => {
    divSquare.classList.remove("selectedSquare");
  });
}

clearBtn.addEventListener("click", clearSketch);
drawingHandler();
