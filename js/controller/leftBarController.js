var LeftBarController = function(view, model, stateController) {
 
	view.inputNumber.click(function () { 
		model.setNumberOfGuests(view.inputNumber.val());
	});

	view.inputNumber.keypress(function (e) {
    	if (e.which == 13) {
    		model.setDishType($(this).text());	
    	}
    });



/* view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });*/
}