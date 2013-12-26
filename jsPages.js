Array.prototype.size = function() { return this.filter( function( a ){ return a !== undefined; } ).length };

( function( $ ) {

	// init

	$.jsPagesInit = function( pages, cont ) {

		for( var i = 0; i < pages.size(); ++i )
			pages[i].n = i;

		$.jsPagesList = pages;

		$( cont + ' div' ).each( function( i, id ) {

			if( $( id ).css( 'display' ) != 'none' )
				$.jsPagesActual = $.jsPagesList[i];
		} );

		$( cont ).css( { 'overflow' : 'hidden' } );

		$.jsPagesCssAnim = $.jsPagesTransition();
		$.jsPagesCssTransform = $.jsPagesTransform();
	};

	// exit link

	$.fn.jsPagesGetExitLink = function( e ) {

		if( history.pushState ) {

			for( var i = 0; i < $.jsPagesList.size(); ++i ) {

				if( $( this ).attr( 'href' ).split('/').pop() == $.jsPagesList[i].l.split('/').pop() ) {

					e.preventDefault();

					if( $.jsPagesList[i].n != $.jsPagesActual.n ) {

						$.event.trigger( {
							type : 'jsPagesLoad',
							id : $.jsPagesList[i].id,
							link : $( this ).attr( 'href' ),
							n : $.jsPagesList[i].n
						} );
					}

					break;
				}
			}
		}
	};

	// get css3 transition type

	$.jsPagesTransition = function() {
		var style = document.body.style || document.documentElement.style;

		if( style.WebkitTransition !== undefined )
			return '-webkit-transition';
		else if( style.MozTransition !== undefined )
			return '-moz-transition';
		else if( style.MsTransition !== undefined )
			return '-ms-transition';
		else if( style.OTransition !== undefined )
			return '-o-transition';
		else if( style.transition !== undefined )
			return 'transition';
		else
			return false;
	};

	// get css3 transform type

	$.jsPagesTransform = function() {
		var style = document.body.style || document.documentElement.style;

		if( style.webkitTransform !== undefined )
			return '-webkit-transform';
		else if( style.msTransform !== undefined )
			return '-ms-transform';
		else if( style.MozTransform !== undefined )
			return '-moz-transform';
		else if( style.OTransform !== undefined )
			return '-o-transform';
		else if( style.transform !== undefined )
			return 'transform';
		else
			return false;
	};

	// anim utility

	$.jsPagesAnim = function( id, property, value, duration, easing ) {

		easing = easing || 'ease';

		if( $.jsPagesCssAnim !== false ) {

			$( id ).css( $.jsPagesCssAnim, ( property + ' ' + easing + ' ' + ( duration - 10 ) / 1000 + 's' ) );

			setTimeout( function() {
				$( id ).css( property, value );
			}, 10 );

			setTimeout( function() {
				$( id ).css( $.jsPagesCssAnim, ( property + ' ' + 0 + 's' ) );
			}, duration / 2 );

		} else
			$( id ).animate( { property : value }, duration );
	}

	// simple fallback anim

	$.jsPagesAnimFallback = function( e ) {

		$( $.jsPagesActual.id ).hide();
		$( e.id ).show();

		$.jsPagesActual = e;

		$.event.trigger( {
			type : 'jsPagesDone',
			id : e.id
		} );
	};

	// fading animation

	$.jsPagesAnimFade = function( e ) {

		$( $.jsPagesActual.id ).hide( 500 );
		$( e.id ).show( 500 );

		$.jsPagesActual = e;

		$.event.trigger( {
			type : 'jsPagesDone',
			id : e.id
		} );
	};

	// sliding animation

	$.jsPagesAnimSlide = function( e ) {

		if( $.jsPagesBusy != true ) {

			$.jsPagesBusy = true;

			if( e.n < $.jsPagesActual.n ) {

				$( $.jsPagesActual.id ).css( 'left', '0%' );
				$( e.id ).css( 'display', 'inline-block' );

				$.jsPagesAnim( e.id, 'left', '25%', 1000 );
				setTimeout( function(){ $.jsPagesAnim( $.jsPagesActual.id, 'left', '25%', 1000 ) }, 10 );

				setTimeout( function() {

					$( $.jsPagesActual.id ).hide();
					$.jsPagesActual = e;
					$.jsPagesBusy = false;

					$.event.trigger( {
						type : 'jsPagesDone',
						id : e.id
					} );

				}, 1000 );
			}

			else if( e.n > $.jsPagesActual.n ) {

				$( e.id ).css( 'left', '25%' );
				$( e.id ).css( 'display', 'inline-block' );

				$.jsPagesAnim( $.jsPagesActual.id, 'left', '0%', 1000 );
				$.jsPagesAnim( e.id, 'left', '0%', 1000 );

				setTimeout( function() {

					$( $.jsPagesActual.id ).hide();
					$( e.id ).css( 'left', '25%' );

					$.jsPagesActual = e;
					$.jsPagesBusy = false;

					$.event.trigger( {
						type : 'jsPagesDone',
						id : e.id
					} );

				}, 1000 );
			}
		}
	};

	// flipping animation

	$.jsPagesAnimFlip = function( e ) {

		if( $.jsPagesCssTransform != false ) {

			if( $.jsPagesBusy != true ) {

				$.jsPagesBusy = true;

				$( $.jsPagesActual.id ).css( $.jsPagesCssTransform, 'rotateY(0deg)' );
				$( e.id ).css( $.jsPagesCssTransform, 'rotateY(90deg)' );

				$.jsPagesAnim( $.jsPagesActual.id, $.jsPagesCssTransform, 'rotateY(90deg)', 500, 'linear' );

				setTimeout( function() {

					$( $.jsPagesActual.id ).hide();
					$( e.id ).show();
					$.jsPagesAnim( e.id, $.jsPagesCssTransform, 'rotateY(180deg)', 500, 'linear' );

					setTimeout( function() {

						$( e.id ).css( $.jsPagesCssTransform, 'rotateY(0deg)' );
						$.jsPagesActual = e;
						$.jsPagesBusy = false;

						$.event.trigger( {
							type : 'jsPagesDone',
							id : e.id
						} );

					}, 501 );

				}, 501 );
			}

		} else

			$.jsPagesAnimFallback( e );
	};

	// skewing animation

	$.jsPagesAnimSkew = function( e ) {

		if( $.jsPagesCssTransform != false ) {

			if( $.jsPagesBusy != true ) {

				$.jsPagesBusy = true;

				$( $.jsPagesActual.id ).css( $.jsPagesCssTransform, 'skewY(0deg)' );
				$( e.id ).css( $.jsPagesCssTransform, 'skewY(90deg)' );

				$.jsPagesAnim( $.jsPagesActual.id, $.jsPagesCssTransform, 'skewY(90deg)', 500, 'linear' );

				setTimeout( function() {

					$( $.jsPagesActual.id ).hide();
					$( e.id ).show();
					$.jsPagesAnim( e.id, $.jsPagesCssTransform, 'skewY(180deg)', 500, 'linear' );

					setTimeout( function() {

						$( e.id ).css( $.jsPagesCssTransform, 'skewY(0deg)' );
						$.jsPagesActual = e;
						$.jsPagesBusy = false;

						$.event.trigger( {
							type : 'jsPagesDone',
							id : e.id
						} );

					}, 501 );

				}, 501 );
			}


		} else

			$.jsPagesAnimFallback( e );
	};

	$.jsPagesPushHistory = function( e ) {

		if( $.jsPagesBusy != true ) {
			history.pushState( {}, '', e.link );
		}
	};

} )( jQuery );

// bindings

$( 'a' ).click( function( event ) { $( this ).jsPagesGetExitLink( event ); } );
