window.playerUi = {
	init: function(){
		// console.log('inited')
		this.playButton = document.querySelector('#play')
		this.backwardButton = document.querySelector('#backward')
		this.forwardButton = document.querySelector('#forward')
		this.video = document.querySelector('video')
		this.progress = document.querySelector('.slider-fill')
		this.playButton.addEventListener('click', this.buttonClick.bind(this))
		videoController.init(this.video)
	},
	buttonClick: function() {
		// console.log(this)
		if (this.video.paused) {
			videoController.playVideo()
		} else {
			videoController.pauseVideo()
		}
	},
	playbackPosition: function(perc) {
		this.progress.style.width = perc + '%'
	}
}
