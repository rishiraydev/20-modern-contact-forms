# 09 - Contact + Map Template

## Design Concept
A standard corporate/business contact page designed for companies with a physical storefront or office location. It combines direct contact information cards with a split-layout form and map/business hours section. 

## Features
- Fully responsive layout
- Overlapping hero and info-card layout for visual interest
- Custom CSS-based realistic map placeholder (No API key required)
- Bouncing map marker animation
- Business hours list
- Vanilla JavaScript validation
- Inline success alert message
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS handling the layout and CSS map patterns
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Map:** To use a real map, replace the `.map-visual` div in `index.html` with an `<iframe>` embed from Google Maps or a map initialized by a library like Leaflet/Mapbox.
- **Colors:** Adjust the `--primary` and `--secondary` variables in `css/style.css` to match your brand.

## Form Fields
- Full Name (Required)
- Email Address (Required)
- Phone Number (Optional)
- Message (Required)

## Responsive Breakpoints
- Desktop: `> 992px` (Side-by-side form and map)
- Tablet & Mobile: `<= 992px` (Content split collapses to a single column, info cards collapse to a single column)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
