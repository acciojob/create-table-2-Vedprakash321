function createTable() {
    // Prompt the user for the number of rows and columns
    const rows = parseInt(prompt("Input number of rows"));
    const columns = parseInt(prompt("Input number of columns"));

    // Get the table element from the DOM
    const table = document.getElementById('myTable');

    // Clear any existing content in the table
    table.innerHTML = '';

    // Loop through rows and columns to create cells with content
    for (let i = 0; i < rows; i++) {
        // Create a table row element
        const row = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            // Create a table cell element
            const cell = document.createElement('td');

            // Set the content of the cell
            cell.textContent = `Row-${i} Column-${j}`;

            // Append the cell to the row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }

    // Display prompt text
    // alert(`Table created with ${rows} rows and ${columns} columns.`);
}
