// DOCUMENT REFERENCES
let $doc = document.documentElement  // html element
let $win = window
let $bar = document.querySelector('.progress-bar')


// STEPS

// Capture the scroll of the window
$win.addEventListener('scroll', event => { 

  // Height of the window
  let winH = $doc.clientHeight

  // Height of the document
  let docH = $doc.scrollHeight

  // Store how much HAS been scrolled
  let hasBeenScrolled = window.scrollY

  // Store how much CAN be scrolled
  let canBeScrolled = docH - winH

  // Calculate the % scrolled of the available
  let percentageScrolled = hasBeenScrolled / canBeScrolled

  // Apply a % to the $bar width
  $bar.style.width = `${percentageScrolled * 100}%`


  // if the $doc height < $win height... else...
  if (docH <= winH) { 
    // Make .progress-bar not display
    $bar.style.display = 'none'
  } else { 
    // Make .progress-bar display
    $bar.style.display = 'block'
  }

})