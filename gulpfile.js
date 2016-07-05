var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:true});
var del = require('del');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tscConfig = require('./tsconfig.json');

var config = require('./gulp.config')(); //execute the function that returns the config values

gulp.task('styles', ['clean-styles'], function(){
    log('Compiling Sass to Css');
    return gulp
        .src(config.sass)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer({browser: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.css));
});
gulp.task('clean-styles', function(){
    var files = config.css + '**/*.css';
    clean(files);
});

// gulp.task('inject', function(){
//     log('injecting js file paths to index.html');
//     return gulp
//         .src(config.index)
//         .pipe($.inject(gulp.src(config.js)))
//         .pipe(gulp.dest('./'));
// });
/////////////////////////////////
function clean(path){
    log('cleaning' + $.util.colors.blue(path));
    del(path);
};

function log(message){
    if (typeof(message) === 'object'){
        for (var item in message){
            if (message.hasOwnProperty(item)){
                $.util.log($.util.colors.blue(message[item]));
            }
        }
    }
    else {
        $.util.log($.util.colors.blue(message));
    }
};
