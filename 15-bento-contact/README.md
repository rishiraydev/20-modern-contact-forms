# 15 - Bento Contact Template

## Design Concept
A modern, highly popular "Bento Grid" style contact page. Inspired by Apple's widget design language, it organizes information into distinct, softly rounded cards of varying sizes placed on a subtle light gray background. It feels clean, organized, and premium.

## Features
- Fully responsive CSS Grid layout (the "Bento" structure)
- Clean, Apple-esque typography and spacing
- Hover animations that slightly scale the cards and enhance shadows
- Custom styled select dropdown and form inputs
- Vanilla JavaScript validation with focus management
- In-card animated success state
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document containing the bento grid structure
- `css/style.css`: Custom CSS handling the grid layout, card styling, and animations
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Grid Layout:** Adjust the `grid-template-columns` and `grid-column: span X` properties in `css/style.css` to change the layout or add new bento boxes.
- **Map:** Replace the `.map-bg` div in `index.html` with an actual map embed if required.
- **Brand Color:** Change the `--accent` and `--accent-hover` variables to match your brand.

## Form Fields
- Name
- Email
- Subject (Dropdown)
- Message

## Responsive Breakpoints
- Desktop: `> 900px` (4-column bento grid)
- Tablet: `<= 900px` (Grid collapses to 2 columns, adjusting spans accordingly)
- Mobile: `<= 600px` (Grid collapses to a single column, making all boxes stack vertically)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
