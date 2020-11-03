let lists = require("../../db-model/product"); //引入product数据库中的lists集合 引入成功
module.exports = (req, res) => {
    console.log(req.query);
    lists.findOne({ _id: req.query._id }).then((data) => {
        // console.log(req.query.page);
        res.render("./admin/edit.ejs", {
            obj: data, //传递数据
            num: req.query.page,
            search: req.query.search,
            name: req.query.name,
            imgsrc: req.query.imgsrc,
        });
    });
};