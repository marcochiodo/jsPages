(function($) {

	$.fn.jsPagesInit = function( pages ) {

		$.jsPagesArr = pages;

		$.jsPagesFailure = '<div class="error" style="width:200px; height:100px; margin-top:calc( 50%-50px ); margin-left:calc( 50% - 100px );">' + $.jsPagesArr[3] + '</div>'

	}

})(jQuery);
