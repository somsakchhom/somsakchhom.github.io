// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// make grid
function makeGrid() {

  // gridHeight
  const gridHeight = 5;

  // gridWidth
  const gridWidth = 5;

  // for each number up to gridHeight
  for (let row = 0; row < gridHeight; row++) {

    // add row to table element
    console.log('adding row to table');

    // for each number up to gridWidth
    for (let td = 0; td < gridWidth; td++) {

      // add td to row element
      console.log('adding td to row');
    }
  }
}
