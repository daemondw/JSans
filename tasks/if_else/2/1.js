let a = +prompt('Please, put apartment number', '');

if (a <= 20) {
	document.write('This apartment is in first porch.');
} else if (a > 20 && a < 49) {
	document.write('This apartment is in second porch.');
} else if (a > 48 && a < 91) {
	document.write('This apartment is in third porch.');
} else {
	document.write("There is no apartment with this number in this house!" );
}