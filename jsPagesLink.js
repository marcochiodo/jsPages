(function($) {

	// set to be executed on click event

	$.fn.jsPagesGetExitLink = function( e ) {

		var href = $( this ).attr( 'href' );

		for( var n = 0; n < $.jsPagesArr[1].lenght; ++n ) {

			if( href == $.jsPagesArr[1][n][0] ) ) {

				e.preventDefault();
				$.jsPagesLoad( $.jsPagesArr[1][n] );
				$.jsPagesUrl( $.jsPagesArr[1][n] );
				$.jsPagesAnim( $.jsPagesArr[1][n] );
				break;
			}
		}
	}

	// handles the ajax request

	$.fn.jsPagesLoad = function( arr ) {

		var request = $.get( arr[2] )
		.done(function( data ) {
			$( arr[1] ).html( data );
			alert( 'Success' );
		})
		.fail(function() {
			$( arr[1] ).html( $.jsPagesFailure );
			alert( 'Error' );
		});

	}

	// sets the page url

	$.fn.jsPagesUrl = function( arr ) {



	}

	$.fn.jsPagesAnim = function( arr ) {

		if( $.jsPagesArr[2] == 'slide' )
			// slide function
		else if( $.jsPagesArr[2] == 'fade' )
			// fade function
		else if( $.jsPagesArr[2] == 'none' )
			// basic function

	}

})(jQuery);
