(function($) {

	$.fn.jsPagesGetExitLink = function( e ) {

		var href = $( this ).attr( 'href' );

		for( var n = 0; n < $.jsPagesArr[1].lenght; ++n ) {

			if( href == $.jsPagesArr[1][n][0] ) ) {

				e.preventDefault();
				// do custom code
				break;
			}
		}
	}

})(jQuery);
