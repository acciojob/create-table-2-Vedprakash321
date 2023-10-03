// function createTable() {
//     //Write your code here
	
  
// }
function createTable() {
    // Prompt for the number of rows
    const numRows = parseInt(prompt("Input number of rows"));
    
    // Prompt for the number of columns
    const numCols = parseInt(prompt("Input number of columns"));
    
    // Get the table element by its ID
    const table = document.getElementById("myTable");
    
    // Clear the table content if it already has any
    table.innerHTML = '';
    
    // Create rows and columns based on user input
    for (let i = 0; i < numRows; i++) {
        // Create a new row
        const row = table.insertRow(i);
        
        for (let j = 0; j < numCols; j++) {
            // Create a new cell in the row
            const cell = row.insertCell(j);
            
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

// Get the button element by its ID and attach click event listener
const createButton = document.getElementById("createButton");
createButton.addEventListener("click", createTable);
