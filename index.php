<!-------DOCTYPE html--------->
<html>
	<head>
		<title>calculator</title>
		<link rel="stylesheet" href="style.css" />
		<script type="text/javascript" src="script.js"></script>
		<link rel="icon" href="image/canada.jpg" />
	</head>
	
	<body>
		<div class="cal">
			<div id="cal_ext" class="cal_ext"><marquee>ONLY JESUS CAN SAVE ...</marquee>
				<div class="cal_int"><span id="sign" class='sign'></span>
					<div>
						<div id="td_result" class="td_result"></div>
						<div id="result" class="result"></div>
					</div>
					
					<div>
						<div class="first_row"><a href="#" onclick="calculate(1);">1</a></div>
						<div class="first_row"><a href="#" onclick="calculate(2);">2</a></div>
						<div class="first_row"><a href="#" onclick="calculate(3);">3</a></div>
						<div class="first_row"><a href="#" onclick="calculate('+');">+</a></div>
						<div class="first_row"><a href="#" onclick="calculate('-');">-</a></div>
					</div>
					
					<div>
						<div class="first_row"><a href="#" onclick="calculate(4);">4</a></div>
						<div class="first_row"><a href="#" onclick="calculate(5);">5</a></div>
						<div class="first_row"><a href="#" onclick="calculate(6);">6</a></div>
						<div class="first_row"><a href="#" onclick="calculate('*');">*</a></div>
						<div class="first_row"><a href="#" onclick="calculate('/');">/</a></div>
					</div>
					
					<div>
						<div class="first_row"><a href="#" onclick="calculate(7);">7</a></div>
						<div class="first_row"><a href="#" onclick="calculate(8);">8</a></div>
						<div class="first_row"><a href="#" onclick="calculate(9);">9</a></div>
						<div class="first_row"><a href="#" onclick="calculate(,);">,</a></div>
						<div class="first_row"><a href="#" onclick="calculate('.');">.</a></div>
					</div>
					
					<div>
						<div class="first_row"><a href="#" onclick="calculate('0');">0</a></div>
						<div class="first_row"><a href="#" onclick="calculate('%');">%</a></div>
						<div class="first_row"><a href="#" onclick="calculate('^');">^</a></div>
						<div class="first_row"><a href="#" onclick="calculate('(');">(</a></div>
						<div class="first_row"><a href="#" onclick="calculate(')');">)</a></div>
					</div>
					
					<div>
						<div class="first_row"><a href="#" onclick="reset();">on/re/del</a></div>
						<div class="first_row"><a href="#" onclick="del();"><==</a></div>
					</div>
				</div>
				<span id="online" class="online"></span>
			</div>
		</div>
		
		<script type="text/javascript"> sign(); wake(); //calculate(); </script>
	</body>
</html>