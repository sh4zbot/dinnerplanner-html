//DinnerPreparationView Object constructor
var DinnerPreparationView = function (container,model) {

	//var dishID = 100; // Using dish 100 (meat balls as example). Change here to get another one.

	
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
		selectedDishes = model.getFullMenu();
		showPrepDishes();
	}
	
	container.find("#starter")[0].innerHTML = "";
	container.find("#maincourse")[0].innerHTML = "";
	container.find("#dessert")[0].innerHTML = "";

	showPrepDishes();
	
	function showPrepDishes() {
		$.each(selectedDishes, function(index, id) {
		
			var column1 = document.createElement('div');
				column1.className = "col-md-2";
				var img = new Image();
				img.className = "img-rounded"
				img.src= ('images/' + model.getDish(selectedDishes[index]).image);
				column1.appendChild(img);
				
			var column2 = document.createElement('div');
				column2.className = "col-md-4";
				var h3 = document.createElement('h3');
				var text = document.createTextNode(model.getDish(selectedDishes[index]).name);
				h3.appendChild(text);
				
				var p = document.createElement('p');
				var description = document.createTextNode(model.getDish(selectedDishes[index]).description);
				p.appendChild(description)
				
				column2.appendChild(h3);
				column2.appendChild(p);
			
			var column3 = document.createElement('div');
				column3.className = "col-md-6";
				var h3 = document.createElement('h3');
				var text = document.createTextNode("PREPARATION");
				h3.appendChild(text);
			
				var p = document.createElement('p');
				var description = document.createTextNode(model.getDish(selectedDishes[index]).description);
				p.appendChild(description);
				
				column3.appendChild(h3);
				column3.appendChild(p);
				
			
				
			if (index === 'starter') { 
				//clear out previous html in the div
				container.find("#starter")[0].innerHTML = "";
				container.find("#starter")[0].appendChild(column1);
				container.find("#starter")[0].appendChild(column2);
				container.find("#starter")[0].appendChild(column3);
			}
			else if (index === 'main dish') {
			//clear out previous html in the div
				container.find("#maincourse")[0].innerHTML = "";
				container.find("#maincourse")[0].appendChild(column1);
				container.find("#maincourse")[0].appendChild(column2);
				container.find("#maincourse")[0].appendChild(column3);
			}
			else if (index === 'dessert') {
			//clear out previous html in the div
				container.find("#dessert")[0].innerHTML = "";
				container.find("#dessert")[0].appendChild(column1);
				container.find("#dessert")[0].appendChild(column2);
				container.find("#dessert")[0].appendChild(column3);
			}
			
		});
	}
	
	/*
	
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
	*/
	
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
	//this.ingredientsList = model.getDish(dishID).ingredients;
}

