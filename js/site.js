/*
	Default javascript for PSDLE's website.
	How inefficient could it possibly be?
	
	Since we don't need namespace/external access a single module should be fine.
	
	Debating switching the entire page generation to Javascript/jQuery to make it scalable.
*/

$(document).ready(function() {
	$(".module h3").click(function() {
		ga('send', 'event', 'header', 'click', $(this).text());
		var that = this;
		$(this).parent().parent().find("div").slideToggle(400, function() {
			$(that).find(".module_toggle").removeClass("fa-caret-up fa-caret-down").addClass("fa-caret-"+(($(that).parent().parent().find("div").is(':visible'))?"up":"down"))
		});
	});
	
	$("#pill_get_us").click(function() { ga('send', 'event', 'pill', 'click', 'get userscript'); blink($("#menu .fa-download").parent()); });
	$("#pill_get_bookmarklet, .get_bookmarklet").click(function() { ga('send', 'event', ($(this).attr("id")?'pill':'inline'), 'click', 'get bookmarklet'); blink($("#menu .fa-bookmark").parent()); });
	$(".get_repo").click(function() { ga('send', 'event', 'inline', 'click', 'get repo'); blink($("#menu .fa-code-fork").parent()); });
	
	$("#menu > a").click(function() {
		// Only submit relevant menu items (that have IDs)
		if ($(this).attr("id")) { ga('send', 'event', 'menu', 'click', $(this).attr("id")); }
	});

	$("#get_bookmark").click(function(e) {
		e.preventDefault();
		alert("Don't click this, bookmark it or copy the link!");
	});
	
	function blink(e) {
		$("#menu a").not(e).tooltip("close");
		var initial = $(e).css("color");
		$(e).animate({"color":"#fff"}).animate({"color":initial})
		//$(e).tooltip({tooltipClass:"psdle_blue"}).tooltip("open");
		//$(e).tooltip({tooltipClass:"psdle_blue",position:{my:"center top+15",at:"center bottom"}})
		$(e).tooltip("open");
		setTimeout(function() { $(e).tooltip("close") },3000);
	}
	
	var d = 200;
	$("#menu a").tooltip({
		content: function () { return $(this).prop('title'); },
		show:{effect:"slideDown",duration:d},
		hide:{effect:"slideUp",duration:d},
		tooltipClass:"bottom psdle_blue",
		position:{my:"center top+13",at:"center bottom"}
	});
	
	$(document).scroll(function() { if ($(document).scrollTop() > 0) { $("#btt").stop().fadeIn(); } else { $("#btt").stop().fadeOut(); } });
});