# Google Sheets Clone

## Overview

This project is a web-based spreadsheet application that mimics some core functionalities of Google Sheets. It allows users to perform basic spreadsheet operations such as:

- Data entry
- Mathematical computations
- Find & replace
- Text transformations
- Duplicate removal

The application is built using **HTML, CSS, JavaScript, and Flask** for a dynamic and interactive experience.

## Tech Stack

### Frontend:
- **HTML**: Provides the structure of the web application.
- **CSS**: Styles the application for a user-friendly interface.
- **JavaScript**: Implements spreadsheet functionalities such as cell selection, data manipulation, and mathematical operations.

### Backend:
- **Flask (Python)**: Manages server-side logic and routing.
- **Jinja2**: Template engine for rendering dynamic HTML pages.

## Data Structures Used

### Arrays (JavaScript):
- Used to store and manipulate the table data dynamically.
- Helps manage the spreadsheet's rows and columns efficiently.

### Objects (JavaScript):
- Used for managing selected cell properties and operations.
- Enables quick lookup and modification of cell values.

### Sets (JavaScript):
- Used for duplicate removal functionality.
- Ensures uniqueness of values while filtering out repeated entries.

### Dictionaries (Python - Flask):
- Used for managing and storing session data if backend persistence is added.

## Features

- **Spreadsheet-like Table**: Editable cells with structured rows and columns.
- **Mathematical Functions**: SUM, AVERAGE, MIN, MAX, and COUNT on selected cells.
- **Find & Replace**: Allows users to search and replace values in the sheet.
- **Text Transformations**: Convert text to uppercase, lowercase, and trim whitespace.
- **Duplicate Removal**: Detects and removes duplicate values from the selected column.
- **Cell & Row Selection**: Enables highlighting specific rows, columns, and cell ranges.

## Screenshots

Here are some screenshots of the application in action:

1. The User Interface of the clone.
![image](https://github.com/user-attachments/assets/db615fe1-b71f-41bc-8e3f-710aa50987df)

2. Sum function working correctly for the selected cells.
![image](https://github.com/user-attachments/assets/49e462ea-808b-420c-9fb6-085f9469fdb9)

3. Count function working correctly for the selected cells.
![image](https://github.com/user-attachments/assets/59f0ee1f-5b0d-4572-9f97-de7a874fb7cc)

* All the other functions mentioned are working correctly as well.
## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/google-sheets-clone.git
   cd google-sheets-clone
   ```

2. **Install dependencies:**
   ```sh
   pip install flask
   ```

3. **Run the application:**
   ```sh
   python app.py
   ```

4. **Open the browser and go to:**
   ```
   http://127.0.0.1:5000/
   ```

## Future Enhancements

- Add support for persistent storage (e.g., database integration).
- Implement advanced spreadsheet formulas.
- Include user authentication for multi-user collaboration.
- Enhance UI for better user experience.
