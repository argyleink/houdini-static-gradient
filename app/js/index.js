(async function() {
  if (CSS['paintWorklet'] === undefined)
    await import('https://unpkg.com/css-paint-polyfill/dist/css-paint-polyfill.js')

  CSS.paintWorklet.addModule(`/js/worklet.js`)
})()

document.querySelector('h1').addEventListener('click', e => {
  e.target.classList.toggle('paused')
})

var div = document.createElement('div')
div.style.background = 'paint(static-gradient, 1)'
if (!/static-gradient/.test(div.style.background)) {
  console.log('custom paint arguments not supported')
  document.querySelector('small').innerHTML = 'This worklet requires <a href="chrome://flags/#enable-experimental-web-platform-features">#enable-experimental-web-platform-features</a> to be enabled'
}