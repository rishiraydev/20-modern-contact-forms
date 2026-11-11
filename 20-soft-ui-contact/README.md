# 20 - Soft UI Contact Template

## Design Concept
A pure "Neumorphism" (or Soft UI) contact form. This aesthetic relies entirely on manipulating box shadows (inset and outset) on a monochromatic background to create elements that look extruded from or pressed into the surface. It provides a very tactile, smooth, and modern feel.

## Features
- Fully responsive centered card layout
- Complex dual box-shadows (light and dark) to create the 3D soft UI effect
- Inset shadows for input fields simulating "pressed" states
- Outset shadows for the card and button simulating "raised" states
- Smooth transitions for hover, focus, and active states
- Vanilla JavaScript client-side validation
- In-card animated success state
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS containing the shadow formulas and variables
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Neumorphic Colors:** Neumorphism requires very specific color relationships. If you change the `--bg-color` in `css/style.css`, you **must** recalculate the light and dark shadow colors in the `--shadow-out` and `--shadow-in` variables. The background color should ideally be a light-to-mid gray/blue for the best shadow contrast.
- **Accent Color:** Change `--accent` to modify the button text and focus outline color.

## Form Fields
- Name
- Email
- Message

## Responsive Breakpoints
- Mobile: `<= 480px` (Adjusts padding and corner radius to better fit small screens).

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge. Performance is generally good, but note that heavy use of multiple box-shadows can be rendering-intensive on very old devices.
