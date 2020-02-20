let $doc = document.documentElement
let $lnk = document.querySelector('.slide-from')

//how tall is the document?
$doc.scrollHeight

//how tall is the window
$doc.clientHeight

//capture some key window events that might be involved
window.addEventListener('scroll', event => { console.log('scrolled')})
window.addEventListener('resize', event => { console.log('resized')})
window.addEventListener('hashchange', event => { console.log('hash change')})

// how much have i scrolled
window.scrollY

//capture when a link is clicked
$lnk.addEventListener('click', event => {console.log('clicked')})

//what does this link do
$lnk.getAttribute('href')

//which item am i  trying yo slide to
let $goto = document.querySelector('#document')

//does that element/section exist
if ($goto) {
  //the element exists
} else {
  //the element does not exist
}

//how far is this element from the top of the document 
$goto.offsetTop

//how far is this element from the top of hte viewport
$goto.getBoundingClientRect().top

//scroll to an element
$goto.scrollIntoView()


