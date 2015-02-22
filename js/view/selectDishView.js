// This outside commented stuff was used before everything was in
// one single html file, keep it here for now if we want to change it back..
//$(function() {

var SelectDishView = function (container,model) {
	
	this.container = container[0]; //converts jQuery object to Javascript object. "container" is used by StateController to show or hide views

	model.addObserver(this);


	this.update = function (obj) {
		//call "bigger" functions that build the view. We may have to embed some code into new functions to call here (see loadShapes() in the drawing example)
		numberOfGuests.value = model.getNumberOfGuests();
		//alert(model.getNumberOfGuests());	
	}

	/*//get the Persons input field and set the value from dinnerModel.js
	this.numberOfGuests = container.find("#numberOfGuests");
	var numberOfGuests = this.numberOfGuests[0];
	numberOfGuests.value = model.getNumberOfGuests();*/
	
		
	//Dishes with thumbnails, names and descriptions
	this.dishList = container.find("#dishList");
	var dishList = this.dishList[0];
	
	var allDishes = model.getAllDishes('main dish');
	var ids = new Array; // Added to implement IDs in divs (used in click event)
	var names = new Array;
	var images = new Array;
	var descriptions = new Array;
	
	//get ids, names, images and description
	$.each(allDishes, function(index, dish) {		
		ids.push(dish.id);
		names.push(dish.name);
		images.push(dish.image);
		descriptions.push(dish.description);		
	});
	
	// function to create a unorderdered list with images and bootstrap columns
	function makeUL(ids, names, images, descriptions) {
		// Create the list element:
		var list = document.createElement('ul');
		list.id = 'new_list';

		for(var i = 0; i < names.length; i++) {
			// Create the list item:
			var item = document.createElement('li');
			//set bootstrap column class..
			item.className += 'col-md-2';
			item.id = ids[i];
			
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
	
	dishList.appendChild(makeUL(ids, names, images, descriptions));
	
	
	}
	
/*
	var model = new DinnerModel();
	var selectDishView = new SelectDishView($("#screen2"), model);
	
	

});
*/