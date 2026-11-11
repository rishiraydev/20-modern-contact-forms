# 13 - Terminal Contact Template

## Design Concept
A highly interactive, retro command-line interface (CLI) contact form designed to look like a macOS or Linux terminal window. Perfect for developer portfolios, hackerspaces, or dev-tool SaaS websites.

## Features
- Fully responsive terminal window layout
- Interactive step-by-step form progression triggered by the `Enter` key
- Simulated command execution and output logging
- CSS animated blinking cursor that moves to the active input line
- "Locks" previous inputs to simulate shell command history
- Auto-resizing textarea for multiline payload input (`Shift+Enter` supported)
- Pure CSS (No frameworks)

## Files & Structure
- `index.html`: Semantic HTML5 document structured like a terminal output
- `css/style.css`: Custom CSS with terminal colors (Monokai-inspired) and monospace fonts
- `js/script.js`: Vanilla JavaScript handling the sequential input logic, `Enter` key listening, and cursor DOM manipulation
- `assets/`: Empty directories for future images and icons

## How to Run
Open `index.html` in your browser. Type your name and hit `Enter` to proceed to the next line.

## How to Customize
- **Terminal Colors:** Modify `--term-bg`, `--term-text`, and `--prompt` in `css/style.css` to match different terminal themes (e.g., Solarized, Dracula, Matrix Green).
- **Commands:** Edit the `.command` span text in `index.html` to change the simulated shell commands (e.g., from `set name = ` to `export NAME=`).

## Form Fields (Sequential)
1. Name (`Enter` to proceed)
2. Email (`Enter` to proceed)
3. Message (`Enter` to submit, `Shift+Enter` for new line)

## Responsive Breakpoints
- Tablet & Mobile: `<= 600px` (Adjusts font sizes and wraps prompt lines so input doesn't overflow the screen horizontally)

## Browser Compatibility
Supports all modern browsers including Chrome, Firefox, Safari, and Edge.
