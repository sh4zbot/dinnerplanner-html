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

	//used with the ingredients table setup
	ingredientsList = new Array;
	
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
			
			//------------DOUBLE DESCRIPTION SETUP START------------------
			/* 
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
			*/
			//------------DOUBLE DESCRIPTION SETUP END------------------
			
			//------------INGREDIENTS TABLE VERSION START-----------------
			var column3 = document.createElement('div');
				column3.className = "col-md-6";
				var h3 = document.createElement('h3');
				var text = document.createTextNode("Ingredients for " + model.getNumberOfGuests() + " people");
				h3.appendChild(text);
				column3.appendChild(h3);
				
				
				ingredientsList = model.getDish(id).ingredients;
				//var ingredientsTableAreaJS = ingredientsTableArea[0];

				var table = document.createElement('table'); //container.find("#ingredientsTable")[0];
				table.className = "table";
				table.innerHTML = ""; // Very important!! Clear table each time before creating another one.

				var row = new Array;
				var cell = new Array;
				//console.log("ingredientsList length: " + ingredientsList);
				//console.log("column3 html: " + column3);

				for (var i = 0; i < ingredientsList.length; i++) { // Create an empty <tr> element and add it 
					row[i] = table.insertRow(i);
					
					for (var j = 0; j < 4; j++) { // Insert new cells (<td> elements) at the created row <tr> above
						cell[j] = row[i].insertCell(j);
						// Fills cell with content depending on the position (0 to 3) according to sketch 
						console.log(cell[j] + ingredientsList[i]['quantity'] );
						switch(j) {
								case 0:
										cell[j].innerHTML = (ingredientsList[i]['quantity']*model.getNumberOfGuests()).toFixed(1).replace(/[.,]0$/, "") + " " + ingredientsList[i]['unit'];
										break;  // First part of code above makes sure every number has only 1 decimal digit. If the digit is 0 (exact number), it removes the decimal notation.
								case 1:
										cell[j].innerHTML = ingredientsList[i]['name'];
										break;
								case 2:
										cell[j].innerHTML = "SEK";
										break;
								case 3:
										cell[j].innerHTML = (ingredientsList[i]['price']*model.getNumberOfGuests()).toFixed(0);
										break;
								default:
										"error here";
						}
					};
				};

				column3.appendChild(table);
				
			//------------INGREDIENTS TABLE VERSION END-----------------
				
				
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
	function generateIngredientsTable () {
		// Defines variable-length elements content using model function
		ingredientsList = model.getDish(dishID).ingredients;
		var ingredientsTableAreaJS = ingredientsTableArea[0];

		var table = container.find("#ingredientsTable")[0];
		table.innerHTML = ""; // Very important!! Clear table each time before creating another one.

		var row = new Array;
		var cell = new Array;
		console.log("ingredientsList length: " + ingredientsList);
		console.log("ingredientsTableJS html: " + ingredientsTableAreaJS);

		for (var i = 0; i < ingredientsList.length; i++) { // Create an empty <tr> element and add it 
			row[i] = table.insertRow(i);
			
			for (var j = 0; j < 4; j++) { // Insert new cells (<td> elements) at the created row <tr> above
				cell[j] = row[i].insertCell(j);
				// Fills cell with content depending on the position (0 to 3) according to sketch 
				switch(j) {
				    case 0:
				        cell[j].innerHTML = (ingredientsList[i]['quantity']*model.getNumberOfGuests()).toFixed(1).replace(/[.,]0$/, "") + " " + this.ingredientsList[i]['unit'];
				        break;  // First part of code above makes sure every number has only 1 decimal digit. If the digit is 0 (exact number), it removes the decimal notation.
				    case 1:
				        cell[j].innerHTML = ingredientsList[i]['name'];
				        break;
				    case 2:
				        cell[j].innerHTML = "SEK";
				        break;
				    case 3:
				        cell[j].innerHTML = (ingredientsList[i]['price']*model.getNumberOfGuests()).toFixed(0);
				        break;
				    default:
				        "error here";
				}
			};
		};

		ingredientsTableAreaJS.appendChild(table);
	}
	*/
	
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

