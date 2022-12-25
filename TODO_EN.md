Checklist of what needs to be done.
The component will be marked as done when all the conditions for creating and configuring the component are met.

## Global Todo

- [x] Connect fonts, they dont resolve normally for now

> The problem was that webpack didn't want to recognize fonts and was trying to combine them with .ts and .tsx extensions. Key to solution was to use url("/resources/fonts/FONT_NAME/FONT.EXTENSION") (not "./", "/" as it is absoulte path) where root was ./src (storybook package.json setup to seek static files in "./src").
> Also I didn't had to load index.module.scss file in .storybook/preview.js to run it properly.

- [x] Re-write styles on CSS-Modules

## [x] Component Alert

Need to do:

- [x] Multiple color presets (eg alert or notification) for each type
- [x] Glow to match background color
- [x] Autoscrollable text that doesn't fit into the component's viewport
  > Current realisation is a bit simpler than expected. Was expected that content will be animatied if it overflows parent. But for now Alert will check if content length is more that hardcoded value (trimming off HTML tags).
- [x] Fixed position for HeaderAlert either in page or window
- [x] Fixed position for WindowFixedAlert in the window
- [x] Fixed position for FixedAlert in the page
- [x] Alert Stack
- [x] Setup stories for each component
- [x] Document components (TSDoc)

## [ ] Component Button

Need to do:

- [x] Several presets (colors (like alert or information) and sizes)
- [x] Design flexibility: changeable border, background color, shadow
- [ ] Fix outline in focus
- [x] Setup history
- [x] Document (TSDoc)

## [ ] Component Tooltip

Need to do:

- [x] The logic of the hint location (most likely a fixed position relative to a given point or anchor point)
- [x] A tooltip can be of two types: - `hint-info` > It is purely informative, it is possible to completely disable it in the settings - `hint-mode` > Mandatory hint, which is not turned off through the settings, is necessary to notify a user about the current mode (for example, the highlight mode of the current block in the window focus)
- [x] Setup history
- [x] Document component (TSDoc)

## [ ] Component Highlight TextBox In Focus (HTIV)

Need to do:

- [x] Logic for highlighting current element(s)
- [x] Make styling and a layout
- [x] Correct component behavior while beeing in couple with other components
- [x] Add ability to place hints
- [x] Make highlighting option switchable
- [x] Change fixed-to-element hints' position on window witdh change
- [x] Setup history
- [x] Document component (TSDoc)

## [ ] Component Icon

> Was chosen to use Font Awesome icons

To add new icon, complete these steps:

1.  Added new icon in library in App Wrapper
2.  Import <FontAwesomeIcon/> and choose icon that you imported, for example

```js
<FontAwesomeIcon icon={"arrow-right-long"} />
```

## [ ] Component Input

Need to do:

- [ ] Decide to separate the component into several types or make it universal (for example, for a form, for a file, for a checkbox)
- [ ] Styling the checkbox in the CheckboxInput (if you still separate the component)
- [ ] Make templates for inputs like email or number
- [ ] Fix outline in focus

- [ ] Setup history for (component | components)
- [ ] Document (each) component (TSDoc)

## [ ] Component Link

Need to do:

- [ ] Add an arrow icon after the text (either at the very top right or at the end of the text)
- [ ] Setup history
- [ ] Document component (TSDoc)

## [x] Component Theme

Need to do:

- [x] Change theme hook to handle theme state
- [x] Setup history
- [x] Document component (TSDoc)

## [x] Component PopUp

Need to do:

- [x] Wrapper component for all popups
- [x] Unversal PopUp component that accepts any JSX and css
