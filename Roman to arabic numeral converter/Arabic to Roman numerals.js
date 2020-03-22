//get all the buttons and output and store it in variables
var inpm = document.getElementById("inpm");
var inpd = document.getElementById("inpd");
var inpc = document.getElementById("inpc");
var inpl = document.getElementById("inpl");
var inpx = document.getElementById("inpx");
var inpv = document.getElementById("inpv");
var inpi = document.getElementById("inpi");
var but = document.getElementById("convert");
var output = document.getElementById("output");
var clear = document.getElementById("clear");
// create array to store input values
var inputArray =[];
var outputArray ;
//when the M button is clicked
inpm.onclick = function() {
	 
	if(isNaN(output.textContent)){
		//if the output contains something thats not a number(i.e not arabic numeral)
		// add the letter M to what ever is there
	output.textContent+="M";
	}
	else{//if its a number(i.e already converted)
		inputArray.length= 0;//clears the output
  		output.textContent="M";//display M as the first letter
	}
	 inputArray.push(1000);//on click of M add 1000 to the inputArray
}
//When the D button is clicked
inpd.onclick = function() {
	 
	if(isNaN(output.textContent)){
		//if the output contains something thats not a number(i.e not arabic numeral)
		// add the letter D to what ever is there 
	output.textContent+="D";
	}
	else{//if its a number(i.e already converted)
		 inputArray.length= 0;//clears the output
  		 output.textContent="D";//display D as the first letter
	}
	 inputArray.push(500);//on click of D add 500 to the inputArray
}
//samething holds for C L X V I

//When the C button is clicked
inpc.onclick = function() {
	 
	if(isNaN(output.textContent)){
		 
	output.textContent+="C";
	}
	else{
		 inputArray.length= 0;
   output.textContent="C";
	}
	 inputArray.push(100);
}
//When the L button is clicked
inpl.onclick = function() {
	 
	if(isNaN(output.textContent)){
		 
	output.textContent+="L";
	}
	else{
		 inputArray.length= 0;
   output.textContent="L";
	}
	 inputArray.push(50);
}
//When the X button is clicked
inpx.onclick = function() {
	 
	if(isNaN(output.textContent)){
		 
	output.textContent+="X";
	}
	else{
		 inputArray.length= 0;
   output.textContent="X";
	}
	 inputArray.push(10);
}
//When the V button is clicked
inpv.onclick = function() {
	 
	if(isNaN(output.textContent)){
		 
	output.textContent+="V";
	}
	else{
		 inputArray.length= 0;
   output.textContent="V";
	}
	 inputArray.push(5);
}
//When the I button is clicked
inpi.onclick = function() {
	 
	if(isNaN(output.textContent)){
		 
	output.textContent+="I";
	}
	else{
		 inputArray.length= 0;
   output.textContent="I";
	}
	 inputArray.push(1);
}



//when the clear button is clicked,
clear.onclick = function() {
	inputArray.length=0; //empty array
	output.textContent=""; //clear output
}

//when the convert button is clicked
but.onclick = function() {
  outputArray = [0];//create an array to hold output give it an initial zero
					//which is less than all possible inputs 
	
	if(output.textContent==""){  //if there is no input from user
		alert("enter a value")
	}
	else{  //if there is an input from user;
	
	for(var i=0; i < inputArray.length; i++){  //iterate over the input array
		
		if(outputArray[outputArray.length-1] < inputArray[i]){ //checks if the first input is smaller than the next
															   //so we can subtract instead, e.g IV=5-1=4
		 var realValue = inputArray[i]-outputArray[outputArray.length-1];
		 
		 outputArray.push(realValue);//push final value to output array
		}
		else{// here we push in the input to output, e.g V=5
			   outputArray.push(inputArray[i]);
		}
			
				//alert(inputArray[i]); just for debugging and testing purpose
		
			
	}
	// an array to hold the final values
	var finalOutput = [];
	//alert(outputArray); //just for debugging and testing
	
	 for(var i=1; i< outputArray.length; i++){  // iterate over the output array
												// starting from index 1, to jump initial 0 in the array
	   if(outputArray[i] < outputArray[i+1]){  // tests; example the user enterd IV
											   //  output array stores [0,1,4]
											   //  this test removes the 1 from the finalOutput array 
   		
   	}
   	else{
   		
   		 finalOutput.push(outputArray[i]); //adds only 4 from example above
   		 } 
   		 }
   		  output.textContent= finalOutput.reduce(function(a,b){ // add everything in the finalOutput array
     			return a+b;
     		});
}

}













