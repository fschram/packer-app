module.exports = {
	connect: {
		app: {
			options: {
				port: 3000,
				base: [
					'bower_components',
					'dist'
				],
				middleware: function(connect, options, middlewares) {

					var fs = require("fs");

					middlewares.unshift(function(req, res, next) {

						if(req.url === "/"){
							fs.readFile("src/index.html", function(err, data){
								if (err) throw err;
								res.end(data);
							});
							return
						} 

						if(fs.existsSync("../" + req.url)) {
							fs.readFile("../" + req.url, function(err, data){
								if (err) throw err;
								res.end(data);
							});
							return
						}
						
						if(req.url.indexOf("views") > 0){
							if(fs.existsSync("../capapp-peoplefinder/dist/" + req.url)) {
								console.log("Dev4: " + req.url);
								fs.readFile("../capapp-peoplefinder/dist/" + req.url, function(err, data){
									if (err) throw err;
									res.end(data);
								});
								return
							}
						}
						
						return next();
					});

					return middlewares;
				}
			}
		}
	}
};
