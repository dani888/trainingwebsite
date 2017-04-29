module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.initConfig({
		uglify:{
			my_target:{
				files:{
					'scripts/js/template-script.js':['scripts/components/js/*.js']
				}
			}
		},
		sass:{
	    	dev: {
				options: {
					lineNumbers: true,
					sourcemap: 'none'
				},
	    		files: [{
			        src: ['scripts/components/sass/*.scss'],
			        dest: 'scripts/css/template-script.css',
			        ext: '.css'
      			}]
		    },
		    release: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
	    		files: [{
			        expand: true,
			        flatten: true,
			        src: ['scripts/components/sass/*.scss'],
			        dest: 'scripts/css/',
			        ext: '.css'
      			}]
		    }
		},
		clean: {
		  release: {
			options: {
				force: true
			},
		    src: ['../htdocs']
		  }
		},
		sprite:{
	      all: {
	        src: 'assets/sprites/png/*.png',
	        dest: 'assets/sprites/sprite/spritesheet.png',
	        destCss: 'scripts/components/sass/mixins/_sprites.scss',
	        imgPath: '../../assets/sprites/sprite/spritesheet.png'
	      }
	    },
	    copy: {
			main: {
			    files: [
				    {
				    	expand: true, 
				    	src: [
					    	'index.html',
					    	'scripts/js/**',
					    	'scripts/css/**',
					    	'assets/images/*',
					    	'assets/music/*',
					    	'assets/videos/*',
					    	'assets/documents/*',
					    	'assets/fonts/*',
					    	'assets/sprites/sprite/*',
					    	'assets/misc/*',
					    	'assets/sprites/tiny-arrow.png',
					    	'node_modules/angular/angular.min.js',
					    	'node_modules/angular-css/angular-css.min.js',
					    	'node_modules/angular-route/angular-route.min.js'
					    ], 
					    dest: '../htdocs/'
					}
			    ],
		  	},
		},
		watch:{
			options:{
				livereload:true
			},
			scripts: {
				files:['scripts/components/js/*.js'],
				tasks: ['uglify']
			},
			sass:{
				files:['scripts/components/sass/*.scss','scripts/components/sass/partials/*.scss','scripts/components/sass/mixins/*.scss'],
				tasks: ['sass:dev']
			},
			html:{
				files:['*.html']
			}
		}
	}) 
	grunt.registerTask('default','watch');
	grunt.registerTask('release',['clean','uglify','sass:release','copy']);
}