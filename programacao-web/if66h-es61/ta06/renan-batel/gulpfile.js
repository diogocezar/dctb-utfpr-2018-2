const gulp       = require( "gulp" );
const sourcemaps = require( "gulp-sourcemaps" );
const babel      = require( "gulp-babel" );
const uglify     = require( "gulp-uglify" );
const csso       = require( "gulp-csso" );

const src = {
  js: "./app/src/js/*.js",
  css: "./app/src/css/*.css",
  font: "./app/src/font/*.ttf"
};

gulp.task( "js", () => {
  gulp.src( src.js )
    .pipe( sourcemaps.init() )
    .pipe( babel( {
      presets: [ "@babel/env" ]
    } ) )
    .pipe( uglify() )
    .pipe( sourcemaps.write( '.' ) )
    .pipe( gulp.dest( "./app/dist/js" ) );
} );

gulp.task( "css", () => {
  gulp.src( src.css )
    .pipe( sourcemaps.init() )
    .pipe( csso() )
    .pipe( sourcemaps.write( '.' ) )
    .pipe( gulp.dest( "./app/dist/css" ) );
} );

gulp.task( "font", () => {
  gulp.src( src.font )
    .pipe( gulp.dest( "./app/dist/font" ) );
} );

gulp.task( "build", [ "js", "css", "font" ] );

gulp.task( "watch", () => {
  gulp.watch( src.js, [ "js" ] );
  gulp.watch( src.css, [ "css" ] );
  gulp.watch( src.font, [ "font" ] );
} );