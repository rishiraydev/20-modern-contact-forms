# 19 - Brutalist Contact Template

## Design Concept
A bold, unapologetic "web brutalism" design. It features raw, visible borders, oversized uppercase typography, an animated scrolling ticker, and stark color contrasts. It completely ignores soft UI trends in favor of a striking, experimental aesthetic. Perfect for avant-garde designers, modern art galleries, or edgy streetwear brands.

## Features
- Fully responsive raw grid layout using Flexbox
- Continuous CSS animated text ticker
- Heavy, visible borders separating all elements
- Extreme focus states and error states (the entire row turns red)
- All-caps typography forced via CSS `text-transform`
- Vanilla JavaScript client-side validation
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS defining the brutalist aesthetic (borders, typography, animations)
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Colors:** The brutalist aesthetic relies on high contrast. Modify `--bg-color`, `--text-color`, and `--accent` (currently a bright red-orange) in `css/style.css` to change the theme.
- **Ticker Text:** Edit the `.ticker-content` text in `index.html`. Note that you may need to repeat the text multiple times to ensure it loops smoothly without empty spaces on large screens.

## Form Fields
- Name
- Email
- Type (Dropdown)
- Message

## Responsive Breakpoints
- Tablet: `<= 900px` (The two main columns stack vertically, and the form row labels stack above the inputs).
- Mobile: `<= 600px` (Removes the outer page border to maximize screen space).

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
