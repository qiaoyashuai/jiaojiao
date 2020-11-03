let lists = require("../../db-model/product"); //引入product数据库中的lists集合 引入成功
module.exports = (req, res) => {
    console.log(req.body);
    lists.findOneAndDelete({ _id: req.body.id }).then((data) => {
        res.redirect("/admin/index");
    });
};