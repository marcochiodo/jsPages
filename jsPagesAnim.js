(function($) {

	$.fn.jsPagesAnimSlide = function( e ) {

		if( e.n < $.jsPagesCurrent.n ) {
			$( e.id ).css({ 'display' : 'inline-block' });
			$( $.jsPagesCurrent.id ).css({ 'left' : '0%' });
			$( e.id ).animate( { 'left' : '25%' }, 1000 );
			$( $.jsPagesCurrent.id ).css({ 'display' : 'none' });
		} else if( e.n > $.jsPagesCurrent.n ) {
			$( e.id ).css({ 'display' : 'inline-block' });
			$( $.jsPagesCurrent.id ).animate( { 'left' : '0%' }, 1000 );
			$( $.jsPagesCurrent.id ).css({ 'display' : 'none' });
			$( e.id ).css({ 'left' : '25%' });
		}

		$.jsPagesCurrent.n = e.n;
		$.jsPagesCurrent.id = e.id;
	}

	$.fn.jsPagesAnimFade = function( e ) {

		$( $.jsPages.current.id ).hide( 500 );
		$( e.id ).show( 500 );

		$.jsPagesCurrent.n = e.n;
		$.jsPagesCurrent.id = e.id;
	}

})(jQuery);
