//DinnerPreparationView Object constructor
var DinnerOverviewView = function (container,model) {

	var dishID = 100; // Using dish 100 (meat balls as example). Change here to get another one.	

	model.addObserver(this);

	this.update = function (obj) {
	}

	this.container = container[0]; //converts jQuery object to Javascript object. "container" is used by StateController to show or hide views

	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)

	// Find and bind to a container (static elements, same amount always)
	this.starterName = container.find("#starterName");
	this.starterSummary = container.find("#starterSummary");
	this.starterPrice = container.find("#starterPrice");
	this.starterImage = container.find("#starterImage");
	this.mainCourseName = container.find("#mainCourseName");
	this.mainCourseSummary = container.find("#mainCourseSummary");
	this.mainCoursePrice = container.find("#mainCoursePrice");
	this.mainCourseImage = container.find("#mainCourseImage");
	this.dessertName = container.find("#dessertName");
	this.dessertSummary = container.find("#dessertSummary");
	this.dessertPrice = container.find("#dessertPrice");
	this.dessertImage = container.find("#dessertImage");
	this.totalPrice = container.find("#totalPrice");
	this.numberOfGuests = container.find("#numberOfGuests");

	var selectedDishes = model.getFullMenu(); // Gets selected Dishes through a getter!


	// Fill static elements with HTML code
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	//hack to access the this.<html container> from inside jQuery $.each loops
	var that = this;
	
	if ( !('starter' in selectedDishes) ){
		container.find("#starter").html(""); 
	}	
	if ( !('main course' in selectedDishes) ){
		container.find("#maincourse").html(""); 
	}	
	if ( !('dessert' in selectedDishes) ){
		container.find("#dessert").html(""); 
	}	
	
	$.each(selectedDishes, function(index, id) {
	//alert (index);
		if (index === 'starter') {
			that.starterName.html(model.getDish(selectedDishes['starter']).name);
			that.starterPrice.html(model.getTotalDishPrice(selectedDishes['starter']) + " SEK");
			that.starterImage.attr("src", "images/" + model.getDish(selectedDishes['starter']).image); // Changes container (selector) src attribute to corresponding in model.dishes through items in the menu
		}
		else if (index === 'main course' ) {
	
			that.mainCourseName.html(model.getDish(selectedDishes['main course']).name);
			that.mainCoursePrice.html(model.getTotalDishPrice(selectedDishes['main course']) + " SEK");
			that.mainCourseImage.attr("src", "images/" + model.getDish(selectedDishes['main course']).image);
		
		}
		else if (index === 'dessert') {
		
			that.dessertName.html(model.getDish(selectedDishes['dessert']).name);
			that.dessertPrice.html(model.getTotalDishPrice(selectedDishes['dessert']) + " SEK");
			that.dessertImage.attr("src", "images/" + model.getDish(selectedDishes['dessert']).image);
		}
	});
	
	/*
	this.starterName.html(model.getDish(this.selectedDishes['starter']).name);
	this.starterPrice.html(model.getTotalDishPrice(this.selectedDishes['starter']) + " SEK");
	this.starterImage.attr("src", "images/" + model.getDish(this.selectedDishes['starter']).image); // Changes container (selector) src attribute to corresponding in model.dishes through items in the menu

	this.mainCourseName.html(model.getDish(this.selectedDishes['main course']).name);
	this.mainCoursePrice.html(model.getTotalDishPrice(this.selectedDishes['main course']) + " SEK");
	this.mainCourseImage.attr("src", "images/" + model.getDish(this.selectedDishes['main course']).image);

	this.dessertName.html(model.getDish(this.selectedDishes['dessert']).name);
	this.dessertPrice.html(model.getTotalDishPrice(this.selectedDishes['dessert']) + " SEK");
	this.dessertImage.attr("src", "images/" + model.getDish(this.selectedDishes['dessert']).image);
	*/
	
	// Defines variable-length elements content using model function
	this.ingredientsList = model.getDish(dishID).ingredients;

	/* DEBUG // Separate the components of the ingredients list
	for(key1 in this.ingredientsList){
	for(key2 in this.ingredientsList[key1]) {
		console.log(this.ingredientsList[key1][key2]);	
	}
	//console.log(this.ingredientsList[key]);
	}*/

	//price
	this.totalPrice.html(model.getTotalMenuPrice() + ".00 SEK");
}

