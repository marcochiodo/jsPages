jsPages
=======

Version 0.1

Functions :

	jsPagesInit( pages )

		Takes the var pages, an array containing at pos 0 the domain,
		at the position 1 an array containing page information arrays :
		at pos 0 the page link for use in <a> tags, at pos 1 the id of
		the div containing the page, at pos 2 the link ajax takes the
		page from.
		Puts pages in the $.jsPagesArr variable.

	jsPagesLink( e )

		Takes the click event variable ( e ) and check if the event link
		is contained in $.jsPagesArr, in which case it prevents default
		and executes custom code.
