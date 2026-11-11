# 11 - Startup Contact Template

## Design Concept
A bold, modern contact page designed for tech startups. Features a dark theme with vibrant neon accents, large abstract CSS-based background shapes, and a custom pill-style checkbox group for categorized inquiries.

## Features
- Fully responsive grid layout
- Animated, blurred background shapes created entirely with CSS
- Custom "pill" style checkboxes for multi-select interests
- Clean, rounded UI elements (buttons, inputs) typical of modern web apps
- Vanilla JavaScript validation including custom group checkbox validation
- In-card animated success state
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS with animations and pill-checkbox styling
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Background Shapes:** Edit the `.shape-1`, `.shape-2`, and `.shape-3` classes in `css/style.css` to change their colors, sizes, or animation paths.
- **Brand Color:** Change the `--accent` variable in `css/style.css` to match your startup's primary brand color.
- **Interests:** Add or remove `<label class="pill-checkbox">` blocks in `index.html` to change the inquiry categories.

## Form Fields
- Name
- Email
- Interest (Multi-select Checkboxes styled as pills)
- Message

## Responsive Breakpoints
- Desktop: `> 1024px` (Side-by-side hero/info and form)
- Tablet & Mobile: `<= 1024px` (Layout stacks vertically, hero text width adjusts)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
