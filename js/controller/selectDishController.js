var SelectDishController = function(view, model ) {
 
 view.inputNumber.click(function () { 
 	model.setNumberOfGuests(view.inputNumber.val());
 	console.log(model.getNumberOfGuests());
 });

/* view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });*/
}