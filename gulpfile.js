// Modules
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload'),
	imgopt = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber');


// Paths
var imgDir 	= 'img/',
	jsDir 	= 'js/',
	jminDir	= 'min/',
	sassDir	= 'sass/',
	cssDir	= 'css/';


//Uglify
gulp.task('scripts',function(){
	gulp.src(jsDir + '*.js')
	.pipe(plumber())
	.pipe(uglify())
	.on('error', function (err){
		console.error('!!!JS!!!', err.message);})
	.pipe(gulp.dest(jminDir))
    .pipe(livereload());
});


//SASS
gulp.task('styles',function(){
	return sass(sassDir)
	.pipe(plumber())
	.on('error', function (err) {
		console.error('!!!CSS!!!', err.message);})
	.pipe(prefix('last 2 versions'))
    .pipe(gulp.dest(cssDir))
    .pipe(livereload());
});


//Image Optimization
gulp.task('image',function () {
	gulp.src([imgDir + '*', '!**/*.db'])
	.pipe(plumber())
	.pipe(imgopt())
	.pipe(gulp.dest(imgDir))
});


//Markup Stuff
gulp.task('markup',function(){
	gulp.src(['*.html','*.htm'])
	.pipe(livereload());
});


//File Watcher
gulp.task('watch',function(){
	var server = livereload();
	livereload.listen();
	gulp.watch(jsDir + '*.js',['scripts']);
	gulp.watch(sassDir + '*.sass',['styles']);
	gulp.watch(['*.html','*.htm'],['markup']);
	// gulp.watch(imgDir + '*.*',['image']);
});


//DEFAULT
gulp.task('default',[
	'scripts',
	'styles',
	'watch']);

gulp.task('build',[
	'scripts',
	'styles',
	'markup',
	'image']);