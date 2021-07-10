
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);

//Open Apps
$(".appButton").click(function () {
	var selectedModal = document.getElementById(`${this.id + "Modal"}`);
	$(selectedModal).css({
		"display": "block",
	})
});

//Close Apps
$(".close").click(function () {
	$(".modal").css({
		"display": "none",
	})
});

//Close Apps by clicking outside
$("body").click(function () {
	if (!$(".modal").css("display") == "none") {
		$(".modal").css({
			"display": "none",
		})
	}
});

//Accordion buttons
$(".accordionButton").click(function () {

	$("#accordionContent div").css({
		"display": "none",
	})
	var selectedContent = document.getElementById(`${this.id + "Content"}`);
	$(selectedContent).css({
		"opacity": "0",
		"display": "block",
	}).show().animate({ opacity: 1 })
	document.querySelector(`#${this.id + "Content"}`).scrollIntoView({
		behavior: 'smooth'
	});
});

//Feedback button
$("#feedbackBtn").click(function () {
	if ($("#feedbackTextarea").is("[readonly]")) { }
	else {
		if (!$("#feedbackTextarea").val() || $("#feedbackTextarea").val().trim() == "") {
			$("#feedbackTextarea").css({
				"border": "1px solid crimson",
			})
			$("#feedbackTextarea").addClass("error");
			$("#errorMsg").css({
				"display": "block",
			})
		} else {

			$("#feedbackBtn").css({
				"background-color": "seagreen",
			})
			$("#feedbackBtn").html("Thank You");

			$("#feedbackTextarea").val('');
			$("#feedbackTextarea").css({
				"border": "none",
			})
			$("#feedbackTextarea").removeClass("error");
			$("#errorMsg").css({
				"display": "none",
			})

			document.getElementById("feedback").readOnly = "true";
			$("#feedbackTextarea").attr("placeholder", "Your feedback is appreciated.");

		}
	}
});

$(document).ready(function () {
	$("#downloadResume").click(function (e) {
		e.preventDefault();
		window.location.href = "files/Resume.pdf";
	});
});

