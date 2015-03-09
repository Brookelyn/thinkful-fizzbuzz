$(document).ready(function() {
	var number;
	
	function getUserInput() {
		console.log(number);
		number = prompt('Please enter a number');
		console.log(number);
		number = +number;
		console.log(number);
		if(canContinue()) {
			fizzbuzz(number);
		}

		else {
			alert("Oops, that's not a number! Please try again.");
			getUserInput();
		}
	}

	function canContinue() {
		var bool = false;
		if (typeof number == 'number') {
			bool = true;
		}
		else if (number % 1 == 0) {
			bool = true;
		} 
		else if (!isNaN(number)) {
			bool = true;
		}
		return bool;
	}

	function fizzbuzz(number) {
		var output = '';
		console.log(number);
		for (var i = 0; i <= number; i++) {
			if ((i % 3 === 0) && (i % 5 === 0)) {
				output = 'fizzbuzz';
			}
			else if (i % 3 === 0) {
				output = 'fizz';
			}
			else if (i % 5 === 0) {
				output = 'buzz';
			}
			else {
				output = i;
			}
			console.log(output);
			$('body').append('<p>' + output + '</p>');
		}		
	}
	
	getUserInput();

});

