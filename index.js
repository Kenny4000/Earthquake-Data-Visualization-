// Add references to tbody , input fields & button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// Add an event listener to Button
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Add an event listener to the reset Button
$resetBtn.addEventListener("click", handleResetButtonClick);

// Make a copy of the data
var tableData = data;

// Create Raw table with non-filtered rows

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get  address 
    var address = tableData[i];
    console.log(address)
    var fields = Object.keys(address);
    // Create iteration loop
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {

      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}
// Create User Input table 
function handleSearchButtonClick() {
  var filterDate = $dateInput.value;
  
  // Create User Filter for date
  if (filterDate != "") {
    tableData = data.filter(function (address) {
      var addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData };

  renderTable();
}
// Reset Data
function handleResetButtonClick(){
  renderTable();
}

// Initialize original table for landing page
renderTable();