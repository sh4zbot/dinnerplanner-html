var DinnerOverviewController = function(view, model, stateController) {

	/*view.inputNumber.click(function () { 
		model.setNumberOfGuests(view.inputNumber.val());
		console.log(model.getNumberOfGuests());
	});*/
	
	view.backButton.click(function () { 
		stateController.changeToView(2); //Change to selectDishView
	});
	
	view.printButton.click(function () { 
		stateController.changeToView(5); //Change to selectDishView
	});

}