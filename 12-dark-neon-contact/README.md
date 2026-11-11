# 12 - Dark Neon Contact Template

## Design Concept
A cyberpunk / synthwave inspired contact interface designed to look like a futuristic terminal or system console. Features a dark background with glowing cyan and magenta neon accents, monospace typography, and a 3D CSS grid background.

## Features
- Fully responsive centered card layout
- CSS-only 3D grid background using gradients and perspective transforms
- Advanced CSS text glitch animation using `::before` and `::after` pseudo-elements
- Custom terminal-style input wrappers and labels
- Vanilla JavaScript validation with custom error states
- Staggered animation for the success "log" output
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document
- `css/style.css`: Custom CSS with neon glows, animations, and pseudo-elements
- `js/script.js`: Vanilla JavaScript for validation and interactions
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser.

## How to Customize
- **Neon Colors:** Update the `--neon-cyan` and `--neon-magenta` variables in `css/style.css` to easily shift the entire color scheme (e.g., to lime green and orange).
- **Glitch Text:** The main heading glitch effect relies on the `data-text` attribute matching the node text. To change the heading, change both the inner HTML and the `data-text` attribute in `index.html`.

## Form Fields
- IDENTIFIER [NAME]
- COM_LINK [EMAIL]
- PAYLOAD [MESSAGE]

## Responsive Breakpoints
- Tablet & Mobile: `<= 600px` (Reduces padding and centers header/footer elements)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge. The text-glitch effect relies on CSS `clip`, which is widely supported.
