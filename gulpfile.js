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
  .pipe(gulp.dest('dist/'));
});

gulp.task('html',()=>{
  return gulp.src('src/**/index.html')
    .pipe(gulp.dest('dist/'));
})


gulp.task('default',["css","html"],function(){
  gulp.watch(['src/**/index.scss','src/**/index.html'],['css','html']);
});

