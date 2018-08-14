var prNum, tempOut;  

prNum = Math.floor((Math.random()*10) + 1);
//tempOut = document.getElementById('temp-out');
//tempOut.innerHTML = prNum;
console.log(prNum);

function f1 () {
	var num, out;// body... 
	
	num = document.getElementById('mynum').value;
	out = document.getElementById('out');

	if (num==prNum) {
		out.innerHTML = 'you catch it!';
	} else if (num>prNum) {
		out.innerHTML = 'More then need';
	} else {
		out.innerHTML = 'less then need';
	}
}