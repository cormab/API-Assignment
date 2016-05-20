function getQuote(category) {


	var urlQuote = "http://quotes.rest/qod.json?category="+category;
	var data;
	
	$.ajax({
	  url: urlQuote,
	  dataType: 'json',
	  success: function(data){
	  	var path = Object.keys(data.contents.quotes[0]);
	  	
	});
	console.log(data.contents.quotes[0]);

	$(data.contents.quotes[0]).insertAfter("#"+category)
	
}
