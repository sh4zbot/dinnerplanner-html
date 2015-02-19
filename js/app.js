$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//var exampleView = new ExampleView($("#exampleView"), model);

	//var dishdetailView = new DishDetailView($( "#dishView" ).load( "screen3-lasagne.html #dishdetailView" );, model);
	
	var selectDishView = new SelectDishView($("#screen2"), model);
	var lasagneView = new LasagneView($("#screen3"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"), model);
	
});