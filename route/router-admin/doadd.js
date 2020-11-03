let lists = require("../../db-model/product"); //引入product数据库中的lists集合 引入成功product.js");
let formidable = require("formidable"); //引入第三方模块来解析表单中提价的文件数据
// console.log(formidable);
let path = require("path"); //node中内置模块 不需要下载
// console.log(path);
module.exports = (req, res) => {
    // console.log(req.body);
    //第一步  创建一个表单解析对象
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, "../", "../", "public", "uploads"); //在uploads文件夹下存放form表单提交的图片
    console.log(form);
    //第二步创建表单
    // join;
    //第三步保存后缀名
    form.keepExtensions = true;
    // 开始解析表单
    form.parse(req, async(err, fields, files) => {
        console.log(fields); //文本数据
        // console.log(files.imgsrc.path); //文件信息
        let result = await lists.create({
            //在数据库中  给集合添加数据
            name: fields.name,
            imgsrc: files.imgsrc.path.split("public")[1],
            price: fields.price,
            spend: fields.spend,
            description: fields.description,
        });
        if (result) {
            res.redirect("/admin/index");
        }
    });
};