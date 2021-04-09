const gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');
    //优化HTML
    function fnHTML(){
        return gulp.src('./src/pages/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./dist/pages'));
    }
    //主页
    function fnCopyIndex(){
        return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
    }
    //优化图片
    function fnImage(){
        return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imgs'));
    }
    //优化CSS
    function fnCSS(){
        return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle:'expended'}))
        .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'))
    }
    //优化JS
    function fnJS(){
        return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'));
    } 
    function fnWatch(){
        gulp.watch('./src/pages/*.html',fnHTML);
        gulp.watch('./src/index.html',fnCopyIndex);
        gulp.watch('./src/sass/*.scss',fnCSS);
        gulp.watch('./src/js/*.js',fnJS);
        gulp.watch('./src/images/*',fnImage);
    }
    //导出
    exports.html = fnHTML;
    exports.copyIndex = fnCopyIndex;
    exports.img = fnImage;
    exports.css = fnCSS;
    exports.js = fnJS;
    exports.default = fnWatch;
