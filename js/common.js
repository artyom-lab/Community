$(document).ready(function () {

	$(".sandwich").on("click", function() {
		$(this).toggleClass("active");
		$("body").toggleClass("menubar");
	});

	function navbar() {
		if ($(this).scrollTop() >= $(window).height()/3) {
			$('.page-navbar').addClass("fixed-top");
		} else {
			$('.page-navbar').removeClass("fixed-top");
		};
	};
	navbar();
	$(window).on("scroll", navbar);

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

	var start = moment("05/15/2024"),
	    end   = moment("05/25/2024");

	function cb(start, end) {
	    $('#reportrange').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
	};

	$('#reportrange').daterangepicker({
	    startDate: start,
	    endDate: end,
	}, cb);

	cb(start, end);

});