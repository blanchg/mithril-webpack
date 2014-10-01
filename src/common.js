define(function() {
	var mod = {}
	mod.links = function() {
		return m("div", [
				m("a[href='/']", {onclick: function() {m.route('/'); return false;}}, "Go to page 1"),
				m("br"),
				m("a[href='/b']", {onclick: function() {m.route('/b'); return false;}}, "Go to page 2"),
				m("br"),
				m("a[href='/c']", {onclick: function() {m.route('/c'); return false;}}, "Go to page 3")
			]);
	}
	return mod;
});