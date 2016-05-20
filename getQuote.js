function getQuote(category) {
	var urlQuote = "http://quotes.rest/qod.json?category="+category;
	
	$.ajax({
	  url: urlQuote,
	  dataType: 'json',
	  success: function(data){
	  	$("<p>"+data.contents.quotes[0].quote+"<br /> - "+data.contents.quotes[0].author+"</p>").insertAfter("#"+category);
		}
	});
}
