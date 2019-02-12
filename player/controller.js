window.videoController = {
	init: function (video) {
		console.log(video)
		this.video = video
		console.dir(video)
	},
	pauseVideo: function () {
		this.video.pause()
	},
	playVideo: function () {
		this.video.play()
	}
}