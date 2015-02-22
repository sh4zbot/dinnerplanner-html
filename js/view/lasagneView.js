//DishdetailView Object constructor
var LasagneView = function (container,model) {

	// Important change: 
	// In order to create the function fillStaticElements to be used in the update function,
	// it was necessary to remove "this" from the elements. Otherwise, "this" inside the
	// function would refer to its scope and generate conflict. TODO that in the other views.

	var dishID = model.getChosenDish(); 
 	
 	this.container = container[0]; //converts jQuery object to Javascript object. "container" is used by StateController to show or hide views

	model.addObserver(this);
	this.update = function (obj) {
		//call "bigger" functions that build the view. We may have to embed some code into new functions to call here (see loadShapes() in 
		//the drawing example)
		dishID = model.getChosenDish();
		console.log("Dish changed to: " + dishID);
		fillStaticElements();
		generateIngredientsTable();
		//alert(model.getNumberOfGuests());	
	}
 
	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)

	// Find and bind to a container (static elements, same amount always)
	dishName = container.find("#dishName");
	dishDescription = container.find("#dishDescription");
	numberOfGuests = container.find("#numberOfGuests");
	imgDish = container.find("#imgDish");
	this.backButton = container.find("#backButton"); // Exception with this, only used in the controller

	// Fields of variable size
	ingredientsList = new Array;
	ingredientsTable = container.find("#ingredientsTable");

	// Fill static elements with HTML code
	function fillStaticElements () {
		numberOfGuests.html(model.getNumberOfGuests());
		dishName.html(model.getDish(dishID).name);
		dishDescription.html(model.getDish(dishID).description);
		imgDish.attr("src", "images/" + model.getDish(dishID).image); // Changes container (selector) src attribute to corresponding in 
	}																		// model.dishes through items in the menu

	// Generate ingredients table
	function generateIngredientsTable () {
		// Defines variable-length elements content using model function
		ingredientsList = model.getDish(dishID).ingredients;
		var ingredientsTableJS = ingredientsTable[0];

		var table = document.createElement('table');
		table.className += 'table';

		var row = new Array;
		var cell = new Array;
		
		for (var i = 0; i < ingredientsList.length; i++) { // Create an empty <tr> element and add it 
			row[i] = table.insertRow(i);
			
			for (var j = 0; j < 4; j++) { // Insert new cells (<td> elements) at the created row <tr> above
				cell[j] = row[i].insertCell(j);
				// Fills cell with content depending on the position (0 to 3) according to sketch 
				switch(j) {
				    case 0:
				        cell[j].innerHTML = ingredientsList[i]['quantity'] + " " + this.ingredientsList[i]['unit'];
				        break;
				    case 1:
				        cell[j].innerHTML = ingredientsList[i]['name'];
				        break;
				    case 2:
				        cell[j].innerHTML = "SEK";
				        break;
				    case 3:
				        cell[j].innerHTML = ingredientsList[i]['price'];
				        break;
				    default:
				        "error here";
				}
			};
		};

		ingredientsTableJS.appendChild(table);
	}

	//get the Persons input field and set the value from dinnerModel.js
/*	this.numberOfGuests = container.find("#numberOfGuests");
	var numberOfGuests = this.numberOfGuests[0];
	numberOfGuests.value = model.getNumberOfGuests();*/	
}
