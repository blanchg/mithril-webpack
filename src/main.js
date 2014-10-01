define( function() {
//module loader helper
var asyncModule = function(name) {
	return {
		controller: function() {
			m.startComputation()

			var pageBundle = require("bundle!./pages/" + name + ".js");
			pageBundle(function(module) {
				this.controller = new module.controller();
				this.view = module.view;
				this.onunload = this.controller.onunload;
				
				m.endComputation()
			}.bind(this));
		},
		view: function(ctrl) {
			return ctrl.view(ctrl.controller)
		}
	}
}

// m.route.mode = "search";
m.route.mode = "pathname";
//routes
m.route(document.body, "/", {
	"/": asyncModule("page1"),
	"/b": asyncModule("page2"),
	"/c": asyncModule("page3")
});
});