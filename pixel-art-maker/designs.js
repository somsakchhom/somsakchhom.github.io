// Select color input
// console.log("Heyyyy");
// console.log($("#colorPicker").val());

// Select size input
// console.log($(inputHeight).val());
// console.log($(inputWidth).val());

// Creates grid
function makeGrid() {

  // Value of gridheight
  const gridHeight = document.getElementById('inputHeight').value;

  // Value of gridWidth
  const gridWidth = document.getElementById('inputWidth').value;

  // select tbody element
  const testTable = document.querySelector('tbody'); //try 'table' next
  testTable.innerHTML = '';
  
  // Create and insert gridHeight
  for (let i = 0; i < gridHeight; i++) {
    const tableRows = document.createElement('tr');
    testTable.appendChild(tableRows);
  
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

// Accept input values for gridHeight and gridWidth

// Select input for gridHeight
// function inputValue () {
// const selectGridHeight = document.getElementById('inputHeight').value;
// const selectGridWidth = document.getElementById('inputWidth').value;
// console.log(selectGridHeight, selectGridWidth);
// }
// Select input for gridWidth


