var gulp = require('gulp');
var Minimize = require('gulp-minimize');
var rename = require('gulp-rename');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('minimize', function() {
        gulp.src('./src/**/*.+(js|html|css)')
        .pipe(Minimize({
        }))
        .pipe(gulp.dest('./minimize/'));
});



var build = require('gulp-build');

var options = {
  helpers: [{
    name: 'addition',
    fn: function(a, b) { return a + b; }
  }]
};

gulp.task('build', function() {
  gulp.src('src/*.html')
      .pipe(build({ title: 'Some page' }, options))
      .pipe(gulp.dest('./build/dist'))
});
