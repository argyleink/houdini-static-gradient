(async function() {
  if (CSS['paintWorklet'] === undefined)
    await import('https://unpkg.com/css-paint-polyfill/dist/css-paint-polyfill.js')

  CSS.paintWorklet.addModule(`/js/worklet.js`)
})()