


function calculate(val){
	var input = document.getElementById("td_result").innerHTML;
	
	if(input == ""){
		document.getElementById("td_result").innerHTML = val;
		logic(input,val);
	}else{
		if(val == '+' && input.includes("+")==1 || val == '+' && input.includes("-")==1 || val == '+' && input.includes("*")==1 || val == '+' && input.includes("/")==1 || val == '+' && input.includes("^")==1 || val == '+' && input.includes("%")==1){
			document.getElementById("td_result").innerHTML = document.getElementById("result").innerHTML+"+";
		}else if(val == '-' && input.includes("+")==1 || val == '-' && input.includes("-")==1 || val == '-' && input.includes("*")==1 || val == '-' && input.includes("/")==1 || val == '-' && input.includes("^")==1 || val == '-' && input.includes("%")==1){
			document.getElementById("td_result").innerHTML = document.getElementById("result").innerHTML+"-";
		}else if(val == '/' && input.includes("+")==1 || val == '/' && input.includes("-")==1 || val == '/' && input.includes("*")==1 || val == '/' && input.includes("/")==1 || val == '/' && input.includes("^")==1 || val == '/' && input.includes("%")==1){
			document.getElementById("td_result").innerHTML = document.getElementById("result").innerHTML+"/";
		}else if(val == '*' && input.includes("+")==1 || val == '*' && input.includes("-")==1 || val == '*' && input.includes("*")==1 || val == '*' && input.includes("/")==1 || val == '*' && input.includes("^")==1 || val == '*' && input.includes("%")==1){
			document.getElementById("td_result").innerHTML = document.getElementById("result").innerHTML+"*";
		}else if(val == '^' && input.includes("+")==1 || val == '^' && input.includes("-")==1 || val == '^' && input.includes("*")==1 || val == '^' && input.includes("/")==1 || val == '^' && input.includes("^")==1 || val == '^' && input.includes("%")==1){
			document.getElementById("td_result").innerHTML = document.getElementById("result").innerHTML+"^";
		}else if(val == '%' && input.includes("%")==1 || val == '%' && input.includes("+")==1 || val == '%' && input.includes("-")==1 || val == '%' && input.includes("*")==1 || val == '%' && input.includes("/")==1 || val == '%' && input.includes("^")==1){
			document.getElementById("td_result").innerHTML = document.getElementById("result").innerHTML+"%";
			document.getElementById("result").innerHTML = document.getElementById("result").innerHTML/100;
		}else{
			document.getElementById("td_result").innerHTML = input+val;
			logic(input,val);
		}
	}
}


function logic(input,val){
	input = input+val;
	
	
		var op;
		if(input.includes("/")==1){
			input = input+val;
			index = input.length;
			ordinal = index - 1;
			find = input.search("/");
			op_1 = input.slice(0,find);
			op_2 = input.slice(find+1,ordinal);
			solve = op_1/op_2;
		}else if(input.includes("*")==1){
			var cut = input.split("*");
			var solve = cut[0] * cut[1];
		}else if(input.includes("+")==1){
			var cut = input.split("+");
			var solve = Number(cut[0]) + Number(cut[1]);
		}else if(input.includes("-")==1){
			input = input+val;
			index = input.length;
			ordinal = index - 1;
			find = input.search("-");
			op_1 = input.slice(0,find);
			op_2 = input.slice(find+1,ordinal);
			solve = op_1-op_2;
		}else if(input.includes("^")==1){
			input = input+val;
			index = input.length;
			ordinal = index - 1;
			find = input.search("^");
			op_1 = input.slice(0,find);
			op_2 = input.slice(find+1,ordinal);
			solve = op_1^op_2;
		}else if(input.includes("%")==1){
			input = input+val;
			index = input.length;
			ordinal = index - 1;
			find = input.search("%");
			op_1 = input.slice(0,find);
			solve = op_1/100;
		}else{
			solve = input;
		}
		
		document.getElementById("result").innerHTML = solve;
}



function reset(){
	var input = document.getElementById("td_result").innerHTML;
	if(input == ""){
		document.getElementById("td_result").innerHTML = 0;
		calculate("");
	}else if(input == 0){
		document.getElementById("td_result").innerHTML = "";
		calculate("");
		//wake();
	}else{
		document.getElementById("td_result").innerHTML = 0;
		calculate("");
	}
}

function del(){
	var input = document.getElementById("td_result").innerHTML;
	var index = input.length;
	var ordinal = index - 1;
	//var input_array = input.split(""); convert to array
	//var new_input = input.replace(input_array[ordinal],""); i did'nt use replace() anymore because we are not relacing a string but deleting the last index
	var new_input = input.slice(0,ordinal);
	document.getElementById("td_result").innerHTML = new_input;
	calculate("");
	//wake();
}

function wake(){
	var input = document.getElementById("td_result").innerHTML;
	if(input == ''){
		//timer_2();
		setInterval("timer_2()",16000);
	}
}

function sign(){
	timer();
	setInterval("timer()",4000);
	
	timer_3();
	setInterval("timer_3()",1000);
}
function timer(){
	setTimeout('document.getElementById("sign").innerHTML = "Abraham Livinus Chidozie";',0)
	setTimeout('document.getElementById("sign").innerHTML = "";',2000)
	setTimeout('document.getElementById("sign").innerHTML = "Abraham Livinus Chidozie";',4000)
	
}

function timer_2(){
	var input = document.getElementById("td_result").innerHTML;
	if(input == ''){
		document.getElementById("result").innerHTML = "No Calculation Done...";
		setTimeout('document.getElementById("result").innerHTML = "2";',5000)
		setTimeout('document.getElementById("result").innerHTML = "20";',6000)
		setTimeout('document.getElementById("result").innerHTML = "200";',7000)
		setTimeout('document.getElementById("result").innerHTML = "2000";',8000)
		setTimeout('document.getElementById("result").innerHTML = "2000 +";',9000)
		setTimeout('document.getElementById("result").innerHTML = "2000 + 5";',10000)
		setTimeout('document.getElementById("result").innerHTML = "2000 + 50";',11000)
		setTimeout('document.getElementById("result").innerHTML = "2000 + 500";',12000)
		setTimeout('document.getElementById("result").innerHTML = "2000 + 5000";',13000)
		setTimeout('document.getElementById("result").innerHTML = "2000 + 5000 =";',14000)
		setTimeout('document.getElementById("result").innerHTML = "2000 + 5000 = 7,000";',15000)
	}
}

function timer_3(){
	var input = document.getElementById("td_result").innerHTML;
	if(input == ""){
		document.getElementById("online").style = 'font-size:50px; color:red;';
		setTimeout('document.getElementById("online").innerHTML = "...";',0)
		setTimeout('document.getElementById("online").innerHTML = "";',500)
		setTimeout('document.getElementById("online").innerHTML = "...";',1000)
	}else{
		document.getElementById("online").style = 'font-size:20px; color:green;';
		setTimeout('document.getElementById("online").innerHTML = "Calculating ...";',0)
		setTimeout('document.getElementById("online").innerHTML = "";',500)
		setTimeout('document.getElementById("online").innerHTML = "Calculating ...";',1000)
	}
	
}