window.slickCustom = {
  colors: ['red', 'blue', 'green'],
  current: 0,
  changeColor: function() {
    const random = this.pickRandom()
    const color = this.colors[random]
    console.log(color)
    document.body.style.background = color
  },
  changePostion: function() {

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
