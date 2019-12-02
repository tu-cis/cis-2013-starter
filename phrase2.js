var $ = function (id) 
{
    return document.getElementById(id);
}

var vowels = function () 
{
	var stringEntry = $("phrase").value;
	stringEntry = stringEntry.toUpperCase();
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
		var intVowels = 0;
		//insert for loop here
		
		
		$("output").value = "There are " + intVowels + " vowels in the above phrase.";
	}	
} 

var consonants = function () 
{
	var stringEntry = $("phrase").value;
	stringEntry = stringEntry.toLowerCase();
	
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
		var intConsonants = 0;
		// insert for loop here
		
		
		
		$("output").value = "There are " + intConsonants + " consonants in the above phrase.";
	}
}

var reverse = function () 
{
	var stringEntry = $("phrase").value;
	if (stringEntry==="")
	{
		$("phrase").value = "";
		alert("Please enter a phrase and THEN select a button...");
	}
	else
	{
	
		var stringReversed = "";
		// insert for loop here
		
		
		$("output").value = "The reverse of the above phrase is:\n" + stringReversed;
	}
}

var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
}

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
}  