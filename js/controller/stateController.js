/*
	Testing some controlling stuff to hide / show different screens.
	This is not exactly how it should be done just a test.

*/

$(function() {

	document.getElementById('createDinnerBtn').addEventListener('click',function(e){
		swap('screen1','screen2');
	});
	document.getElementById('confirmDinnerBtn').addEventListener('click',function(e){
		swap('screen2','screen1');
	});
	

	function swap(one, two) {
    document.getElementById(one).style.display = 'none';
    document.getElementById(two).style.display = 'block';
	}

});