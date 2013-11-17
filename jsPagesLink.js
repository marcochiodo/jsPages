(function($) {

	// set to be executed on click event

	$.fn.jsPagesGetExitLink = function( e ) {

		for( var k in $.jsPagesList ) {

			if( $( this ).attr( 'href' ) == k.href ) {

				e.preventDefault();
				$.event.trigger({
					type : 'jsPagesLoad',
					id : page.id,
					link : page.link,
					n : page.n
				});
			}
		}
	}

	// sets the page url

	$.fn.jsPagesUrl = function( e ) {

		if( ! history.pushState( null, null, e.link ) ) {

			window.location = e.link;
		}
	}

})(jQuery);
