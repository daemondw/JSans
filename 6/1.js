function out(argument) {
	var p;// body...
	p = document.getElementById('out');
	// p.innerHTML = 'Hello';
	// p.innerHTML += ' <b>Hello</b>';
	// p.insertAdjacentHTML('beforeBegin', 'Hi');
	// p.insertAdjacentHTML('afterBegin', 'Hi');
	// p.insertAdjacentHTML('afterEnd', 'Hi');
	p.outerHTML = '<div class="one">hello</div>';
}