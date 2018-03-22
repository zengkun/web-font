# web-font-convert
convert ttf to eot,convert ttf to woff,and convert ttf to svg

https://github.com/chenfengyanyu/web-font-convert

## 项目构成
- font
	- 需要转换格式的字体文件，如PingFang-Light.ttf
- build
	- 运行index.js之后生成文件
- build/compredd
	- 对svg字体文件进行优化后的输出目录
- node_modules
- index.js
- package.json
- README.md

## What? 不支持woff2
看过来 gulp-ttf2woff2

https://github.com/nfroidure/gulp-ttf2woff2

```sh
npm install --save-dev gulp-ttf2woff2
```

```javascript
var ttf2woff2 = require('gulp-ttf2woff2');

......

.use(ttf2woff2({clone: true}))
```
详细请看index.js吧~

## 也支持指定按需打包文字，同font-spider-demo

```javascript
var staticWord = "对woff2的支持";

......

.use(Fontmin.glyph({
     text: staticWord
 }))
```

## 运行
```sh
npm install
node index.js
```

## 目标
将ttf字体文件转换为woff(woff2)，eot，svg等格式，因为svg转换后文件过大，因此优化后输出到compress目录中。

## 参考引用
- fontmin：
https://github.com/ecomfe/fontmin#ttf2svg
- 字蛛：
http://font-spider.org
- imagemin：
https://github.com/imagemin
- svg图片压缩：
https://github.com/imagemin/imagemin-svgo

## web font终级解决方案
http://jartto.wang/2016/09/04/final-solution-of-the-web-font/