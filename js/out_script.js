// JavaScript Document
$(document).ready(function()
{
	//$('#button2').on('click',ItayStartFlip());
	//$('#button2').bind()
	$( "#button2" ).bind( "click", function() {
	  ItayStartFlip();
	});
})
function ItayFlipText(input_text){
	//alert(input_text)
	var len = input_text.length; 
	var nTest = "";
	//alert(isHebrew(input_text))
	if (! isHebrew(input_text))
	{
		nTest = input_text;
	}
	else 
	{
		for ( var i=0 ; i<len ; ++i) 
		{
			var c = input_text.charAt(i);
			nTest = c + nTest;
		}	
	}	
	//alert(nTest);
	return nTest ;
}
			

function isHebrew(input_text){
	var Heb = false;
	var len = input_text.length;
	for ( var i=0 ; i<len ; ++i) {
		var c = input_text.charAt(i);
		if ((c >= 'א') && (c <= 'ת'))
			Heb = true;
		if (Heb)
			break;}
	return Heb;}

function cutEndSpace(line){
	var c = line.charAt(0);
	// if (c == ' ')
	//	return line.substr(1);
	// else
		return line;
}

function ItayStartFlip()
{ // function ItayStartFlip starts
	var newval="" ;
	var newline="" ;
	var lastLine='';
	var nTest = "";
	
	//var val = document.f.a.value;
	var val = $('#a').val();
	var len=val.length;
	for ( var i=0 ; i<len; ++i) 
	{ // loop through inputed text starts
		var c=val.charAt(i);
		var c0=val.charAt(i+1) ;
		//console.log('c: ' + c + ' c0: ' + c0);
		if ( (c=='\r' && c0=='\n')) 
		{ // if 1st and 2nd character is blank check starts
			alert(1)
			if ( newval.length==0 )
				newval = ItayFlipText(nTest) + newline;
			else
				if (lastLine.length == 0)
					newval = newval + "\r\n" + ItayFlipText(nTest) + newline;
				else
					newval = newval + "\r\n" + ItayFlipText(nTest) + cutEndSpace(newline);
			lastLine = ItayFlipText(nTest) + newline;
			newline="" ;
			nTest = "";
			++i;
		} // if 1st and 2nd character is blank check ends
		else 
		{ // else to  check 1st and 2nd character is not blank starts
			if (c != ' ') // if to check first character is not blank starts
				nTest = nTest + c;
			else 
			{ // if to check first character is  blank starts
				newline = ' ' + ItayFlipText(nTest) + newline;
				nTest = "";
			} // if to check first character is  blank ends
		} // else to  check 1st and 2nd character is not blank ends
	} // loop through inputed text ends
	if ( newval.length==0 ) // IF to check newval length is 0 (means empty) starts
		newval = ItayFlipText(nTest) + newline;
	else  // IF to check newval length is 0 (means empty) starts
	{ // else to check  newval length is NOT 0 (means filled) starts
		if (lastLine.length == 0)
			newval = newval + "\r\n" + ItayFlipText(nTest) + newline;
		else
			newval = newval + "\r\n" + ItayFlipText(nTest) + cutEndSpace(newline);
	} // else to check  newval length is NOT 0 (means filled) ends
	//alert('--'+newval+'--');
	$('#a').val(newval);
	        //document.f.a.value=newval;
} // function ItayStartFlip ends
