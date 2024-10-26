"use strict";

const gridContainer = document.querySelector(".grid-container")

// Instructions for creating n squares in a row
let createSquares = (row, n) => {
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div")
    div.className = "cell"
    div.style.flexGrow = "1"
    div.style.backgroundColor = "white"
    row.appendChild(div)
  }
}

// Instructions for creating n rows in the grid
let createRows = (n) => {
  const row = document.createElement("div")
  row.className = "row"
  row.style.display = "flex"
  row.style.flexGrow = "1"
  gridContainer.appendChild(row)

  // Creates n squares in each row
  createSquares(row, n)
}


const createGrid = (n) => {
  // Creates n rows in the grid
  if (n < 100) {
    for (let i = 0; i < n; i++) {
      createRows(n)
    }
  } else {
    for (let i = 0; i < 100; i++) {
      createRows(100)
    }
  }
}

let input = prompt("Enter grid dimension")
createGrid(input)