# 14 - Code Editor Contact Template

## Design Concept
A creative contact interface designed to perfectly mimic the UI of Visual Studio Code. The form itself is written as a JavaScript object configuration (`sendMessage.js`), making it incredibly engaging for developer audiences, engineering blogs, or tech portfolios.

## Features
- Highly accurate VS Code dark theme UI replication
- Functional file explorer sidebar (mocked interactions)
- Syntax-highlighted code layout using CSS spans
- Inputs seamlessly embedded directly into the JavaScript code layout
- Integrated terminal/console output that logs validation errors and success states
- "Run" button acts as the form submit trigger
- Auto-resizing textarea to maintain the code-editor look
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document containing the complex IDE layout
- `css/style.css`: Custom CSS with VS Code specific color variables and layout styling
- `js/script.js`: Vanilla JavaScript handling the form validation and the "Terminal" output logging
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Syntax Colors:** Update the `--syn-*` variables in `css/style.css` to change the syntax highlighting theme (e.g., to match Dracula, Monokai, or GitHub Dark).
- **Code Structure:** You can modify the HTML inside `.code-content` to change the underlying "code" structure (e.g., from JavaScript to Python or JSON format).

## Form Fields
- Name
- Email
- Subject (Dropdown)
- Message (Textarea embedded inside a template literal string)

## Responsive Breakpoints
- Tablet & Mobile: `<= 800px` (Hides the file explorer sidebar to maximize editor space on smaller screens)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
