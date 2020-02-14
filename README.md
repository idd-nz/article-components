# Article Components

## Capturing values

Here are some of the values needed to begin solving the challenges below.

### Scroll position

```javascript
window.addEventListener('scroll', event => { 

  // Pixels scrolled after the scroll event was triggered
  let scrolledPxY = window.scrollY  // pixels scrolled vertically
  let scrolledPxX = window.scrollX  // pixels scrolled horizontally

})
```

### Element dimensions (including the `window`)

```javascript
let $doc = document.documentElement  // Select the <html> element (the bigger wrapper there is)

// DIMENSIONS

// Window, including scrolls bars (window's outside perimeter)
let windowHsc = window.innerHeight  // window height (px)
let windowWsc = window.innerWidth  // window width (px) 

// Window, not including scrolls bars (inside of the scroll bars)
let windowH = $doc.clientHeight  // window height (px)
let windowW = $doc.clientWidth  // window width (px)
// ** this is weird one! it's obtaining the windows true inner dimensions via the documentElement

// Dimensions of any element (including content and padding, but not border or margin)
let documentH = $doc.scrollHeight
let documentW = $doc.scrollWidth
```


## Part 1: Scroll progress indicator

**Goal:** Create a visual progress indicator to show a user how much progress has been made for a given article.

### Prototype (HTML/CSS)
1. Add a `<div>` element with a `.progress-bar` class to the HTML document to build the component UI
1. Style the element to be `fixed` to the `top` & `left` with a specified `height` (ie, not `auto`) and a `background-color` of your choice
2. Test a few `width` value to see how the progress bar might behave and as a way to prototype the UI behaviour for the solution

### Solve (JavaScript)
1. `if` the `document`'s `height` is less than the height of the window, the progress bar should not be on `display` at all (because no scrolling will be possible)
2. *Listen* for the `window`'s `scroll` Event, then calculate the percentage that the `window` has scrolled at that point, relative to the total possible amount that can possibly be scrolled
   1. Translate that computed value (a percentage) to the `width` of the `.progress-bar`


## Part 2: Scroll progress indicator

### Prototype (HTML/CSS)
1. Modify the `.progress-bar` HTML to create an outer `<div>` with class `.bar` and an inner `<div>` with class `.progress`
1. `.bar` should remain `fixed` as before
1. `.progress` can be `absolute` or remain `static` (but should not be `fixed`) to stay within its `.bar` parent
1. The `.bar` should be the full width of the window and have a translucent `background-color` to always be present, but not block content below it
1. When the `.bar` is in the `:hover` state, the bar's `background-color` should become fully opaque
1. The scroll-progress percentage should now be applied to the `.progress` element to grow its `width` within the parent `.bar`
1. Create a new `<div>` element and apply a style that allows it to sit in the `.bar` above the `.progress` (making it `absolute` makes it easy to layer the `position`)

### Solve (JavaScript)
1. Copy `textContent` from the article's `<h1>` is copied into the `bar` so the user knows that the name of the article that the progress is tracking
1. Apply `opacity: 0` to the new heading and fade it back in only `if` the window has scrolled enough `px` such that the actual `<h1>` is no longer within view of the document
   1. Look for a property of the `<h1>` that would indicate where it is relative to the window when you would consider it no longer visible
   2. Check if the `<h1>` is either "in view" or not. If so, fade out the heading "copy" element; If not, fade it in.

### Part 1 and Part 2
1. Combine the work from Part 1 with the work from Part 2 into a single scroll listener
1. To turn this into a practical plugin component that can be added to any page, the HTML (and ideally even the CSS) must be created exclusively with Javascript. 
   1. Use `createElement()` and `appendChild()` to dynamically create the `div`, assign it its appropriate `className` and any necessary `innerHTML` for the sub elements

## Part 3: Word count

Count the total number of words in the article. Determine the number of words per minute that you read. Combine these values to show the user how many minutes this article might take to read. "5 minutes"

## Part 4: Scroll to

Coming soon.

## Part 5: Progress markers

Add points to the progress bar that indicate where in the document the sub headings are (relative to the total). When clicked, the slide to the appropriate heading. When hovered, they preview the heading text.

## Part 6: In view

Coming soon.

## Part 7: Infinitely load content

Coming soon.
