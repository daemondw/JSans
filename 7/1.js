function f1 (argument) {
	var n, p;
	n = document.getElementById('num1').value;
	p = document.getElementById('out');

	n = parseInt(n);
	if (n==100){
		p.innerHTML = 'Number = 100';
	} else if (n<100) {
		p.innerHTML = 'N < 100';
		
	} else {
		p.innerHTML = 'N > 100';
	}

}