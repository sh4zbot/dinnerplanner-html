var SelectDishController = function(view, model, stateController) {

	view.dishList.click(function( event ) {
  		//console.log("clicked: " + event.target.nodeName ); // debug
 		var id = $(event.target).closest("li").attr('id');
 		//console.log("ID jQuery  : " + id); // debug
 		model.setChosenDish(id);
 		//console.log("changed chosen dish: " + model.getChosenDish()); // debug
 		
 		stateController.changeToView(3); // Change to lasagneView	
	});

	// Gets the click on the drop-down menu item and passes its text as the new dish type to the model
	view.dropDownBtn.on('click', '.dropdown-menu li a', function () {
    	model.setDishType($(this).text());
    });

}