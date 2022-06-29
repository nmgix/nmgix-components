Checklist of what needs to be done.
The component will be marked as done when all the conditions for creating and configuring the component are met.

## Global Todo

- [x] Connect fonts, they dont resolve normally for now

> The problem was that webpack didn't want to recognize fonts and was trying to combine them with .ts and .tsx extensions. Key to solution was to use url("/resources/fonts/FONT_NAME/FONT.EXTENSION") (not "./", "/" as it is absoulte path) where root was ./src (storybook package.json setup to seek static files in "./src").
> Also I didn't had to load index.scss file in .storybook/preview.js to run it properly.

- [ ] Setup compilation so scss files get in final build

## [ ] Component Alert

Need to do:

- [x] Multiple color presets (eg alert or notification) for each type
- [x] Glow to match background color
- [x] Autoscrollable text that doesn't fit into the component's viewport
  > Current realisation is a bit simpler than expected. Was expected that content will be animatied if it overflows parent. But for now Alert will check if content length is more that hardcoded value (trimming off HTML tags).
- [x] Fixed position for HeaderAlert either in page or window
- [x] Fixed position for WindowFixedAlert in the window
- [x] Fixed position for FixedAlert in the page
- [x] Alert Stack
- [ ] Write tests for:

  1.  maintaining the correct position when scrolling the page
  2.  testing Alert Stack functionality (adding and removing alerts, with and without timer)

- [x] Customize stories for each component
- [x] Document components (TSDoc)

## [ ] Component Button

Need to do:

- [ ] Several presets (colors (like alert or information) and sizes)
- [ ] Design flexibility: changeable border, background color, shadow
- [ ] Make skeleton loading state
- [ ] Write tests for:

  1.  content overflow
  2.  practicing the function that was set during creation
  3.  working out skeleton animation (class or state)

- [ ] Customize history
- [ ] Document (TSDoc)

## [ ] Component Cell

Need to do:

- [ ] Cell arrangement logic > Grid cells should be located randomly, but relative to the limits of their level (for example, information about yourself can only be located from 2 cells and below)
- [ ] Make skeleton loading state for cells
- [ ] Different sizes (2x2 - default, 1x2 (2 _ 1x2), 2x1 (2 _ 2x1), 2x3 (and possibly 3x2))
- [ ] Write tests for:

  1.  the ratio of the content type to the level and the location of the cell with this level
  2.  practicing the function that was set during creation
  3.  working out skeleton animation (class or state)
  4.  drawing tooltips under the first three levels

- [ ] Customize history
- [ ] Document each component (TSDoc)

## [ ] Component Tooltip

Need to do:

- [ ] The logic of the hint location (most likely a fixed position relative to a given point or anchor point)
- [ ] A tooltip can be of two types: - `hint-info` > It is purely informative, it is possible to completely disable it in the settings - `hint-mode` > Mandatory hint, which is not turned off through the settings, is necessary to notify a person about the current mode (for example, the highlight mode of the current block in the window focus)
- [ ] Write tests for:

  1.  checking the correct location in conjunction with other components
  2.  check if the settings match (some hints will be fixed in the window)
  3.  checking the mock state after disabling the mock setting by pressing the "turn off this mode" button
  4.  Checking for prompt deletion after timeout

- [ ] Customize history
- [ ] Document component (TSDoc)

## [ ] Component Highlight TextBox In Focus (HTIV)

Need to do:

- [x] Logic for highlighting current element(s)
- [x] Make styling and a layout
- [x] Correct component behavior while beeing in couple with other components
- [x] Add ability to place hints
- [ ] Make highlighting option switchable
- [ ] Write tests for:

  1.  there is no block highlighting if this mode is turned off in the general context
  2.  checking the highlight of the block when scrolling the page (the difference between the blocks in terms of content)
  3.  checking for correct text highlighting in different scroll position (with other components and without)

- [x] Customize history
- [x] Document component (TSDoc)

## [ ] Component Icon

Need to do:

- [ ] Implement the component system as SVG elements
- [ ] Document component (TSDoc)

## [ ] Component Image

Need to do:

- [ ] Make skeleton loading state for cells
- [ ] Write tests for:

  1.  working out skeleton animation (class or state)

- [ ] Customize history
- [ ] Document component (TSDoc)

## [ ] Component Input

Need to do:

- [ ] Decide to separate the component into several types or make it universal (for example, for a form, for a file, for a checkbox)
- [ ] Styling the checkbox in the CheckboxInput (if you still separate the component)
- [ ] Make templates for inputs like email or number
- [ ] Write tests for:

  1.  checking the compliance of the input processing with its type (file upload, text filling for text inputs)
  2.  pattern checking

- [ ] Customize history under (component | components)
- [ ] Document (each) component (TSDoc)

## [ ] Component Link

Need to do:

- [ ] Add an arrow icon after the text (either at the very top right or at the end of the text)
- [ ] Customize history
- [ ] Document component (TSDoc)

## [ ] Component Theme

Need to do:

- [x] Change theme hook to handle theme state
- [ ] Write tests for:

  1. checking conformity of current theme and colors of components dependent on it
  2. checking saving current theme in mock localStorage

- [x] Customize history
- [x] Document component (TSDoc)
