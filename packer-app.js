'use strict';
var fs = require('fs');
module.exports = function (grunt) {
	require("corpapp-grunt")(grunt, __dirname);

	grunt.registerTask("copy:app", function(){
		var bower = grunt.file.readJSON("bower.json");

		// Loop over the bower components and copy folders
		Object.keys(bower.dependencies).forEach(function(key) {
			
			var cwd = 'bower_components/' + key;

			var folders = [
				'dist/views',
				'dist/images',
				'dist/fonts'
			]

			folders.forEach(function(folder) {
				grunt.file.expand({cwd : cwd}, folder + '/**').forEach(function(path) {
					console.log("Path", path);
					if(grunt.file.isFile(cwd + "/" + path)){
						grunt.file.copy(cwd + "/" + path, path);
					}
				});
			});
		});
	})
};