module.exports = {
  concat: {
    app: {
      files: {
        'dist/app.js': [
          'src/app/*.js',
          'src/app/**/*.js',
          'bower_components/**/dist/module.js'
        ],
        'dist/app.css' : [
          'src/css/*.css',
          'bower_components/**/dist/module.css'
        ]
      }
    }
  }
};