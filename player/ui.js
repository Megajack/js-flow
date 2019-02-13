window.playerUi = {
	init: function(){
		this.playButton = document.querySelector('#play')
		this.backwardButton = document.querySelector('#backward')
		this.forwardButton = document.querySelector('#forward')
		this.video = document.querySelector('video')
		this.progress = document.querySelector('.slider-fill')

		this.playButton.addEventListener('click', this.buttonClick.bind(this))
		this.backwardButton.addEventListener('click', this.backClick.bind(this))
		this.forwardButton.addEventListener('click', this.forwardClick.bind(this))
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
	// TODO: make single method with Switch
	backClick: function() {
		window.videoController.backPlay()
	},
	forwardClick: function() {
		window.videoController.forwardPlay()
	},
	playbackPosition: function(perc) {
		this.progress.style.width = perc + '%'
	}
}
