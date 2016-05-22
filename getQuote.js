function getQuote(category) {
	var urlQuote;
	var quote = [];

	urlQuote = "http://quotes.rest/qod.json?category="+category;
	$.ajax({
		async: false,
	  url: urlQuote,
	  dataType: 'json',
	  success: function(data){
	  	quote.push(data.contents.quotes[0].quote);
	  	//console.log(data.contents.quotes[0].quote);
	  	quote.push(data.contents.quotes[0].author);
			}
		});

	$("#quote").html(quote[0]);
	$("#author").html(quote[1]);
	$("#quotebox").show();
	//$("<p id=under"+category+">" + quote.join(' <br> - ') + "</p>").insertAfter("#"+category);
}
