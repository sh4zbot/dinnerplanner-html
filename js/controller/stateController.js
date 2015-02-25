/*
	Testing some controlling stuff to hide / show different screens.
	This is not exactly how it should be done just a test.

*/

var StateController = function(views) {

	// (SCREEN CHANGES USING SWAP)
	// document.getElementById('createDinnerBtn').addEventListener('click',function(e){
	// 	swap('screen1','screen2');
	// });
	// document.getElementById('confirmDinnerBtn').addEventListener('click',function(e){
	// 	swap('screen2','screen3');
	// });
	// document.getElementById('confirmDinnerBtn2').addEventListener('click',function(e){
	// 	swap('screen3','dinnerOverviewView');
	// });
	// document.getElementById('backBtn1').addEventListener('click',function(e){
	// 	swap('dinnerOverviewView','dinnerPreparationView');
	// });
	// document.getElementById('backBtn2').addEventListener('click',function(e){
	// 	swap('dinnerPreparationView','screen1');
	// });

/*
	REFERENCE FOR viewsArray:
	0 = homeView
	1 = leftBarView
	2 = selectDishView
	3 = lasagneView
	4 = dinnerOverviewView
	5 = dinnerPreparationView

	*** Think about a more reliable/elegant way to do this screen control
*/
/*
	document.getElementById('createDinnerBtn').addEventListener('click',function(e){
		hideAll(); 
		//show(views.leftBarView); // it's the same as below
		show(views[Object.keys(views)[1]]); 
		show(views.selectDishView);
	});
	document.getElementById('confirmDinnerBtn').addEventListener('click',function(e){
	 	hideAll();
	 	show(views.dinnerOverviewView);
	});
*/
	// document.getElementById('confirmDinnerBtn2').addEventListener('click',function(e){
	// 	hide('selectDishView');
	// 	hide('leftBarView');
	// 	show('dinnerOverviewView');
	// });
	// document.getElementById('backBtn1').addEventListener('click',function(e){
	// 	swap('dinnerOverviewView','dinnerPreparationView');
	// });
	// document.getElementById('backBtn2').addEventListener('click',function(e){
	// 	swap('dinnerPreparationView','screen1');
	// });
	
	$.each(views, function(index, view) {		
		console.log("chuva de views: " + view.constructor.name);
	});	

	this.changeToView = function (screen) {
		hideAll();
		show(views[Object.keys(views)[screen]]); 
		
		if(screen === 2 || screen === 3) {
			show(views.leftBarView);
	}


	}

	function swap(one, two) {
    document.getElementById(one).style.display = 'none';
    document.getElementById(two).style.display = 'block';
	}

	// Functions to show or hide views. It is based on the property "container" which is defined in the first line of each view.
	function show(view, mode) {
		if (typeof(mode)==='undefined') mode = 'block'; //if function is called without second argument, it assumes it's block
		view.container.style.display = mode;
	}

	function hide(view) {
		view.container.style.display = 'none';
	}

	function hideAll() {
		$.each(views, function(index,view) {
			hide(view);
		});
	}
}
