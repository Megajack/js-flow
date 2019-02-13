window.videoController = {
	init: function (video) {
		this.video = video
		console.dir(video)
		this.video.ontimeupdate = this.timeUpdate.bind(this)
	},
	timeUpdate: function() {
		window.playerUi.playbackPosition((this.video.currentTime * 100) / this.video.duration)
	},
	pauseVideo: function() {
		this.video.pause()
	},
	playVideo: function() {
		this.video.play()
	},
	backPlay: function() {
		window.playerUi.playbackPosition(this.video.currentTime - 10)
		this.video.currentTime = this.video.currentTime - 10
	},
	forwardPlay: function() {
		window.playerUi.playbackPosition(this.video.currentTime + 10)
		this.video.currentTime = this.video.currentTime + 10
	}
}
