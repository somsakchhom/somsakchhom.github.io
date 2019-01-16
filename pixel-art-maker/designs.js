// Select color input
// console.log("Heyyyy");
// console.log($("#colorPicker").val());

// Select size input
// console.log($(inputHeight).val());
// console.log($(inputWidth).val());

// Select submit button using JQuery
// $("#sizePicker").submit(function(event) {
//   console.log("oh me, oh my");
//   event.preventDefault();
// });

// Select submit using JS
// var gridInput = document.getElementById('sizePicker');
// gridInput.val(function());


//When size is submitted by the user, call makeGrid()
function makeGrid() {

  // gridHeight
  const gridHeight = 10;

  // gridWidth
  const gridWidth = 20;

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

makeGrid();