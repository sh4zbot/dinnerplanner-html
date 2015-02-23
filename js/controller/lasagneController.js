var LasagneController = function(view, model, stateController) {

	view.backButton.click(function () { 
		stateController.changeToView(2); //Change to selectDishView
	});

	view.confirmDishBtn.click(function () { 
		model.addDishToMenu(model.getChosenDish());
		$.each(model.getFullMenu(), function(index, dish) {		
			console.log("printing dishs in the menu: " + dish);
		});
	});	

}