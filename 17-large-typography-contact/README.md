# 17 - Large Typography Contact Template

## Design Concept
An editorial-style contact page focused on striking, oversized typography. By utilizing a massive serif heading paired with an extremely clean, minimal input form below, this template exudes confidence and high-end design sensibilities. Ideal for creative agencies, design studios, and fashion portfolios.

## Features
- Fully responsive layout
- Dynamic typography scaling using CSS `clamp()` for the massive heading
- Elegant, minimal input fields (border-bottom only)
- Custom hover effect on the navbar email link
- Vanilla JavaScript client-side validation
- Seamless in-place success state animation
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS handling the typography, minimal form styles, and animations
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Typography:** The visual impact heavily relies on `Playfair Display` (serif) and `Manrope` (sans-serif). You can change these via the Google Fonts import in `index.html` and updating the CSS variables.
- **Brand Colors:** Update `--bg-color`, `--text-main`, and `--accent` in `css/style.css` to fit your brand.
- **Form Fields:** Add or remove `.input-group` wrappers in `index.html`. 

## Form Fields
- Name
- Email
- Project Budget (Dropdown)
- Project Details (Textarea)

## Responsive Breakpoints
- Tablet & Mobile: `<= 768px` (Stacks the two-column input row and adjusts padding)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
