window.videoController = {
	init: function (video) {
		// console.log(video)
		this.video = video
		console.dir(video)
		this.video.ontimeupdate = this.timeUpdate.bind(this)
	},
	timeUpdate: function() {
		// console.log(this.video.currentTime)
		// return (this.video.currentTime * 100) / this.video.duration
		window.playerUi.playbackPosition((this.video.currentTime * 100) / this.video.duration)
	},
	pauseVideo: function () {
		this.video.pause()
	},
	playVideo: function () {
		this.video.play()
	}
}
