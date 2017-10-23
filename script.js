$("#submitButton").on("click", submit);

function submit(){
			
	var when = $('input[name="whenQuestion"]:checked').val();
	var where = $('input[name="locationQuestion"]:checked').val();
	var whatDo = $('input[name="doQuestion"]:checked').val();
			
	$('.display-3, .lead, #results-container').fadeOut(600, function(){
    	$(".display-3, .lead, #results-container").empty().show();
    	$(".display-3").append("Cool");
    	$(".lead").append("it didn't break");
    	$("#results-container").append("<div id='letter' class='col-lg-12'></div>");
    	$("#letter").append("<h2>Caprese Boi,</h2>")
					.append("<p>" + "I would like to hang out " + when + " if that's cool with you." + "</p>")
					.append("<p>" + where + " would probably be best." + "</p>")
					.append("<p>" + "We should totally " + whatDo + ".</p>")
					.append("<p> Regards, </p>")
					.append("<p> Perfect Pasta </p>")
	});
};