var HomeView = function HomeView(container,model) {
	this.container = container[0]; //converts jQuery object to Javascript object. "container" is used by StateController to show or hide views
	
	this.createDinnerBtn = container.find("#createDinnerBtn");
}