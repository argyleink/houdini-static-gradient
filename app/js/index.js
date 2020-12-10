(async function() {
  if (CSS['paintWorklet'] === undefined)
    await import('https://unpkg.com/css-paint-polyfill/dist/css-paint-polyfill.js')

  CSS.paintWorklet.addModule(`/js/worklet.js`)
})()

document.querySelector('h1').addEventListener('click', e => {
  e.target.classList.toggle('paused')
})