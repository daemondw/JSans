let a = +prompt('put your first number', '');
let b = +prompt('put your second number', '');

if (a > b) {
	document.write(a);
} else if (a < b) {
	document.write(b);
} else if (a == b) {
	document.write('a and b are equal');
} else {
	document.write("You didn't put the number");
}