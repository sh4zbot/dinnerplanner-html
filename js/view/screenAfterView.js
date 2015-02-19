$(function() {

	var SelectDishView = function (container,model) {

	
	
	//get the Persons input field and set the value from dinnerModel.js
	this.numberOfGuests = container.find("#numberOfGuests");
	var numberOfGuests = this.numberOfGuests[0];
	numberOfGuests.value = model.getNumberOfGuests();
	
	// "Selected dishes" section (My dinner, table on left side of screen)
	this.selectedDishes = container.find("#selectedDishes");
	var selectedDishes = this.selectedDishes[0];
	
	var modelDishes = model.getFullMenu();
	var selectedNames = new Array;
	var selectedPrice = new Array;
	
	$.each(modelDishes, function(index,value) {
		var price = 0;
		selectedNames.push(model.getDish(value)['name']);
		
		//alert(JSON.stringify(model.getDish(value)['ingredients']));
		
		$.each(model.getDish(value)['ingredients'], function(ind,ingredient) {
			price += ingredient['price'];
		});
		
		selectedPrice.push(price);
		
	});

	var selectedTable = document.createElement('table');
	selectedTable.className += 'table table-condensed table-hover';
	
	var selectedRow = new Array;
	var selectedCell = new Array;
	
	for (i = 0; i < selectedNames.length; i++) {
		selectedRow[i] = selectedTable.insertRow(i);
		
		var cell0 = selectedRow[i].insertCell(0);
		var cell1 = selectedRow[i].insertCell(1);
		
		cell0.innerHTML = selectedNames[i];
		cell1.innerHTML = selectedPrice[i];
		
		
	
	}

	selectedDishes.appendChild(selectedTable);
	
	
	//Dishes with thumbnails, names and descriptions
	this.dishList = container.find("#dishList");
	var dishList = this.dishList[0];
	
	var allDishes = model.getAllDishes('main dish');
	var names = new Array;
	var images = new Array;
	var descriptions = new Array;
	
	//get names, images and description
	$.each(allDishes, function(index, dish) {		
		names.push(dish.name);
		images.push(dish.image);
		descriptions.push(dish.description);		
	});
	
	// function to create a unorderdered list with images and bootstrap columns
	
	function makeUL(names, images, descriptions) {
		// Create the list element:
		var list = document.createElement('ul');

		for(var i = 0; i < names.length; i++) {
			// Create the list item:
			var item = document.createElement('li');
			//set bootstrap column class..
			item.className += 'col-md-2';
			
			// add thumbnail class div
			var thumbnail =	document.createElement('div');
			thumbnail.className += 'thumbnail';
				
				//add image to the thumbnail div
				var img = new Image();
				img.src = ('images/' + images[i] );
				thumbnail.appendChild(img);
				
				//add caption class div
				var caption = document.createElement('div');
				caption.className += 'caption';
					
					//add name
					var h4 = document.createElement("h4");
					var text = document.createTextNode(names[i]);
					h4.appendChild(text);
					caption.appendChild(h4);
					
					//add description
					var p = document.createElement("p");
					p.appendChild(document.createTextNode(descriptions[i]));
					caption.appendChild(p);
					
				//add caption to thumbnail
				thumbnail.appendChild(caption);
					
			//add thumbnail to the item
			item.appendChild(thumbnail);
					
			// Add it to the list:
			list.appendChild(item);
		}

		// Finally, return the constructed list:
		return list;
	}
	
	dishList.appendChild(makeUL(names, images, descriptions));
	
	
	}
	
	
	var model = new DinnerModel();
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	
	

});
