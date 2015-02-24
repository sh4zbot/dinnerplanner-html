//DinnerPreparationView Object constructor
var DinnerOverviewView = function (container,model) {

	//var dishID = 100; // Using dish 100 (meat balls as example). Change here to get another one.	

	model.addObserver(this);

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
	
	this.printButton = container.find("#printBtn"); // Exception with this, only used in the controller
	this.backButton = container.find("#backButton"); // Exception with this, only used in the controller

	

	// Fill static elements with HTML code
	numberOfGuests.html(model.getNumberOfGuests());
	
	//hack to access the this.<html container> from inside jQuery $.each loops
	var that = this;
	
	this.update = function (obj) {
		that.numberOfGuests.html(model.getNumberOfGuests());
		that.totalPrice.html(model.getTotalMenuPrice() + ".00 SEK");
		selectedDishes = model.getFullMenu();
		showDishes();
	}
	
	container.find("#starter")[0].innerHTML = "";
	container.find("#maincourse")[0].innerHTML = "";
	container.find("#dessert")[0].innerHTML = "";

	showDishes();
	
	function showDishes() {
		$.each(selectedDishes, function(index, id) {
			var thumbnail_ov = document.createElement('div');
			thumbnail_ov.className = "thumbnail_ov";
				var thumbnail = document.createElement('div');
				thumbnail.className = "thumbnail";
					var img = new Image();
					img.src= ('images/' + model.getDish(selectedDishes[index]).image);
					thumbnail.appendChild(img);
					
					var caption = document.createElement('div');
						var h4 = document.createElement('h4');
						var text = document.createTextNode(model.getDish(selectedDishes[index]).name);
						h4.appendChild(text);
						
						var p = document.createElement('p');
						var price = document.createTextNode(model.getTotalDishPrice(selectedDishes[index]) + ".00 SEK");
						p.appendChild(price)
						
						caption.appendChild(h4);
						caption.appendChild(p);
					thumbnail.appendChild(caption);
				thumbnail_ov.appendChild(thumbnail);
				
			if (index === 'starter') { 
				//clear out previous html in the div
				container.find("#starter")[0].innerHTML = "";
				container.find("#starter")[0].appendChild(thumbnail_ov);
			}
			else if (index === 'main dish') {
			//clear out previous html in the div
				container.find("#maincourse")[0].innerHTML = "";
				container.find("#maincourse")[0].appendChild(thumbnail_ov);
			}
			else if (index === 'dessert') {
			//clear out previous html in the div
				container.find("#dessert")[0].innerHTML = "";
				container.find("#dessert")[0].appendChild(thumbnail_ov);
			}
			
		});
	}

	//price
	this.totalPrice.html(model.getTotalMenuPrice() + ".00 SEK");
}

