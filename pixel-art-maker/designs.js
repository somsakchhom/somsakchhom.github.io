
// Creates grid
function makeGrid() {

  // Value of gridheight
  const gridHeight = document.getElementById('inputHeight').value;

  // Value of gridWidth
  const gridWidth = document.getElementById('inputWidth').value;

  // select tbody element
  const gridTable = document.querySelector('tbody');
  gridTable.innerHTML = '';
  
  // Create and insert gridHeight
  for (let i = 0; i < gridHeight; i++) {
    const tableRows = document.createElement('tr');
    gridTable.appendChild(tableRows);
  
  // Create and insert gridWidth 
    for (let j = 0; j < gridWidth; j++) {
      const tableColumns = document.createElement('td');
      tableRows.appendChild(tableColumns);
    }
  }
}

// Select Submit button will display Grid
const selectButton = document.getElementById('sizePicker');
selectButton.addEventListener('submit', function (event) {
  makeGrid();
  event.preventDefault();
});

// Pick color and use it to update cell when clicked
const cell = document.getElementById('pixelCanvas');
cell.addEventListener('click', function (event) {
  const selectColor = colorPicker.value;
  event.target.style.backgroundColor = selectColor;
}); 