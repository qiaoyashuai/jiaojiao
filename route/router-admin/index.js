let data = require("../../db-model/product"); //引入product数据库中的lists集合 引入成功
// require("../../db-model/remove"); //引入图片删除文件  每次打开index文件时删除无用的图片
module.exports = async(req, res) => {
    // console.log(req.query);
    let size = Number(req.query.size) || 3; //分页面 页面几页
    // console.log(size);
    let page = Number(req.query.page) || 1; //分页面的第几页   后面是默认值 前面没有用后面的
    let total = await data.countDocuments(); //数据的总条数
    let skipsize = (page - 1) * size;
    let list = await data.find({}).limit(size).skip(skipsize);
    let totalPage = Math.ceil(total / size); //总页数
    // console.log(list);
    // let list = await data.find({});  数据库中所有的数据
    let lists = await res.render("./admin/index", {
        lists: list,
        total: total,
        size,
        page,
        totalPage,
    });
};