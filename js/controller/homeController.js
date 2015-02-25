var HomeController = function(view, model, stateController) {

	view.createDinnerBtn.click(function( event ) {
  		stateController.changeToView(2); // Change to lasagneView	
	});

}