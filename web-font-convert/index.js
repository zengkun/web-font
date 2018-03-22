// API: http://efe.baidu.com/blog/fontmin-getting-started/

var Fontmin = require('fontmin');
var ttf2woff2 = require('gulp-ttf2woff2');
var imagemin = require('imagemin');
var svgo = require('imagemin-svgo');

// 也支持指定按需打包文字，同font-spider-demo
// var staticWord = "苹方对woff2的支持";

var fontmin = new Fontmin()
    .src('font/PingFang-Light.ttf')
    // .use(Fontmin.glyph({
    //     text: staticWord
    // }))
    .use(Fontmin.ttf2eot())
    .use(Fontmin.ttf2woff({
        deflate: true
    }))
    .use(ttf2woff2({
        clone: true
    }))
    .use(Fontmin.ttf2svg())
    // .use(Fontmin.css()) // css 生成插件
    .dest('build/');

//压缩svg图片
imagemin(['build/*.svg'], 'build/compress', {
    use: [svgo()]
}).then(() => {
    console.log('Images optimized');
});

fontmin.run(function(err, files) {
    if(err) {
        throw err;
    }

    console.log(files[0]);
    // => { contents: <Buffer 00 01 00 ...> }
});