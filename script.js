$("#p1Sub").click(function(){
	var elements = document.querySelectorAll(".form1 input[type=number]");
	var total = 0;
	
	for (var i = 0; i < elements.length; i++) {
	    if (elements[i].value != ""){
	        total += parseInt(elements[i].value);
		}
	}
	$("#p1Total").val(total + " Hours");
});


$("#p2Sub").click(function(){
	var elements = document.querySelectorAll(".form2 input[type=number]");
	var total = 0;
	
	for (var i = 0; i < elements.length; i++) {
	    if (elements[i].value != ""){
	        total += parseInt(elements[i].value);
		}
	}
	$("#p2Total").val(total + " Hours");
});