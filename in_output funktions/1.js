function out() {
	var p;
	p = document.getElementById('out');
//	p.innerHTML += ' <b>Hello</b>';
//    p.insertAdjacentHTML('beforeBegin', ' Hi eweryone!!');
//    p.insertAdjacentHTML('afterBegin', ' Hi eweryone!! ');
//    p.insertAdjacentHTML('beforeEnd', ' Hi eweryone!!');
    p.outerHTML = '<div class="one">hello</div>';
}