define(["../common"], function(common) {


	var page1 = {}
	page1.controller = function() {
		// this.style = require("./page1.useable.css");
		// this.style.use();
		this.greeting = "Hello world";
		this.onunload = function(e) {
    	    // this.style.unuse();
	    };
	}
	page1.view = function(ctrl) {
		return [
			m("h1", ctrl.greeting),
			common.links()
		]
	}

	return page1
});
