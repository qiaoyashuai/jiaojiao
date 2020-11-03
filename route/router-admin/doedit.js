let lists = require("../../db-model/product"); //引入product数据库中的lists集合 引入成功
let formidable = require("formidable"); //引入第三方模块来解析表单中提价的文件数据
// console.log(formidable);
let path = require("path"); //node中内置模块 不需要下载
module.exports = (req, res) => {
    // console.log(req.query);
    // console.log(req.body);
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, "../", "../", "public", "uploads");
    form.keepExtensions = true;
    // fields 传递出来的数据信息   files 传递出来的文件图片信息
    form.parse(req, async(err, fields, files) => {
        // console.log(req.query); //文本数据
        // console.log(files.imgsrc.path); //文件信息
        console.log(files);
        console.log(files.imgsrc.path.split("public")[1]);
        let result = await lists.updateOne({ _id: req.query.id }, {
            //在数据库中  给集合添加数据
            name: fields.name,
            imgsrc: files.imgsrc.path.split("public")[1],
            price: fields.price,
            spend: fields.spend,
            description: fields.description,
        });
        if (!req.query.search) {
            console.log(222);
            res.redirect("/admin/index" + "?page=" + req.query.page);
        } else {
            console.log(333);
            res.redirect(
                "/admin/search" + "?page=" + req.query.page + "&name=" + req.query.name
            );
        }
    });
    // console.log(111);
};