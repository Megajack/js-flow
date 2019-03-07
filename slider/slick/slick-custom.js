window.slickCustom = {
  colors: ['red', 'blue', 'green'],
  current: 0,
  top: [0, 100, 300],
  left: [0, 250, 500],
  changeColor: function() {
    const random = this.pickRandom()
    const color = this.colors[random]
    console.log(color)
    document.body.style.background = color
  },
  changePosition: function() {
    // console.log(this.current)
    let leftPos = this.left[this.current];
    let topPos = this.top[this.current];
    document.querySelector('.slider').style.left = leftPos + 'px';
    document.querySelector('.slider').style.top = topPos + 'px';
    console.log(leftPos, topPos)
  },
  pickRandom: function() {
    this.current++

    if(this.current > this.colors.length - 1) {
      this.current = 0
    }
    return this.current

    // console.log(this.current)
  }
}
