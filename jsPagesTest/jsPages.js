Array.prototype.size = function() { return this.filter( function( a ){ return a !== undefined; } ).length };

(function($) {

	$.jsPagesInit = function( pages, current ) {

		$.jsPagesList = pages;
		$.jsPagesCurrent = pages[ current ];
	};

	// set to be executed on click event

	$.fn.jsPagesGetExitLink = function( e ) {

		for( var i = 0; i < $.jsPagesList.size(); ++i ) {

			if( $( this ).attr( 'href' ) == $.jsPagesList[i].l ) {

				e.preventDefault();
				$.event.trigger({
					type : 'jsPagesLoad',
					id : $.jsPagesList[i].id,
					link : $.jsPagesList[i].l,
					n : $.jsPagesList[i].n
				});
				break;
			}
		}
	};

	// sliding animation

	$.jsPagesAnimSlide = function( e ) {

		if( e.n < $.jsPagesCurrent.n ) {
			$( $.jsPagesCurrent.id ).css({ display : 'inline-block', left : '0%' });
			$( e.id ).css({ display : 'inline-block', left : '0%' });
			$( e.id ).animate({ left : '25%' }, 1000 );
			$( $.jsPagesCurrent.id ).animate({ left : '25%' }, 1000 );
			setTimeout( function(){
			$( $.jsPagesCurrent.id ).hide(0);
			$.jsPagesCurrent = e;
			}, 1000 );
		}
		else if( e.n > $.jsPagesCurrent.n ) {
			$( $.jsPagesCurrent.id ).css({ display : 'inline-block', left : '25%' });
			$( e.id ).css({ display : 'inline-block', left : '25%' });
			$( e.id ).animate({ left : '0%' }, 1000 );
			$( $.jsPagesCurrent.id ).animate({ left : '0%' }, 1000 )
			setTimeout( function(){
			$( e.id ).css({ left : '25%' });
			$( $.jsPagesCurrent.id ).hide(0);
			$.jsPagesCurrent = e;
			}, 1000 );
		}
	};

	// fading animation

	$.jsPagesAnimFade = function( e ) {

		$( $.jsPagesCurrent.id ).hide( 500 );
		$( e.id ).show( 500 );

		$.jsPagesCurrent = e;
	};

	// flipping animation

	$.jsPagesAnimFlip = function( e ) {

		$( $.jsPagesCurrent.id ).css({ '-webkit-transform' : 'rotateY(90deg)', 'transform' : 'rotateY(90deg)' });
		$( $.jsPagesCurrent.id ).delay( 500 ).hide( 0 );
		$( e.id ).delay( 500 ).show( 0 );
		setTimeout( function() { $( e.id ).css({ '-webkit-transform' : 'rotateY(0deg)', 'transform' : 'rotateY(0deg)' }); }, 500 );
		$.jsPagesCurrent = e;
	};

})(jQuery);

// bindings

$( 'a' ).click( function( event ) { $( this ).jsPagesGetExitLink( event ); } );
