registerPaint('static-gradient', class StaticGradient {

  static get inputProperties() {
    return [
      `--static-gradient-direction`,
      `--static-gradient-color`,
      `--static-gradient-size`,
    ]
  }

  parseProps(props) {
    return [
      `--static-gradient-direction`,
      `--static-gradient-color`,
      `--static-gradient-size`,
    ].map(param =>
      props.get(param).toString().trim() || undefined)
  }

  paint(ctx, bounds, props) {
    const { width:w, height:h } = bounds
    const offset = .01
    const start  = 1 + offset
    const sizekeys = {
      small:  2,
      medium: 8,
      large:  16,
    }

    let [ 
      direction = 'to-top', 
      color = 'hotpink', 
      size = 2, 
    ] = this.parseProps(props)

    size = isNaN(parseInt(size))
      ? sizekeys[size]
      : parseInt(size)

    const end = 1 / size - offset

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {

        switch (direction.toString()) {
          case 'to-top':
            if (Math.random() < (start - y / (h*end))) continue
            break;
          case 'to-left':
            if (Math.random() < (start - x / (w*end))) continue
            break;
          case 'to-bottom':
            if (Math.random() > (start - y / (h*end))) continue
            break;
          case 'to-right':
            if (Math.random() > (start - x / (w*end))) continue
            break;
        }

        ctx.fillStyle = color
        ctx.fillRect(x * size, y * size, size, size)
      }
    }
  }
})