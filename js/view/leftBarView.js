var LeftBarView = function (container,model) {

	this.container = container[0]; //converts jQuery object to Javascript object. "container" is used by StateController to show or hide views
	
	model.addObserver(this);

	this.update = function (obj) {
		//call "bigger" functions that build the view. We may have to embed some code into new functions to call here (see loadShapes() in the drawing example)
		generateTable();
	}

	this.inputNumber = container.find("#numberOfGuestsInput");
	this.inputNumber[0].value = model.getNumberOfGuests();

	this.confirmDinnerBtn = container.find("#confirmDinnerBtn");


	// "Selected dishes" section (My dinner, table on left side of screen)
	this.selectedDishes = container.find("#selectedDishes");
	var selectedDishes = this.selectedDishes[0];

	generateTable();
	
	function generateTable() {
		var modelDishes = model.getFullMenu();
		var selectedNames = new Array;
		var selectedPrice = new Array;
		
		$.each(modelDishes, function(index,value) {
			//dish id 0 means there's no dish selected
			if (value != 0) {
				var price = 0;
				selectedNames.push(model.getDish(value)['name']);
				
				$.each(model.getDish(value)['ingredients'], function(ind,ingredient) {
					price += ingredient['price'];
				});
				
				price = price * model.getNumberOfGuests();
				selectedPrice.push(price);
			}
			
		});

		var selectedTable = document.createElement('table');
		selectedTable.className += 'table table-condensed table-hover';

		selectedDishes.innerHTML = ""; // Clears content before generating a new one
		
		var firstRow = selectedTable.insertRow(0);
		var firstCell = firstRow.insertCell(0);
		var secondCell = firstRow.insertCell(1);
		
		firstCell.innerHTML = "Dish Name";
		secondCell.innerHTML = "Cost";
		
		if (selectedNames.length == 0) {
			var pendingRow = selectedTable.insertRow(-1);
			var pendingCell1 = pendingRow.insertCell(-1);
			var pendingCell2 = pendingRow.insertCell(-1);
			
			pendingCell1.innerHTML = "Pending";
			pendingCell2.innerHTML = "0.00";
		}
		
		var selectedRow = new Array;
		var selectedCell = new Array;
		
		for (i = 1; i <= selectedNames.length; i++) {
			selectedRow[i] = selectedTable.insertRow(i);
			
			var cell0 = selectedRow[i].insertCell(0);
			var cell1 = selectedRow[i].insertCell(1);
			
			cell0.innerHTML = selectedNames[i-1] ;
			cell1.innerHTML = selectedPrice[i-1];
		}
		
		//add total price
		var totPriceRow = selectedTable.insertRow(-1);
		totPriceRow.insertCell(-1);
		totPriceRow.insertCell(-1).innerHTML = (model.getTotalMenuPrice() + " SEK" );

		selectedDishes.appendChild(selectedTable);	
	}


}