$("document").ready( function(){
	console.log("Loading SevDen");

	/******* Search Functionality ********/
	$("button#search-btn").click(function(){
		searchTerm = $("#search-input").val();
		console.log(searchTerm);
	});


});

