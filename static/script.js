document.addEventListener("DOMContentLoaded", function () {
    generateTable(50, 26);
});

function generateTable(rows, cols) {
    let tableHeader = document.getElementById("table-header");
    let tableBody = document.getElementById("table-body");

    tableHeader.innerHTML = "";
    tableBody.innerHTML = "";

    let headerRow = document.createElement("tr");
    let slNoHeader = document.createElement("th");
    slNoHeader.innerText = "SL. NO.";
    slNoHeader.classList.add("sticky-header");
    headerRow.appendChild(slNoHeader);

    for (let j = 0; j < cols; j++) {
        let th = document.createElement("th");
        th.innerText = String.fromCharCode(65 + j);
        th.classList.add("column-header");
        th.addEventListener("click", () => selectColumn(j));
        headerRow.appendChild(th);
    }
    tableHeader.appendChild(headerRow);

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        let rowHeader = document.createElement("th");
        rowHeader.innerText = i + 1;
        rowHeader.classList.add("row-number");
        rowHeader.addEventListener("click", () => selectRow(i));
        row.appendChild(rowHeader);

        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("td");
            cell.contentEditable = true;
            cell.classList.add("data-cell");
            cell.addEventListener("click", selectCell);
            cell.addEventListener("mousedown", startSelection);
            cell.addEventListener("mouseover", extendSelection);
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}

let selectedCells = [];
let isDragging = false;
let startCell = null;

function selectRow(rowIndex) {
    clearSelection();
    document.querySelectorAll("#table-body tr")[rowIndex].querySelectorAll("td").forEach(cell => {
        cell.classList.add("selected");
    });
    updateSelectedCells();
}

function selectColumn(colIndex) {
    clearSelection();
    document.querySelectorAll("#table-body tr").forEach(row => {
        row.querySelectorAll("td")[colIndex].classList.add("selected");
    });
    updateSelectedCells();
}

function selectCell(event) {
    if (event.ctrlKey) {
        // Toggle selection without clearing existing ones
        event.target.classList.toggle("selected");
    } else {
        // Normal click clears previous selections
        clearSelection();
        event.target.classList.add("selected");
    }
    updateSelectedCells();
}

function startSelection(event) {
    clearSelection();
    isDragging = true;
    startCell = event.target;
    event.target.classList.add("selected");
}

function extendSelection(event) {
    if (!isDragging || !startCell) return;

    let startRow = startCell.parentElement.rowIndex - 1;
    let startCol = startCell.cellIndex - 1;
    let endRow = event.target.parentElement.rowIndex - 1;
    let endCol = event.target.cellIndex - 1;

    clearSelection();

    for (let i = Math.min(startRow, endRow); i <= Math.max(startRow, endRow); i++) {
        for (let j = Math.min(startCol, endCol); j <= Math.max(startCol, endCol); j++) {
            document.querySelectorAll("#table-body tr")[i].querySelectorAll("td")[j].classList.add("selected");
        }
    }
}

document.addEventListener("mouseup", () => {
    isDragging = false;
    updateSelectedCells();
});

function updateSelectedCells() {
    selectedCells = Array.from(document.querySelectorAll(".selected")).map(cell => {
        let value = cell.innerText.trim();
        return value === "" || isNaN(value) ? null : parseFloat(value);
    }).filter(value => value !== null);
}

function clearSelection() {
    document.querySelectorAll(".selected").forEach(cell => {
        cell.classList.remove("selected");
    });
}

// Function buttons (SUM, AVERAGE, MIN, MAX, COUNT)
function applyFunction(type) {
    updateSelectedCells();
    if (selectedCells.length === 0) {
        showPopup("Please select numeric cells!");
        return;
    }
    let result;
    switch (type) {
        case "sum":
            result = selectedCells.reduce((a, b) => a + b, 0);
            break;
        case "average":
            result = selectedCells.reduce((a, b) => a + b, 0) / selectedCells.length;
            break;
        case "min":
            result = Math.min(...selectedCells);
            break;
        case "max":
            result = Math.max(...selectedCells);
            break;
        case "count":
            result = selectedCells.length;
            break;
    }
    showPopup(`${type.toUpperCase()}: ${result}`);
}

function showPopup(message) {
    document.getElementById("popup-result").innerText = message;
    document.getElementById("popup-box").style.display = "block";
}

function closePopup() {
    document.getElementById("popup-box").style.display = "none";
}


// Find & Replace
function findAndReplace() {
    let findText = document.getElementById("find").value.trim();
    let replaceText = document.getElementById("replace").value.trim();
    if (!findText) {
        alert("Enter a value to find.");
        return;
    }
    document.querySelectorAll("td").forEach(cell => {
        if (cell.innerText.trim() === findText) {
            cell.innerText = replaceText;
        }
    });
    alert(`Replaced "${findText}" with "${replaceText}".`);
}
// TRIM function: Removes leading and trailing whitespace from selected cells
function trimCells() {
    document.querySelectorAll(".selected").forEach(cell => {
        cell.innerText = cell.innerText.trim();
    });
    alert("Trimmed selected cells.");
}

// UPPER function: Converts selected text to uppercase
function convertToUpper() {
    document.querySelectorAll(".selected").forEach(cell => {
        cell.innerText = cell.innerText.toUpperCase();
    });
    alert("Converted selected cells to uppercase.");
}

// LOWER function: Converts selected text to lowercase
function convertToLower() {
    document.querySelectorAll(".selected").forEach(cell => {
        cell.innerText = cell.innerText.toLowerCase();
    });
    alert("Converted selected cells to lowercase.");
}

// REMOVE_DUPLICATES: Removes duplicate rows based on selected range
function removeDuplicates() {
    let selectedCells = document.querySelectorAll(".selected");
    if (selectedCells.length === 0) {
        alert("Please select a column or cells first!");
        return;
    }

    let seenValues = new Set();
    
    selectedCells.forEach(cell => {
        let text = cell.innerText.trim();
        if (seenValues.has(text)) {
            cell.innerText = ""; // Remove duplicate values
        } else {
            seenValues.add(text);
        }
    });

    alert("Duplicate values removed in the selected column!");
}
