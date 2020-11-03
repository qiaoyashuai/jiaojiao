let express = require("express");
let router = express.Router();
router.use((req, res, next) => {
    if (req.url == "/login" || req.url == "/session") {
        next();
    } else if (req.session.uname) {
        next();
    } else {
        res.redirect("/admin/login");
    }
});
//登录页面
router.get("/login", require("./router-admin/login"));
//登录页面post提交 判断数据库中是否有该用户
router.post("/session", require("./router-admin/session"));
// 主页面
router.get("/index", require("./router-admin/index"));
// 修改商品页面
router.get("/edit", require("./router-admin/edit"));
// 修改商品页面post提价
router.post("/doedit", require("./router-admin/doedit"));
// 增加商品页面
router.get("/add", require("./router-admin/add"));
// post上传问价给商品添加数据
router.post("/doadd", require("./router-admin/doadd"));
//删除某一条数据
router.post("/dele", require("./router-admin/dele"));
//查询数据数据
router.get("/search", require("./router-admin/search"));
module.exports = router;