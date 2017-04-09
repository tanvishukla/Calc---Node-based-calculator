/**
 * New node file
 */
var ejs = require("ejs");

function getval(req,res){
	
	ejs.renderFile('./views/cal.ejs',function(err,result){
		
		
		if(!err){
			
			
			res.end(result);
			
		}
		else{
			
			res.end('An error occured');
			console.log(err);
			
		}
		
	});
	
}

//static var count=0;
function add(req,res){
	
	var fnums=req.param("num1");
	var snums=req.param("num2");
	var fnum=parseFloat(fnums);
	var snum=parseFloat(snums);
	var sum,operation;
	var button=req.param("button");
	//console.log(button);
	//count++;
	//console.log(count);
	/*if(fnums=="" || snums=="")
		operation="Enter numbers in number field";
	else if(isNaN(fnums) || isNaN(snums))
		operation="Enter valid number";
	
	else{*/
	
	//console.log(button);	
	if(button=="add")
	{
		
		console.log(fnum);
		console.log(snum);
		if(fnums=="" || snums=="")
			operation="Enter numbers in number field";
		else if(isNaN(fnums))
			operation="Click on clear and enter valid number !";
		else{
	 sum=fnum+snum;
	 operation="Addition is : ";
		}
	console.log(sum);
	//res.send("Hi");
   	
	
	}

	if(button=="sub"){
		
		if(fnums=="" || snums=="")
			operation="Enter numbers in number field";
		else if(isNaN(fnums))
			operation="Click on clear and enter valid number !";

		
		else{
		sum=fnum-snum;
		operation="Subtraction is : ";}
		console.log(sum);
	}
	if(button=="mult"){
		
		if(fnums=="" || snums=="")
			operation="Enter numbers in number field";
		else if(isNaN(fnums))
			operation="Click on clear and enter valid number !";

		
		else{sum=fnum*snum;
		operation="Multiplication is : ";}
		console.log(sum);
	}
	
	if(button=="div"){
	
		if(fnums=="" || snums=="")
			operation="Enter numbers in number field";
		else if(isNaN(fnums))
			operation="Click on clear and enter valid number !";
		else{
		
	if(snum === 0 || snum === 0.00)
		operation="Number cannot be divided by zero. Please enter another number !";
	else
	{
		operation="Division is : ";
		sum=fnum/snum;
		console.log(sum);
	}
		}	
	
}
	if(button=="clear"){
		
		//do something
		ejs.renderFile('views/cal.ejs', function(err,result){
			
			if (!err) {
	            res.end(result);
	        }
	        // render or error
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
			
			
		});
		
		
	

	
	}	
	ejs.renderFile('views/cal.ejs', {num1:fnum, num2:snum,sum:sum, op:operation} ,function(err,result){
			
			if (!err) {
	            res.end(result);
	        }
	        // render or error
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
	   
			
			
		});
	}		
	


exports.getval=getval;
exports.add=add;