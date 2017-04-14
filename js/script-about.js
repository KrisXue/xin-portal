$(function(){
	// 轮播
	bannerRotate.bannerInit();
});

// banner rotating
var bannerRotate = {
	_time: 10000,
	_fade: 200,
	_i: 0,
	_interval: null,
	_navId: "#mb-inav",
	_navBox: "#mb-ibox",
	_navTxt: "#mb-itxt",
	bannerShow: function() {
	    $(this._navId).find("li .item-li").removeClass("cur");
	    $(this._navId).find("li:eq(" + this._i + ")").find(".item-li").addClass("cur");
		
		//$(this._navBox).find("a").hide();
		$(this._navBox).find("a:eq(" + this._i + ")").fadeIn(this._fade);

	    $(this._navBox).find("a").removeClass("move");
		$(this._navBox).find("a[class='cur']").removeClass("cur").addClass("move");

		$(this._navBox).find("a:eq(" + this._i + ")").removeClass("move").addClass("cur");
		$(this._navTxt).find(".slide-itxt").hide();
		$(this._navTxt).find(".slide-itxt:eq(" + this._i + ")").fadeIn(this._fade);
	},
	bannerStart:function() {
		var _this = this;
		_this._interval = setInterval(function() {
			if(_this._i >= 3) {
				_this._i = 0;
			}
			else {
				_this._i++;
			}
			_this.bannerShow();
		}, _this._time);
	},
	bannerInit: function() {
		var _this = this;
		_this.bannerStart();
		
		$(_this._navId).find("li .item-li").bind("click", function () {
		    if ($(this).hasClass("cur")) {
		        return;
		    }
		    clearInterval(_this._interval);
			_this._i = $(this).parent().index();
			_this.bannerShow();
			_this.bannerStart();
		});
	}
};