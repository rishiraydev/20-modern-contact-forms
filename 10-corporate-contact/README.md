# 10 - Corporate Contact Template

## Design Concept
A highly professional, conservative contact page designed for large global enterprises, financial institutions, or B2B corporations. The design emphasizes trust and structure, featuring a multi-tier navigation (including a mock stock ticker), distinct departmental contact cards, and a robust general inquiry form.

## Features
- Fully responsive layout suitable for enterprise websites
- Top utility bar with mock stock ticker
- Departmental quick-contact cards
- Comprehensive general inquiry form with select dropdowns
- Office location sidebar with SVG placeholder image
- Vanilla JavaScript validation
- Professional success state
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS with a conservative corporate blue color palette
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Branding:** Adjust `--brand-blue` and `--brand-light-blue` in `css/style.css` to match the target company's corporate guidelines.
- **Images:** Replace the SVG placeholder image in the `.office-card` with an actual photograph of the headquarters building.
- **Departments:** Edit the `.dept-card` HTML blocks to match the specific departments of the company.

## Form Fields
- First Name
- Last Name
- Business Email
- Company Name
- Country / Region (Dropdown)
- Message

## Responsive Breakpoints
- Desktop: `> 1024px` (Full grid layouts)
- Tablet: `<= 1024px` (Department grid reduces to 2 columns, form and sidebar stack vertically)
- Mobile: `<= 768px` (Top links hide, navigation simplifies, department grid reduces to 1 column)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
