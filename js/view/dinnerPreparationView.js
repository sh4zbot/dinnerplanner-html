//DinnerPreparationView Object constructor
var DinnerPreparationView = function (container,model) {

	var dishID = 100; // Using dish 100 (meat balls as example). Change here to get another one.

	model.addObserver(this);
	
	this.container = container[0]; //converts jQuery object to Javascript object. "container" is used by StateController to show or hide views

	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)

	// Find and bind to a container (static elements, same amount always)
	this.starterName = container.find("#starterName");
	this.starterSummary = container.find("#starterSummary");
	this.starterPreparation = container.find("#starterPreparation");
	this.starterImage = container.find("#starterImage");
	this.mainCourseName = container.find("#mainCourseName");
	this.mainCourseSummary = container.find("#mainCourseSummary");
	this.mainCoursePreparation = container.find("#mainCoursePreparation");
	this.mainCourseImage = container.find("#mainCourseImage");
	this.dessertName = container.find("#dessertName");
	this.dessertSummary = container.find("#dessertSummary");
	this.dessertPreparation = container.find("#dessertPreparation");
	this.dessertImage = container.find("#dessertImage");
	this.numberOfGuests = container.find("#numberOfGuests");

	selectedDishes = model.getFullMenu(); // Gets selectedDishes through a getter!

	this.backButton = container.find("#backButton"); // Exception with this, only used in the controller
	
	// Fill static elements with HTML code
	this.numberOfGuests.html(model.getNumberOfGuests());

	
	//Update by Johan start
	var that = this;
	
	this.update = function (obj) {
		that.numberOfGuests.html(model.getNumberOfGuests());
		showDishes();
	}
	
	
	if ( !('starter' in selectedDishes) ){
		container.find("#starter").html(""); 
	}	
	if ( !('main course' in selectedDishes) ){
		container.find("#maincourse").html(""); 
	}	
	if ( !('dessert' in selectedDishes) ){
		container.find("#dessert").html(""); 
	}	
	

	showDishes();
	
	function showDishes() {
		$.each(selectedDishes, function(index, id) {
		//alert (index);
			if (index === 'starter') {
				that.starterName.html(model.getDish(selectedDishes['starter']).name);
				that.starterPreparation.html(model.getDish(selectedDishes['starter']).description);
				that.starterImage.attr("src", "images/" + model.getDish(selectedDishes['starter']).image); // Changes container (selector) src attribute to corresponding in model.dishes through items in the menu
			}
			else if (index === 'main course' ) {
		
				that.mainCourseName.html(model.getDish(selectedDishes['main course']).name);
				that.mainCoursePreparation.html(model.getDish(selectedDishes['main course']).description);
				that.mainCourseImage.attr("src", "images/" + model.getDish(selectedDishes['main course']).image);
			
			}
			else if (index === 'dessert') {
			
				that.dessertName.html(model.getDish(selectedDishes['dessert']).name);
				that.dessertPreparation.html(model.getDish(selectedDishes['dessert']).description);
				that.dessertImage.attr("src", "images/" + model.getDish(selectedDishes['dessert']).image);
			}
		});
	}
	//Update by johan end
	
	/*
	this.starterName.html(model.getDish(this.selectedDishes['starter']).name);
	this.starterPreparation.html(model.getDish(this.selectedDishes['starter']).description);
	this.starterImage.attr("src", "images/" + model.getDish(this.selectedDishes['starter']).image); // Changes container (selector) src attribute to corresponding in model.dishes through items in the menu

	this.mainCourseName.html(model.getDish(this.selectedDishes['main course']).name);
	this.mainCoursePreparation.html(model.getDish(this.selectedDishes['main course']).description);
	this.mainCourseImage.attr("src", "images/" + model.getDish(this.selectedDishes['main course']).image);

	this.dessertName.html(model.getDish(this.selectedDishes['dessert']).name);
	this.dessertPreparation.html(model.getDish(this.selectedDishes['dessert']).description);
	this.dessertImage.attr("src", "images/" + model.getDish(this.selectedDishes['dessert']).image);
	*/
	
	// Defines variable-length elements content using model function
	this.ingredientsList = model.getDish(dishID).ingredients;
}

