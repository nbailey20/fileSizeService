'use strict';

module.exports = function (app) {
	app.route("/")
		.get(function (req,res) {
			res.sendFile(process.cwd() + "/public/index.html");
		});
		
	app.route("/api")
		.get(function (req,res) {
			res.send("hello there");	
		})
		.post(function (req, res) {
			res.send("hello world");	
		});
};