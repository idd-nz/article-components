// DOCUMENT REFERENCES
let $doc = document.documentElement  // html element
let $win = window
let $bar = document.querySelector('.progress-bar')


// STEPS

// Height of the window
let winH = $doc.clientHeight

// Height of the document
let docH = $doc.scrollHeight

// Make .progress-bar not display
$bar.style.display = 'none'

// Make .progress-bar display
$bar.style.display = 'block'

// if the $doc height < $win height... else...
if (docH <= winH) { console.log('No progress needed') }
else { console.log('Put a progress bar') }

// Store how much HAS been scrolled
let hasBeenScrolled = window.scrollY

// Store how much CAN be scrolled
let canBeScrolled = docH - winH

// Calculate the % scrolled of the available
let percentageScrolled = hasBeenScrolled / canBeScrolled

// Apply a % to the $bar width
$bar.style.width = `${percentageScrolled * 100}%`

// Capture the scroll of the window
$win.addEventListener('scroll', event => { console.log('scroll') })