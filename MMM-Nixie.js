/* global Module */

/* Magic Mirror
 * Module: MMM-Nixie
 *
 * By Torben Tigges
 * MIT Licensed.
 */

Module.register("MMM-Nixie",{

	// Default module config.
	defaults: {
		tubes: true,
		wire: "on", // "on", off", "fine", "heavy"
		inactive: "on", // "on", off", "dimm"
		dimension: false
//		size: "medium" // "small", "medium", "big", "huge"
	},

	getStyles: function() {
		return [
			this.file("nixie.css")
		]
	},

	getScripts: function() {
		return [
			'https://code.jquery.com/jquery-2.2.3.min.js',
		]
	},

	start: function() {
		Log.info("Starting module: " + this.name);
		var self = this;
		setInterval(function() {
			self.nixieClock();
		}, 1000);
	},

	getDom: function() {
		var tubes = ["hh","h","mm","m","ss","s"];

		var nixie = document.createElement("div");
		nixie.setAttribute("id", "nixie");
		if (this.config.dimension) {
			nixie.classList.add("dimension");
		}
		if (this.config.inactive === "on"){
			nixie.classList.add("in");
		}
		else if (this.config.inactive === "off"){
			nixie.classList.add("inoff");
		}
		else if (this.config.inactive === "dimm"){
			nixie.classList.add("indimm");
		}

		if (this.config.size === "small") {
			nixie.classList.add("small");
		}
		else if (this.config.size === "medium") {
			nixie.classList.add("medium");
		}
		else if (this.config.size === "big") {
			nixie.classList.add("big");
		}
		else if (this.config.size === "huge") {
			nixie.classList.add("huge");
		}

		for (t = 0; t < tubes.length; t++) {
			var newtube = document.createElement("div");
			newtube.setAttribute("id", tubes[t]);
			newtube.classList.add("digit");
			if (this.config.tubes) {
				newtube.classList.add("tube");
			}
			else {
				newtube.classList.add("notube");
			}

			for (d = 0; d < 10; d++) {
				var newdigit = document.createElement("span");
				newdigit.setAttribute("id", tubes[t] + d);
				newdigit.classList.add(tubes[t]);
				newdigit.classList.add("d" + d);
				newdigit.classList.add("layer");
				newdigit.classList.add("inactive");
				newdigit.innerHTML = d;
				newtube.appendChild(newdigit);
			}
			if (this.config.wire === "on" || this.config.wire === "fine" || this.config.wire === "heavy") {
				if (this.config.wire === "fine") {
					var wires = 1;
				}
				else if (this.config.wire === "heavy") {
					var wires = 3;
				}
				else {
					var wires = 2;
				}
				for (w = 0; w < wires; w++) {
					var wire = document.createElement("span");
					wire.classList.add("wire");
					wire.classList.add("wire" + w);
					newtube.appendChild(wire);
				}
			}
			if (this.config.tubes) {
				for (g = 0; g < 3; g++) {
					var glass = document.createElement("span");
					glass.classList.add("glass");
					glass.classList.add("glass" + g);
					newtube.appendChild(glass);
				}
			}
			nixie.appendChild(newtube);
		}
		return nixie;
	},

	nixieClock: function() {
		var now = new Date();
	    for (c = 0; c <= 9; c++) {
	    		$(".layer").removeClass("active").addClass("inactive");
	    }
	    var h = ("0" + now.getHours()).slice(-2);
	    var m = ("0" + now.getMinutes()).slice(-2);
	    var s = ("0" + now.getSeconds()).slice(-2);
	//  console.log(h[0] + h[1] + ":" + m[0] + m[1] + ":" + s[0] + s[1]);
	    $("#hh"+h[0]).removeClass("inactive").addClass("active");
	    $("#h"+h[1]).removeClass("inactive").addClass("active");
	    $("#mm"+m[0]).removeClass("inactive").addClass("active");
	    $("#m"+m[1]).removeClass("inactive").addClass("active");
	    $("#ss"+s[0]).removeClass("inactive").addClass("active");
	    $("#s"+s[1]).removeClass("inactive").addClass("active");
	}

});
