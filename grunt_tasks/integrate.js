module.exports = {
	integrate : [
		'concat:app',
		'uglify:app',
		'cssmin:app',
		'copy:app',
		'processhtml'
	]
};