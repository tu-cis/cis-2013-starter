var $= function(id)
{
	return document.getElementById(id);
};

//this function gets the string input from the DOM and turns it into a useful array
getInputArray = function()
{
	//alert("getInputArray has started");
	var stringInput = $("input_box").value; //pull the input from the DOM
	var stringTemp, stringTemp2;
	var arrayInput = [];
		
	/* We are going to convert the input string into an array and then create parallel string and
	 * number arrays to use in our program.  Copying the currency information from the table presents
	 * some problems we must deal with. When we copy and paste the table info, we don't get a nicely
	 * formatted string that allows us to split the string easily into an array.  The two main issues are:
	 * (1) each currency value is followed by a new line (\n in js syntax) and (2) between the currency and name,
	 * a space and a tab are inserted (" \t" in js syntax).  There are numerous ways that one could
	 * cycle through the resulting array and remove elements.  In the code below, I decided to overcome these
	 * formatting problems through a series of string splits (creating an array from a string) and array joins
	 * (creating a string from an array) to, hopefully, make you comfortable with these string and array methods.
	 */
	
	//convert input string to an array with new elements separated by a new line (\n), removing \n from the resulting string
	arrayInput = stringInput.split("\n");
	
	//joining arrayInput into a string (stringTemp) allows us to do another split to get rid of the space and tab from the table
	stringTemp = arrayInput.join();

	//split stringTemp into a new array with new elements separated by a space and tab, removing those characters from resulting array
	arrayInput = stringTemp.split(" \t");
	
	//the final steps are to join the intermediate array and then split it again at the "," that was added during the previous joins
	stringTemp2 = arrayInput.join();
	arrayInput = stringTemp2.split(",");
	
	/* The following code can be uncommented to show you the index position and value of the current array
	var stringArrayTemp = "";
	
	for (var i=0; i<arrayInput.length; i++)
	{
		stringArrayTemp += "["+i+"]"+"["+arrayInput[i]+"]";
	}
	
	alert ("stringTempArray = "+stringArrayTemp);*/ 
		
	//alert("final arrayInput = "+ arrayInput.join());
	return arrayInput;
};

//this function takes the "clean" input array, searches for numbers in the array, and creates an array of just numbers/exchange rates
getNumArray = function(inputArray)
{
	//alert ("getNumArray has started");
	
	var arrayNum = []; // declare new array of numbers
	
	//populate the array of numbers.  cycle through the input array and "push" any numerical value into the array of numbers
	for (var x=0; x<inputArray.length; x++)
	{
		if (!isNaN(inputArray[x]))
		{
			arrayNum.push(inputArray[x]);
		}
	}

	//alert("getNumArray.  arrayNum = "+ arrayNum.join());
	
	return arrayNum;
};

//this function takes the "clean" input array, searches for strings in the array, and creates an array of just strings/names
getStringsArray = function(inputArray)
{
	//your code here
};

//the match function is here to make sure that you actually read the table data, removed the extra characters and properly created the parallel arrays
var match = function()
{
	var arrayInput = getInputArray(); // get's the input array from the DOM
	var arrayNum = getNumArray(arrayInput);  // creates the number array
	var arrayStrings = getStringsArray(arrayInput); //creates the parallel string array
	
	var stringOutput = "";
	
	//Create an output string that puts the currency and exch rate on the same line.  should match the table on the DOM.
	for (var x=0; x<arrayStrings.length; x++)
	{
		stringOutput = stringOutput + arrayStrings[x] + ":  " + arrayNum[x] + "\n";
	}
	
	$("output").value = stringOutput;

};

//this function loops through the numbers array, looking for the highest value
var highExchRate = function()
{
	
	//your code here
};

var lowExchRate = function()
{
	//your code here
};

//this function accepts an array of numbers, adds the elements, and calculates and returns the average based upon the number of array elements
calcAvgExchRate = function(numberArray_par)
{
	//your code here
};

//this function connects to the respective DOM button, calls the caclAvgExchRate function and send the output to the DOM
var averageExchRate = function()
{
	//your code here
};

//this function cycles through the array of numbers, comparing each element to the average exch rate.
//for any array element with a value greater than the average, it is added to the string output and pushed to the DOM.
var aboveAvgExchRate = function()
{
	//your code here
};

//this function cycles through the array of numbers, comparing each element to the average exch rate.
//for any array element with a value less than the average, it is added to the string output and pushed to the DOM.
var belowAvgExchRate = function()
{
	//your code here
};


window.onload = function()
{
	$("match").onclick = match;
	$("high_exch").onclick = highExchRate;
	$("low_exch").onclick = lowExchRate;
	$("average").onclick = averageExchRate;
	$("above_avg").onclick = aboveAvgExchRate;
	$("below_avg").onclick = belowAvgExchRate;
};