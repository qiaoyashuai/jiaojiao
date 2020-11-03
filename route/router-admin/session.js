let unames = require("../../db-model/uname"); //引入数据库中的uname集合
module.exports = (req, res) => {
    // console.log(req.body);
    // 可以获取到传输的表单内容;
    global.a = 2;
    unames.find().then((data) => {
        // console.log(data);
        // console.log(req.body);
        for (var i = 0; i < data.length; i++) {
            if (req.body.unames == data[i].uname && req.body.paw == data[i].paw) {
                // console.log(11);
                req.session.uname = req.body.unames;
                // console.log(req.session.uname);
                global.uname = req.session.uname;
                // console.log(uname);
                // app.locals.uname = req.session.uname;
                // console.log(req.session.uname); //使用session里面的数据 设置session成功
                res.redirect("/admin/index?a=2");
                return;
            } else {
                res.redirect("/admin/login");
                return;
            }
        }
    }); //查询数据成功
};