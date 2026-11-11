# 18 - Editorial Contact Template

## Design Concept
A sophisticated, magazine-style layout featuring an asymmetric split design. The left panel acts as a structured editorial column with serif typography and detailed contact information, while the right panel houses a dark, high-contrast form area. It feels literary, professional, and highly curated.

## Features
- Fully responsive asymmetric flexbox layout
- Distinct contrast between the light information panel and dark form panel
- Elegant typography pairing (Libre Baskerville + Inter)
- Minimalist input fields with clean focus states
- Vanilla JavaScript client-side validation
- In-place animated success screen over the form panel
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document containing the two-panel structure
- `css/style.css`: Custom CSS handling the layout, typography, and dark/light contrast
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Typography:** The design relies heavily on the `Libre Baskerville` serif font. You can change this to another editorial serif like *Playfair Display* or *Merriweather* via Google Fonts.
- **Colors:** You can swap `--bg-light` and `--bg-dark` in `css/style.css` if you want the form panel to be light and the information panel to be dark.

## Form Fields
- Name
- Email
- Subject (Dropdown)
- Message

## Responsive Breakpoints
- Tablet & Mobile: `<= 900px` (Flexbox switches to a column layout, stacking the light information panel on top of the dark form panel).

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
