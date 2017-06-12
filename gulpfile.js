'use strict';
let gulp = require('gulp');//引入gulp
let $ = require('gulp-load-plugins')();
const babel=require('gulp-babel');

gulp.task('css', ()=>{
  // 编译css
  var sass = require('gulp-ruby-sass');
  var concat = require('gulp-concat');
   sass(['src/**/index.scss'],{
      style: 'expanded',
      precision: 10
      })
  .pipe(gulp.dest('src/'))
  .pipe(gulp.dest('demo/'));
});

// gulp.task('js',()=>{
//   return gulp.src('src/**/*.js')
//        .pipe(babel())
//        .pipe(gulp.dest("demo/"));
// })

gulp.task('html',()=>{
  return gulp.src('src/**/index.html')
    .pipe(gulp.dest('demo/'));
})


gulp.task('default',["css","html"],function(){
  gulp.watch(['src/**/index.scss','src/**/index.html'],['css','html']);
});

