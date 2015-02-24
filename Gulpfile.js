'use strict';

var os           = require("os");
var gulp         = require('gulp');
var gutil        = require("gulp-util");
var jshint       = require('gulp-jshint');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
var notify       = require('gulp-notify');
var header       = require('gulp-header');
var pkg          = require('./package.json');
var dateFormat   = require('dateformatter').format;

pkg.name         = "jQuery.flowchart.js";
pkg.today        = dateFormat;

var headerComment = ["/*", 
					" * <%= pkg.name %>",
					" * @file        <%= fileName(file) %> ",
					" * @version     v<%= pkg.version %> ",
					" * @description <%= pkg.description %>",
					" * @license     MIT License",
					" * @author      <%= pkg.author %>",
					" * {@link       <%= pkg.homepage %>}",
					" * @updateTime  <%= pkg.today('Y-m-d') %>",
					" */", 
					"\r\n"].join("\r\n");

var headerMiniComment = "/*! <%= pkg.name %> v<%= pkg.version %> | <%= fileName(file) %> | <%= pkg.description %> | MIT License | By: <%= pkg.author %> | <%= pkg.homepage %> | <%=pkg.today('Y-m-d') %> */\r\n";

gulp.task('js', function() {
  return gulp.src('src/jquery.flowchart.js')
            .pipe(jshint('./.jshintrc'))
            .pipe(jshint.reporter('default'))
            .pipe(header(headerComment, {pkg : pkg, fileName : function(file) { 
                var name = file.path.split(file.base);
                return name[1].replace(/[\\\/]?/, '');
            }}))
            .pipe(gulp.dest('dist'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist'))
            .pipe(header(headerMiniComment, {pkg : pkg, fileName : function(file) {
                var name = file.path.split(file.base + ( (os.platform() === "win32") ? "\\" : "/") );
                return name[1].replace(/[\\\/]?/, '');
            }}))
            .pipe(gulp.dest('dist'))
            .pipe(notify({ message: 'js task complete' }));
}); 

gulp.task('watch', function() { 
	gulp.watch('src/jquery.flowchart.js', ['js']);
});

gulp.task('default', function() {
    gulp.run('js');
});