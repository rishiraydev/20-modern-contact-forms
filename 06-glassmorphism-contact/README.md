# 06 - Glassmorphism Contact Template

## Design Concept
A sophisticated contact page utilizing the glassmorphism design trend. It features a dark background with vibrant, blurred background blobs that slowly animate. The main container is a frosted glass card with translucent borders and subtle shadows, providing a premium, modern tech aesthetic.

## Features
- Fully responsive layout
- Animated gradient background blobs
- Frosted glass effect (`backdrop-filter`) for the main container and inputs
- Floating label animation for text inputs using CSS
- Vanilla JavaScript client-side validation
- Simulated async submission with a glass-styled overlay
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS with glassmorphism tokens and animations
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Background:** Modify the `.blob` colors and animations in `css/style.css` to change the underlying vibe of the page.
- **Glass Effect:** Adjust the `--glass-bg` (opacity) and `backdrop-filter: blur(16px)` properties to make the glass more or less frosted.

## Form Fields
- Name
- Email
- Message

## Responsive Breakpoints
- Desktop: `> 900px` (Two-column layout)
- Tablet/Mobile: `<= 900px` (Stacks vertically, background blur intensity adjusts)
- Small Mobile: `<= 500px` (Paddings reduced)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge. Note that `backdrop-filter` requires the `-webkit-` prefix for some older Safari versions, which is included.
