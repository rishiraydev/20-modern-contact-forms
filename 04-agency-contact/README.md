# 04 - Agency Contact Template

## Design Concept
A premium, editorial-style contact page tailored for creative agencies, design studios, and high-end consultancies. It features bold typography, a sticky asymmetrical layout, and custom-styled checkboxes and radio buttons to handle complex project inquiries cleanly.

## Features
- Fully responsive asymmetrical grid layout
- Sticky content panel on desktop
- Floating label animation for text inputs
- Custom styled CSS checkboxes for services
- Custom styled CSS pill radio buttons for budget selection
- Vanilla JavaScript validation including group validation (checkboxes/radios)
- Smooth success state transition
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS with editorial design tokens and complex form styling
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Typography:** The design relies heavily on 'Playfair Display' and 'Space Grotesk'. Update the Google Fonts link in HTML and the CSS variables if you want to change them.
- **Form Fields:** You can add more services or budget options in the HTML. The CSS handles the layout automatically using Grid and Flexbox.

## Form Fields
- Your Name
- Email Address
- Company / Organization
- Services Required (Custom Checkboxes)
- Budget (Custom Radio Pills)
- Project Details (Textarea)

## Responsive Breakpoints
- Desktop: `> 992px` (Sticky side-by-side layout)
- Tablet: `<= 992px` (Stacks vertically, removes sticky behavior)
- Mobile: `<= 768px` (Nav links hide, 2-column form grids collapse to 1 column)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
