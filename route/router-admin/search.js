let lists = require("../../db-model/product");
module.exports = async(req, res) => {
    // console.log(1111);
    // console.log(req.query); // { username: '456' }
    // let num1 = Number(req.query.price1);
    // let num2 = Number(req.query.price2);
    let page = req.query.page || 1;
    //size可以代表每页显示多少条数据
    let size = Number(req.query.size) || 2;

    //查询数据库中lists集合中总共有多少条数据
    // console.log(lists);

    // console.log(total);

    // console.log(total);
    let startpage = (page - 1) * size;
    //查询数据
    const result = await lists
        .find({
            name: new RegExp(req.query.name, "gi"),
            price: { $gt: req.query.price1, $lt: req.query.price2 }, //获取价格范围内的商品
        })
        .limit(size)
        .skip(startpage);
    console.log(result);
    let total = result.length;
    // 计算总的页数
    let totalPage = Math.ceil(total / size);
    //查询数据--用户列表
    res.render("./admin/search", {
        lists: result,
        total: total,
        page: page,
        size: size,
        totalPage: totalPage,
        name: req.query.name, //要搜索的内容
    });
};