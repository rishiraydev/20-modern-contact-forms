# 05 - Freelancer Contact Template

## Design Concept
A warm, personal contact page designed for independent freelancers, digital designers, or consultants. It features a sticky sidebar with personal branding, an availability indicator, and a clean, approachable form interface. The color palette uses warm beiges and rust tones to feel welcoming yet professional.

## Features
- Fully responsive sidebar/main layout
- Sticky personal profile section (on desktop)
- Pulsing "Available" status indicator using CSS animations
- Custom styled select dropdowns
- Vanilla JavaScript validation with focus management
- Simulated async submission with custom loading spinner
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS with warm personal branding tokens
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Profile:** Update the text in the `<aside>` element. The avatar currently uses CSS initials, but can easily be replaced with an `<img>` tag pointing to a real headshot.
- **Colors:** Modify the variables in `:root` in `css/style.css` to match your personal brand colors.
- **Form Fields:** Edit the `index.html` structure to change the dropdown options for 'Project Type' and 'Budget'.

## Form Fields
- Your Name
- Email Address
- Project Type (Dropdown)
- Estimated Budget (Dropdown)
- Project Details (Textarea)

## Responsive Breakpoints
- Desktop: `> 1024px` (Side-by-side layout)
- Tablet/Mobile: `<= 1024px` (Stacks vertically, sidebar becomes a top header section)
- Small Mobile: `<= 768px` (Form grid collapses to single column)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
