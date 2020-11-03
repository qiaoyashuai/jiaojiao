// 本文件的作用是删除uploadws里面没有用到的图片 引入到index.js文件中每次打开页面刷新一次
let lists = require("./product"); //引入product数据库中的lists集合 引入成功product.js");
let fs = require("fs"); //引入fs模块
// lists.find({}).then((data) => {
//     module.exports = data;
//     let arr = [];
//     // for (var i = 0; i < data.length; i++) {
//     //     console.log(data[i].imgsrc);
//     // } //获取到所有的正在使用的图片地址
// });
fs.readdir("../public/uploads", function(err, files) {
    //第一个参数 路径  第二个参数回调函数
    if (err) {
        console.log(err);
    } else {
        // files.forEach(function(filename) {
        //     //获取当前文件的绝对路径
        //     // var filedir = path.join(filePath, filename);
        //     //根据文件路径获取文件信息，返回一个fs.Stats对象
        //     fs.stat(files, function(eror, stats) {
        //         if (eror) {
        //             console.warn("获取文件stats失败");
        //         } else {
        //             var isFile = stats.isFile(); //是文件
        //             var isDir = stats.isDirectory(); //是文件夹
        //             if (isFile) {
        //                 console.log(filedir);
        //             }
        //             if (isDir) {
        //                 fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
        //             }
        //         }
        //     });
        // });
        console.log();
    }
});