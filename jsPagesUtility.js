(function($) {

	$.fn.jsPagesGetParentOfSize = function() {
		var e = $(this);
		if( e.css('position') == 'absolute' || e.css('position') == 'fixed' ){

			var parent = e.parent();
			while( parent.css('position') == 'static' && parent.get(0).tagName != 'BODY' )
				parent = parent.parent();
		}
		else
			var parent = e.parent();

		return parent;
	}

})(jQuery);
