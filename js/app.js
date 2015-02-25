$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	viewsArray = new Object();
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//var exampleView = new ExampleView($("#exampleView"), model)
	var homeView  				= new HomeView($('#homeView'), model);
	var leftBarView 			= new LeftBarView($("#leftBarView"), model);
	var selectDishView 			= new SelectDishView($("#selectDishView"), model);
	var lasagneView 			= new LasagneView($("#lasagneView"), model);
	var dinnerOverviewView 		= new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPreparationView 	= new DinnerPreparationView($("#dinnerPreparationView"), model);

	// Adds all views to the array to be used by the StateController (there might be a clever way of loading them to the array)
	viewsArray.homeView = homeView;
	viewsArray.leftBarView = leftBarView;
	viewsArray.selectDishView = selectDishView;
	viewsArray.lasagneView = lasagneView;
	viewsArray.dinnerOverviewView = dinnerOverviewView;
	viewsArray.dinnerPreparationView = dinnerPreparationView;

	// Teste (TODO) Adds property state for each view in order to be used by StateController
/*	$.each(viewsArray, function(index,view) {
			view.setState(false);
	});

	$.each(viewsArray, function(index,view) {
			console.log(view.getState);
	});*/
	
	// stateController switches between views
	var stateController 			= new StateController(viewsArray);
	
	// Each view has a controller. Each controller receives the respec. view, model and stateController obj.
	var homeController 				= new HomeController(homeView, model, stateController);
	var leftBarController 			= new LeftBarController(leftBarView, model, stateController);
	var selectDishController 		= new SelectDishController(selectDishView, model, stateController);
	var lasagneController 			= new LasagneController(lasagneView, model, stateController);
	var dinnerOverviewController 	= new DinnerOverviewController(dinnerOverviewView, model, stateController);
	var dinnerPreparationController = new DinnerPreparationController(dinnerPreparationView, model, stateController);
	
});