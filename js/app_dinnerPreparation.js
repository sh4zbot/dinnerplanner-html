$(function() {
	//We instantiate our model
	console.info("Alou_testando_app");
	var model = new DinnerPreparationModel();
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"), model);
	//var dishView = new DishDetailView($( "#dishView" ).load( "screen3-lasagne.html #dishdetailView" ), model);		
});