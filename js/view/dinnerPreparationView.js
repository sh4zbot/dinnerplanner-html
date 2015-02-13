//DinnerPreparationView Object constructor
var DinnerPreparationView = function (container,model) {

var dishID = 100; // Using ingredient 100 (meat balls as example). Change here to get another one.
 
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

// Fill static elements with HTML code
 this.numberOfGuests.html(model.getNumberOfGuests());

// >>>> STUCK HERE: HOW TO GET THE ID FROM THE SELECTED DISHES ARRAY AND USE HERE?
// this.starterName.html(model.getDish(selectedDishes['starter']);
// console.log(this.starterName.html(model.getDish(selectedDishes['starter'])));


// this.dishDescription.html(model.getDish(dishID).description);
// this.imgDish.src = model.getDish(dishID).image;
 
 
 // Defines variable-length elements content using model function
 this.ingredientsList = model.getDish(dishID).ingredients;
 
 /* DEBUG // Separate the components of the ingredients list
 for(key1 in this.ingredientsList){
	for(key2 in this.ingredientsList[key1]) {
		console.log(this.ingredientsList[key1][key2]);	
	}
	//console.log(this.ingredientsList[key]);
 }*/


 console.info("Alou_testando_view");
}

