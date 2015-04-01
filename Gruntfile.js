module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'assets/js/main.js' : [ 'assets/_js/scripts.js' ]
        }
      }
    }, // uglify

     sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : 'assets/_sass/style.sass'
        }
      }
    }, // sass

    watch : {
      dist : {
        files : [
          'assets/_js/**/*',
          'assets/_sass/**/*'
        ],

        tasks : [ 'uglify', 'sass' ]
      }
    }, // watch

    rsync: {
	    dist: {
	        options: {
	            src: "./",
	            dest: "../dist"
	        }
	    },
	   
	    prod: {
	        options: {
	            src: "./",
	            dest: "/public_html/grunt",
	            host: "anawo683@anawolf.com.br",
	            delete: true // Careful this option could cause data loss, read the docs! 
	        }
	    }
	} //rsync

  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-browser-sync');
  grunt.loadNpmTasks( 'grunt-rsync' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 
  	'uglify',
  	'sass',
  	] );


   grunt.registerTask( 'build', [ 
  	'uglify',
  	'sass',
  	'rsync:prod'
  ] );

   grunt.registerTask( 'deploy', [ 
  	'uglify',
  	'sass',
  	'rsync:prod'
  ] );

  grunt.registerTask( 'w', [ 'watch' ] );
};