const mongoose = require("mongoose");
// 创建集合规则
let setroue = new mongoose.Schema({
    uname: String, //名称
    paw: String, //密码
});
let uname = mongoose.model("uname", setroue); //创建的集合名称
module.exports = uname; //暴露出去