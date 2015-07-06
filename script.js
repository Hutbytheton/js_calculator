// ########## Warm-up functions ###########
var my_max = function(array) {
	var max = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		};
		return max;
	}
}

var vowel_count = function(string) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		switch(string.charAt(i)) {
			case "a":
				counter += 1;
                break;
			case "e":
				counter += 1;
                break;
			case "i":
				counter += 1;
                break;
			case "o": 
				counter += 1;
                break;
			case "u":
				counter += 1;
                break;
			case "y":
				counter += 1;
                break;
		}
	};
	return counter;
}

var reverse = function(string) {
	var array = string.split("");
	return array.reverse().join("");
}

// ########## Calculator functions ################

// Displays returned values on the display div
var display = function(entry) {
	document.getElementById("display").innerHTML = entry;
}

// Create variables to store numbers and operations
var number = "";
var operation = [];

// Clear stored numbers
var clear = function() {
	number = "";
}

// Return current number as integer
var getNum = function() {
	num = parseInt(number);
	return num;
}

// Store and display selected digit
var addDigit = function(digit) {
	number += digit;
	display(getNum());
}

// Operations
var add = function(num1, num2) {
	return num1 + num2;
}

var multiply = function(num1, num2) {
	return num1 * num2;
}

var divide = function(num1, num2) {
	return num1 / num2;
}

var subtract = function(num1, num2) {
	return num1 - num2;
}

// Store current number as a new operation. Clears out used number.
var createOperation = function(op) {
	operation = [];
	operation = [op, getNum()];
	clear();
}

// Evaluate current operation and next number and store result as current number. Return current number if no operation exists
var equals = function() {
	num2 = getNum();
	if (operation !== []) {
		clear();
		switch(operation[0]) {
			case add:
				return add(operation[1], num2);
				break;
			case subtract:
				return subtract(operation[1], num2);
				break;
			case multiply:
				return multiply(operation[1], num2);
				break;
			case divide:
				return divide(operation[1], num2);
				break;
		}
	} else {
			return num2;
	}
}

// Display result of evaluation and store in number
var displayEquals = function() {
	var result = equals();
	number = result.toString();
	display(parseInt(result));
}

// Display 0 when number explicitly cleared
var displayClear = function() {
	clear();
	display(0);
}

