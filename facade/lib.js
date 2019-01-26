(function($){
	window.lib = {
		classCheck: function (btn, className) {
			// console.log(this)
			return $(btn).hasClass(className);
		},
		elemDelete: function () {
			return $(this).remove()
		},
		setHtml: function (htmlChange) {
			$(this).html(htmlChange)
		}
	}
})(jQuery)
