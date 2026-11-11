# 01 - Minimal Contact Template

## Design Concept
An extremely clean, minimalist contact page designed for premium portfolios, studios, or SaaS applications. It utilizes a vast amount of whitespace, strong typography, and a light neutral palette to create an elegant user experience.

## Features
- Fully responsive 2-column layout (collapses to single column on mobile)
- CSS Grid and Flexbox for modern layout structure
- Accessible form controls and ARIA attributes
- Vanilla JavaScript client-side validation
- Simulated submission state with a loading spinner and success message overlay
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS using CSS variables and clamp() for fluid typography
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Simply open `index.html` in any modern web browser. No server or build process is required.

## How to Customize
- **Colors & Spacing:** Edit the CSS variables within the `:root` pseudo-class at the top of `css/style.css`.
- **Typography:** The template uses the 'Inter' font from Google Fonts. You can change this in the HTML `<head>` and the CSS `--font-family` variable.

## Form Fields
- Full Name
- Email Address
- Subject
- Message

## Responsive Breakpoints
- Desktop: `> 1024px`
- Tablet: `<= 1024px` (Grid adjusts column ratios)
- Mobile: `<= 768px` (Collapses to single column, reorders layout)
- Small Mobile: `<= 425px` (Simplifies typography and navigation)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
