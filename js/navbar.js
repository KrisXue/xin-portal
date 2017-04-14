$(function() {
				$(".navbar-toggle").click(function() {
					$(this).toggleClass("click");
					$(".bg-div").toggleClass("hide");
					$("body").toggleClass("body-static");
					$(".navbar-form a").toggleClass("active");
					$(".navbar-collapse").slideToggle();
				});
				$(".bg-div").click(function() {
					$(".navbar-toggle").trigger("click");
				});

				var top = ($(window).height() - $(".modal-content").height()) / 2;
				$(".model-down").click(function() {
					$(".modal-content").css({ position: 'absolute', 'top': top });
				});
				$(".model-down-1").click(function() {
					$(".modal-content").css({ position: 'absolute', 'top': top });
				});

				$(".weixin-logo-icon").mouseleave(function() {
					$(this).prev().find(".popover").removeClass("hover");
				}).mouseenter(function() {
					$(this).prev().find(".popover").addClass("hover");
				});
				$(".shouji-logo-icon").mouseleave(function() {
					$(this).prev().find(".popover").removeClass("hover");
				}).mouseenter(function() {
					$(this).prev().find(".popover").addClass("hover");
				});

				var navAgent = navigator.userAgent.toLowerCase();
				if(navAgent.indexOf("thjk-app-ios") > -1 || navAgent.indexOf("thdoctor-app-ios") > -1 || navAgent.indexOf("thjk-app-android") > -1 || navAgent.indexOf("thdoctor-app-android") > -1) {
					$(".navbar-form.navbar-right").hide();
					$(".nav > li:last-child a").css({ "border-bottom": "0" });
				}

				$(".navbar-nav > li.click a").removeAttr("href");
			});
			<!--pc端图片切换js-->
			$(document).ready(function() {

				$dragBln = false;

				$(".team_main_image").touchSlider({
					flexible: true,
					speed: 200,
					btn_prev: $("#btn_prev"),
					btn_next: $("#btn_next"),
					paging: $(".flicking_con .item-text"),
					counter: function(e) {
						$(".flicking_con .item-text").removeClass("on").eq(e.current - 1).addClass("on");
					}
				});

				$(".team_main_image").bind("mousedown", function() {
					$dragBln = false;
				});

				$(".team_main_image").bind("dragstart", function() {
					$dragBln = true;
				});

				$(".team_main_image a").click(function() {
					if($dragBln) {
						return false;
					}
				});

				timer = setInterval(function() {
					$("#btn_next").click();
				}, 5000);

				$(".main_visual").hover(function() {
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						$("#btn_next").click();
					}, 5000);
				});

				$(".team_main_image").bind("touchstart", function() {
					clearInterval(timer);
				}).bind("touchend", function() {
					timer = setInterval(function() {
						$("#btn_next").click();
					}, 5000);
				});

			});