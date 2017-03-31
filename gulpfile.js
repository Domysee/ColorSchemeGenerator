
var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

/*
Browser Sync
https://github.com/Browsersync/recipes
https://github.com/Browsersync/recipes/tree/master/recipes/gulp.sass
https://anyscreensize.com/blog/gulp-sass-browser-sync-front-end-dev/
*/

gulp.task("default", function () {

});

gulp.task("compile-sass", function () {
    return gulp.src("*.sass")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(""))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task("compile-sass:watch", ["browser-sync"], function () {
    gulp.watch("*.sass", ["compile-sass"]);
});

gulp.task("browser-sync", function () {
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});