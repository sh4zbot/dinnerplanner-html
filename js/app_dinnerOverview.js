$(function() {
	//We instantiate our model
	console.info("Alou_testando_app");
	var model = new DinnerOverviewModel();
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	//var dishView = new DishDetailView($( "#dishView" ).load( "screen3-lasagne.html #dishdetailView" ), model);		
});