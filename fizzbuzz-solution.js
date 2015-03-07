$(document).ready(function() {
	var number = prompt('Please enter a number');
	var number = +"number";
	if((number != 'number') || (number % 1 != 0)) {
		alert("Oops, that's not a number! Please try again.");
		var number = prompt('Please enter a number');
	}

	else {

	function fizzbuzz(number) {
		for (var i = 0; i <= number; i++) {
			if ((i % 3 === 0) && (i % 5 === 0)) {
				console.log('fizzbuzz');
			}
			else if ((i % 3 === 0) && (i % 5 != 0)) {
				console.log('fizz');
			}
			else if ((i % 5 === 0) && (i % 3 != 0)) {
				console.log('buzz');
			}
			else {
				console.log(i);
			}
		}		
	}

	}

	fizzbuzz(number);

});

