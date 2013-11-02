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
		In pos 2 the type of transition between pages.
		In pos 3 a loading failure message.
		Puts pages in the $.jsPagesArr variable.

	jsPagesLink( e )

		Takes the click event variable ( e ) and checks if the event link
		is contained in $.jsPagesArr, in which case it prevents default
		and executes the $.jsPagesAnim function.

	jsPagesAnim( arr )

		Takes page information array and decides which animation to use
		to show the new page.

	jsPagesLoad( arr )

		Takes page infrmation array, loads the page in the choosen div.

	jsPagesUrl( arr )

		Takes page information array, changes the shown page url.
