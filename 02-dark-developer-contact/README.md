# 02 - Dark Developer Contact Template

## Design Concept
A dark, code-editor inspired contact page tailored for software developers and engineers. It utilizes monospace typography, subtle glowing borders on focus, and syntax-highlighted labels to resonate with a technical audience, avoiding the generic "gaming" aesthetic.

## Features
- Fully responsive 2-column layout (collapses to single column on mobile)
- CSS Grid and Flexbox layout
- Code window styled form container with macOS-style window controls
- Custom select dropdown styling
- Vanilla JavaScript client-side validation
- Simulated async submission with a terminal-like success output
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS with dark mode tokens and syntax-highlighting color variables
- `js/script.js`: Vanilla JavaScript for validation and async simulated submission
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Theme:** Modify the variables in `:root` inside `css/style.css` to change the syntax highlighting colors or background shades.
- **Form Fields:** Edit the HTML structure. Note that the labels are styled to look like JavaScript variable declarations (`const name =`, `let project_type =`).

## Form Fields
- Name
- Email
- Project type (Dropdown)
- Message

## Responsive Breakpoints
- Desktop: `> 992px`
- Tablet: `<= 992px` (Grid collapses to a single column layout)
- Mobile: `<= 576px` (Navigation stacks, padding reduced)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
