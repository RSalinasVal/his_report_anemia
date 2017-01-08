var gulp = require('gulp');
var ts = require('gulp-typescript');
var gutil = require('gulp-util');
var tsProject = ts.createProject('tsconfig.json');
var config = require('./gulp.config')();

gulp.task('Compilar', function() {
    var sourceTsFiles = [config.allTs, config.typings];
    var tsResult = gulp
        .src(sourceTsFiles) // load all files from our pathspecification
        //  .pipe(ts(tsProject)); // transpile the files into .js
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(config.tsOutPath));
});

gulp.task('CopiarMap', function() {
    var sourceTsFiles = [config.allTs, config.typings];

    var tsResult = gulp
        .src(sourceTsFiles) // load all files from our pathspecification
        .pipe(ts(tsProject)); // transpile the files into .js

    return tsResult.js.pipe(gulp.dest(config.tsOutPath));
});

gulp.task("CopiarLibs", function() {
    return gulp.src([
            "node_modules/@angular/common/**/*",
            "node_modules/@angular/compiler/**/*",
            "node_modules/@angular/core/**/*",
            "node_modules/@angular/forms/**/*",
            "node_modules/@angular/http/**/*",
            "node_modules/@angular/platform-browser/**/*",
            "node_modules/@angular/platform-browser-dynamic/**/*",
            "node_modules/@angular/router/**/*",
            "node_modules/@angular/router-deprecated/**/*",
            "node_modules/@angular/upgrade/**/*",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/systemjs/dist/system-polyfills.js",
            "node_modules/rxjs/**/*",
            "node_modules/core-js/client/shim.min.js",
            "node_modules/zone.js/dist/zone.js",
            "node_modules/reflect-metadata/Reflect.js",
            "node_modules/angular2-jwt/angular2-jwt.js",
            "node_modules/angular-in-memory-web-api/**/*"
        ], { base: "node_modules" })
        .pipe(gulp.dest("./../public/lib"));

});

gulp.task('watch', ['Compilar'], function() { // brackets makes sure we run ts and sass once before the watch starts

    gulp.watch(config.allTs, ['Compilar']); // run the ts-task any time stuff in appJavascript changes
    gutil.log('Esperando cambios!');
});

gulp.task("default", ["watch"]);