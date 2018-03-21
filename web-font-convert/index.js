var Fontmin = require('fontmin');
var ttf2woff2 = require('gulp-ttf2woff2');
var imagemin = require('imagemin');
var svgo = require('imagemin-svgo');

var fontmin = new Fontmin()
    .src('font/PingFang-Light.ttf')
    .dest('build/')
    .use(Fontmin.ttf2eot())
    .use(Fontmin.ttf2woff({
        deflate: true           
    }))
    .use(Fontmin.glyph({
        text: '对woff2的支持'
    }))
    .use(ttf2woff2({clone: true}))
    .use(Fontmin.ttf2svg());

    //压缩svg图片
    imagemin(['build/*.svg'], 'build/compress', {
	    use: [svgo()]
	}).then(() => {
	    console.log('Images optimized');
	});

    fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }

    console.log(files[0]);
    // => { contents: <Buffer 00 01 00 ...> }
});