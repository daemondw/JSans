function f1 () {
	var num, prNum, out, tempOut;
	prNum = Math.floor((Math.random() * 10) + 1);
	tempOut = document.getElementById('temp-out');
	tempOut.innerHTML = prNum;

	num = document.getElementById('mynum').value;
	out = document.getElementById('out');

	if (num == prNum) {
		out.innerHTML = 'you Guess';
	} else if (num > prNum) {
		out.innerHTML = 'More than need';
	} else {
		out.innerHTML = 'less than need';
	}



}