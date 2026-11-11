# 08 - Split-Screen Contact Template

## Design Concept
An editorial 50/50 split-screen contact page designed for high-end studios or creative agencies. The left side features strong typography and contact details on a dark background, while the right side hosts a clean, minimalist form on a light background. 

## Features
- Fully responsive 50/50 split layout
- Elegant serif typography paired with clean sans-serif UI elements
- Minimalist input styling with custom select dropdowns
- Animated submit button with a growing line indicator
- Vanilla JavaScript validation
- Simulated async submission with inline success state swapping
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS handling the flexbox split layout
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Layout & Colors:** Adjust the `--bg-left` and `--bg-right` variables in `css/style.css` to easily swap the light/dark themes or apply custom brand colors.
- **Form Fields:** Edit the HTML. The CSS will automatically style new inputs added with the `.input-group` class structure.

## Form Fields
- First Name
- Last Name
- Email Address
- Company (Optional)
- Inquiry Type (Dropdown)
- Message

## Responsive Breakpoints
- Desktop: `> 1024px` (50/50 side-by-side split screen)
- Tablet & Mobile: `<= 1024px` (Layout stacks vertically into a single column, sticky behavior removed)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
