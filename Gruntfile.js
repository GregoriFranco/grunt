module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      dist : {
        files : {
          'public/js/main.js' : [ 'public/_js/scripts.js' ]
        }
      }
    }, // uglify

     sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'public/css/style.css' : 'public/_sass/style.sass'
        }
      }
    }, // sass

    watch : {
      dist : {
        files : [
          'public/_js/**/*',
          'public/_sass/**/*'
        ],

        tasks : [ 'uglify', 'sass' ]
      }
    }, // watch

  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 
  	'uglify',
  	'sass',
  ]);

  grunt.registerTask( 'watch', [ 'watch' ] );
};