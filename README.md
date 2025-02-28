# Google-Sheets-Clone

Overview

This project is a web-based spreadsheet application that mimics some core functionalities of Google Sheets. It allows users to perform basic spreadsheet operations such as data entry, mathematical computations, find & replace, text transformations, and duplicate removal. The application is built using HTML, CSS, JavaScript, and Flask for a dynamic and interactive experience.

Tech Stack

Frontend:

HTML: Provides the structure of the web application.

CSS: Styles the application for a user-friendly interface.

JavaScript: Implements spreadsheet functionalities such as cell selection, data manipulation, and mathematical operations.

Backend:

Flask (Python): Manages server-side logic and routing.

Jinja2: Template engine for rendering dynamic HTML pages.

Data Structures Used

Arrays (JavaScript):

Used to store and manipulate the table data dynamically.

Helps manage the spreadsheet's rows and columns efficiently.

Objects (JavaScript):

Used for managing selected cell properties and operations.

Enables quick lookup and modification of cell values.

Sets (JavaScript):

Used for duplicate removal functionality.

Ensures uniqueness of values while filtering out repeated entries.

Dictionaries (Python - Flask):

Used for managing and storing session data if backend persistence is added.

Features

Spreadsheet-like Table: Editable cells with structured rows and columns.

Mathematical Functions: SUM, AVERAGE, MIN, MAX, and COUNT on selected cells.

Find & Replace: Allows users to search and replace values in the sheet.

Text Transformations: Convert text to uppercase, lowercase, and trim whitespace.

Duplicate Removal: Detects and removes duplicate values from the selected column.

Cell & Row Selection: Enables highlighting specific rows, columns, and cell ranges.

Installation & Setup

Clone the repository:

git clone https://github.com/your-username/google-sheets-clone.git
cd google-sheets-clone

Install dependencies:

pip install flask

Run the application:

python app.py

Open the browser and go to:

http://127.0.0.1:5000/

Future Enhancements

Add support for persistent storage (e.g., database integration).

Implement advanced spreadsheet formulas.

Include user authentication for multi-user collaboration.

Enhance UI for better user experience.
