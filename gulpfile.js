var gulp        = require("gulp");
// var livereload  = require('gulp-livereload');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

//Directory configuration
//You can add any new path at any part of the array
//folder/*.extension

var directories = ["./*.html", "./js/*.js", "css/*.css"];

// gulp.task('default', [], function() {
//     livereload.listen();
//     gulp.watch(directories, function(){
//         gulp.src(directories).pipe(livereload());
//     });
// });

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'],  function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch(directories).on('change', browserSync.reload);

    // Other watchers
})