define(["../common"], function(common) {

  var page2 = {}
  page2.controller = function() {
  	this.greeting = "Hi from page 2"
  }
  page2.view = function(ctrl) {
  	return [
  		m("h1", ctrl.greeting),
      common.links()
  	]
  }

  return page2
})