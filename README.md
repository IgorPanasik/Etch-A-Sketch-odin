# Etch-A-Sketch-odin

This project is a web app that simulates an interactive sketchpad or Etch-A-Sketch, allowing users to draw on the browser screen using DOM manipulation. It's a fun and creative toy that demonstrates the power of JavaScript to manipulate web page elements.

## Basic steps

1. Create a webpage with a 16x16 grid of square divs:

- Create the divs using JavaScript.
- Use Flexbox to make the divs appear as a grid (versus just one on each line).

2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

3. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad:
   - Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
4. Extra credit:
   - Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
   - Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
