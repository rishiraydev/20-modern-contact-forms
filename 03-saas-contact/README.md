# 03 - SaaS Contact Template

## Design Concept
A modern, polished contact page designed for SaaS (Software as a Service) platforms. It features a clean white background, soft purple accents, rounded cards, and subtle shadows. The design emphasizes trust and professional communication.

## Features
- Fully responsive layout
- Hero section with badge and supporting text
- Premium contact form card with subtle animations
- Secondary contact method cards (Chat, Help Center, Email)
- Vanilla JavaScript client-side validation
- Custom select dropdown styling
- Simulated async submission with a SVG loading spinner
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS with SaaS-oriented design tokens
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Theme:** Modify the variables in `:root` inside `css/style.css`. The primary color controls the button and focus states.
- **Form Fields:** Edit the HTML. The custom select dropdown options can be easily modified in `index.html`.

## Form Fields
- Full Name
- Work Email
- Company
- Reason for Contacting (Dropdown: Sales, Support, Partnership, General)
- Message

## Responsive Breakpoints
- Desktop: `> 992px`
- Tablet: `<= 992px` (Method cards collapse to 1 column)
- Mobile: `<= 768px` (Form grid collapses to 1 column, nav menu hides)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
