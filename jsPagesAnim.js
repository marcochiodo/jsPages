(function($) {

	$.fn.jsPagesAnim = function( arr ) {

		var animations = [];

		if( arr.lenght == 4 )
			animations = arr[3];
		else
			animations = jsPagesArr[4];

		for( int n = 0; n < animations.lenght; ++n ) {

			if( animations[n].lenght == 3 )
				$( animations[n][2] ).animate( animations[n][0], animations[n][1] );
			else
				$( arr[1] ).animate( animations[n][0], animations[n][1] );

		}
	}

})(jQuery);
