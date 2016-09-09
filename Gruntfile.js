// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    // configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
         'app/assets/dist/js/myjs.min.js': ['node_modules/jquery/dist/jquery.min.js','node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js','app/assets/js/*.js']
        }
      }
    },
    // compile less stylesheets to css -----------------------------------------
    sass: {
      build: {
        files: {
          'app/assets/dist/css/min.css': ['node_modules/bootstrap-sass/assets/stylesheets/bootstrap.scss','app/assets/scss/app.scss']
        }
      }
    }

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
 // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
 // grunt.loadNpmTasks('grunt-contrib-cssmin');
 // grunt.loadNpmTasks('grunt-contrib-watch');
   // Task definition
    grunt.registerTask('compile', ['sass', 'uglify']);//'sass',

};