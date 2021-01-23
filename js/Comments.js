
/*Javascript validation for forms*/
/*------------------------------------------- */

function validateForm()
{
	var x = document.forms["myForm"]["firstname"].value;
	var y = document.forms["myForm"]["rating"].value;
	var z = document.forms["myForm"]["comment"].value;
		   
	if (x == "" && y == "")
	{
		alert("firstname and rating both are required");
	}
	else 
	{
		if (x == "") 
		{
			alert("firstname must be also required");
		}
		if (y == "")
		{
			alert("rating must be also required");
		}
	}
	
	if (x != "" && y != "")
	{
		alert("Dear " + x + ", Thank you very much for your feedback. You have rated our site as " + y + " and your comment was " +  z);
	}
}
