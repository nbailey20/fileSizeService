'use strict';

module.exports = function (app) {
	var multer = require("multer");
	var upload = multer({ dest: './api' });
	var fs = require("fs");
	
	app.route("/")
		.get(function (req,res) {
			res.sendFile(process.cwd() + "/public/index.html");
		});
		
	app.route("/api")
		.get(function (req,res) {
			res.send("To access file size, make sure a file is chosen and then click the Submit button, instead of manually pointing your browser here!");	
		})
		.post(upload.single("filename"), function (req, res) {
			var obj = {filename: req.file.originalname, size: req.file.size};
			res.send(JSON.stringify(obj));
			fs.unlink("./api/" + req.file.filename, function (err, succ) {
				if (err) throw err;
			});
		});
};