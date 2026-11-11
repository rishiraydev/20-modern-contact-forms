# 07 - Gradient Contact Template

## Design Concept
A modern, vibrant contact page heavily relying on a strong CSS gradient background that contrasts with clean white content cards. Designed for modern SaaS or B2C tech companies, this template features a strong visual hierarchy and a card-based layout.

## Features
- Fully responsive grid layout
- Fixed CSS gradient background serving as a vibrant hero area
- Card-based UI with hover states and subtle shadow transitions
- Clean, custom select dropdown implementation
- Vanilla JavaScript validation with focus handling
- Simulated async submission with an in-card overlay success state
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS with gradient and card tokens
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Gradient:** Modify the `linear-gradient` property in `.page-background` inside `css/style.css`.
- **Form Fields:** Edit the `index.html` structure to change the dropdown options for the 'Subject'.

## Form Fields
- First Name
- Last Name
- Email Address
- Subject (Dropdown)
- Message

## Responsive Breakpoints
- Desktop: `> 992px` (2-column layout for main grid)
- Tablet: `<= 992px` (Main grid collapses, side cards become a horizontal row)
- Mobile: `<= 768px` (Side cards stack vertically, form name fields stack)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
