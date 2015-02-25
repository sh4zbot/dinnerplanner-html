var LeftBarController = function(view, model, stateController) {
 
	view.inputNumber.click(function () { 
		model.setNumberOfGuests(view.inputNumber.val());
	});

	view.inputNumber.keypress(function (e) {
    	if (e.which == 13) {
    		model.setNumberOfGuests(view.inputNumber.val());
    	}
    });

    view.confirmDinnerBtn.click(function () { 
		stateController.changeToView(4);
	});
}