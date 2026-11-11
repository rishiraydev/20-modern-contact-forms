# 16 - Contact Cards Template

## Design Concept
A clean, card-based layout providing users with multiple distinct ways to get in touch. This approach is highly effective for customer support portals or large businesses where users need to be routed to different channels (e.g., email, phone, physical office, or direct message).

## Features
- Fully responsive CSS Grid layout
- Elevated card UI with smooth hover states and shadows
- Color-coded icons for visual distinction of contact methods
- Embedded direct message form spanning full width
- Vanilla JavaScript client-side validation
- In-card animated success state overlay
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document containing the grid and cards
- `css/style.css`: Custom CSS handling the layout, hover effects, and typography
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Card Icons:** Update the SVG code inside the `.card-icon` divs. 
- **Colors:** The icons use CSS variables (`--icon-blue`, `--icon-green`, etc.) for their backgrounds and colors. You can easily adjust these in `css/style.css`.
- **Form Layout:** Modify the `.form-grid` to add or remove inputs. Inputs with the `.full-width` class will span across both columns on desktop.

## Form Fields
- Name
- Email
- Topic (Dropdown)
- Message

## Responsive Breakpoints
- Desktop/Tablet: `> 900px` (3-column grid for small cards, form card spans all 3 columns)
- Mobile: `<= 900px` (Grid collapses to a single column, stacking all cards vertically)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
