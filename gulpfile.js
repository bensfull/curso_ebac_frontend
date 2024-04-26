const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function comprimeoimagens(){
    return gulp.src('./source/image/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/image'))
}




function comprimeJavascript(){
    return gulp.src('./source/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/script'))
}



function compillaSass(){
    return gulp.src('./source/style/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/style'))
}


exports.default = function(){
    gulp.watch('./source/style*.scss', {ignoreInitial:false}, gulp.series(compillaSass))
    gulp.watch('./source/script/*.js', {ignoreInitial:false}, gulp.series(comprimeJavascript))
    gulp.watch('./source/image/*', {ignoreInitial:false}, gulp.series(comprimeoimagens))
}





