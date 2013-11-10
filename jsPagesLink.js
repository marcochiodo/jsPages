(function($) {

	// set to be executed on click event

	$.fn.jsPagesGetExitLink = function( e ) {

		for( var key in $.jsPagesList.pages ) {

			if( $( this ).attr( 'href' ) == $.jsPagesList[key].link ) ) {

				e.preventDefault();
				$.jsPagesLoad( $.jsPagesList[key] );
				$.jsPagesUrl( $.jsPagesList[key] );
				break;
			}
		}
	}

	// handles the ajax request

	$.fn.jsPagesLoad = function( page ) {

		$.event.trigger( {
			type : 'jsPagesStart',
			data : data
		} );

		$.ajax( {
			url : page.ajaxLink
		} )
		
		.done( function( data ) {
			$.event.trigger( {
				type : 'jsPagesDone',
				data : data
			} );
		} )
		
		.fail( function( data ) {
			$.event.trigger( {
				type : 'jsPagesFail',
				time : new Date(),
				page : page
			} );
		} )
		
		.always( function( data ) {
			$.event.trigger( {
				type : 'jsPagesAlways',
				data : data
			} );
		} )
	}

	// sets the page url

	$.fn.jsPagesUrl = function( page ) {

		history.pushState( null, null, page.link );

	}

})(jQuery);
